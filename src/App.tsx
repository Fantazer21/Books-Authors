import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from "./components/menu";
import Books from "./components/books";
import Authors from "./components/authors";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Header} from "./components/header";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));


export default function App() {
    const classes = useStyles();
    return (
        <HashRouter>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Switch>
                            <Typography variant="h6" className={classes.title}>
                                <Header/>
                            </Typography>
                        </Switch>
                    </Toolbar>
                </AppBar>
                <Typography variant="h6" className={classes.title}>
                    <Route exact path={'/menu'} render={() => <Menu/>}/>
                    <Route exact path={'/books'} render={() => <Books/>}/>
                    <Route exact path={'/authors'} render={() => <Authors/>}/>
                </Typography>
            </Box>
        </HashRouter>


    )
        ;
}


