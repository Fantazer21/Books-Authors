import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


const buttons = [
    <Button key="one"><Button><NavLink to={"/books"}>Books</NavLink></Button></Button>,
    <Button key="two"><Button><NavLink to={"/authors"}>Authors</NavLink></Button></Button>,
];

export default function Menu() {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                {buttons}
            </ButtonGroup>

        </Box>
    );
}