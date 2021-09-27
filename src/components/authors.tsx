import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../redux/store";
import Button from '@mui/material/Button';
import {
    createAuthorAC,
    editAuthorNameAC,
    editAuthorSurnameAC,
    newAuthor,
    removeAuthorAC
} from "../redux/authorsReducer";
import {useState} from "react";
import {Input} from '@material-ui/core';


export default React.memo(function Authors() {

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')

    const authors = useSelector<AppStoreType, Array<newAuthor>>(state => state.authors)

    const dispatch = useDispatch()

    function Remove(id: string) {
        dispatch(removeAuthorAC(id))
    }

    function Create() {
        dispatch(createAuthorAC())
    }

    function changeName(id: string, value: string) {
        setName(value)
        dispatch(editAuthorNameAC(id, name))
    }

    function changeSurname(id: string, value: string) {
        setSurname(value)
        dispatch(editAuthorSurnameAC(id, surname))
    }

    let arr = authors.map((auth, ind) => {
        return <TableRow>
            <TableCell align="right">{ind + 1}</TableCell>
            <TableCell align="right">
                <Input placeholder={auth.name}
                       onBlur={() => setName(name)}
                       onChange={(e) => changeName(auth.id, e.currentTarget.value)}></Input>
            </TableCell>
            <TableCell align="right"> <Input placeholder={auth.surname}
                                             onBlur={() => setSurname(surname)}
                                             onChange={(e) => changeSurname(auth.id, e.currentTarget.value)}></Input></TableCell>
            <TableCell align="right"><Button variant="contained"
                                             onClick={() => Remove(auth.id)}>remove</Button></TableCell>
        </TableRow>
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">remove </TableCell>
                    </TableRow>
                    {arr}
                </TableHead>
            </Table>
            <Button variant="contained" onClick={() => Create()}>ADD</Button>
        </TableContainer>
    );
})
