import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import * as React from "react";


export function Header() {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button><NavLink to={"/menu"}>Menu</NavLink></Button>
            <Button><NavLink to={"/books"}>Books</NavLink></Button>
            <Button><NavLink to={"/authors"}>Authors</NavLink></Button>
        </ButtonGroup>
    )
}