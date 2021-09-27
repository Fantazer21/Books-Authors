import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {booksType, createBookAC, editBookAC} from "../redux/booksReducer";
import {AppStoreType} from "../redux/store";
import Button from '@mui/material/Button';
import {editAuthorSurnameAC } from "../redux/authorsReducer";
import {useState} from "react";
import {Input } from '@material-ui/core';


export default React.memo(function Books() {

    const [title, setTitle] = useState<string>('')

    const books = useSelector<AppStoreType, Array<booksType>>(state => state.books)

    const dispatch = useDispatch()

    function Create() {
        dispatch(createBookAC())
    }

    function changeTitle(id: string, value: string) {
        setTitle(value)
        dispatch(editBookAC(id, value))
    }
    let arr = books.map((b, ind) => {
        return <TableRow>
            <TableCell align="right">{ind + 1}</TableCell>
            <TableCell align="center">
                <Input placeholder={b.title}
                       onBlur={() => setTitle(title)}
                       onChange={(e) => changeTitle(b.id, e.currentTarget.value)}></Input>
            </TableCell>
            <TableCell align="right">{b.nameAuthor}</TableCell>
            <TableCell align="right">{b.surnameAuthor}</TableCell>
            <TableCell align="right">{b.firstPublish}</TableCell>
            <TableCell align="right"><img src={b.coverPage} width={'40px'} height={'40px'}/> </TableCell>
        </TableRow>
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">First publish</TableCell>
                        <TableCell align="right">Cover </TableCell>
                    </TableRow>
                    {arr}
                </TableHead>
            </Table>
            <Button variant="contained" onClick={() => Create()}>ADD</Button>
        </TableContainer>
    );
})
