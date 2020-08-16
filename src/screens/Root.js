import React, { Component, useState } from 'react';
import { Router, Switch } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ScreenTransactionList from './Transaction/List';
import ScreenCategoryList from './Category/List';
import ScreenTransactionForm from './Transaction/Form';
import ScreenCategoryForm from './Category/Form';

import BottomNav from '../components/UI/BottomNav';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import { CssBaseline, Box, Container, AppBar, Toolbar, Typography, IconButton, makeStyles, Button } from '@material-ui/core';
import theme from '../theme.js';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const ScreensRoot = () => {
    const classes = useStyles();
    const [pageTitle, setPageTile] = useState('Transactions');
    const [newButtonLink, setNewButtonLink] = useState('/transaction/new');
    return (
        <BrowserRouter>
            <CssBaseline />
            <AppBar >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>{pageTitle}</Typography>

                    {newButtonLink && (
                    <IconButton
                        component={Link} to={newButtonLink}
                        //onClick={handleMenu}
                        color="inherit"
                    >
                        <AddCircleIcon />
                    </IconButton>
                    )}

                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Box my={7}>
                    <Switch>
                        <Route path="/" component={ScreenTransactionList} exact />
                        <Route path="/transaction/list" component={ScreenTransactionList} />
                        <Route path="/category/list" component={ScreenCategoryList} />
                        <Route path="/transaction/new" component={ScreenTransactionForm} />
                        <Route path="/category/new" component={ScreenCategoryForm} />
                    </Switch>

                    {/* <p><Link to='/transaction/list'>Transactions</Link></p>
                <p><Link to='/category/list'>Category</Link></p>
                <p><Link to='/transaction/new'>New Transaction</Link></p>
                <p><Link to='/category/new'>New Category</Link></p> */}
                </Box>
            </Container>
            <BottomNav changePageTitle={setPageTile} newButtonHandler={setNewButtonLink}/>
        </BrowserRouter>
    );
}

export default ScreensRoot;