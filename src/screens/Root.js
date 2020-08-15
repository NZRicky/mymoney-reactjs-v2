import React, { Component } from 'react';
import { Router, Switch } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ScreenTransactionList from './Transaction/List';
import ScreenCategoryList from './Category/List';
import ScreenTransactionForm from './Transaction/Form';
import ScreenCategoryForm from './Category/Form';

import BottomNav from '../components/UI/BottomNav';


import { CssBaseline, Box, Container } from '@material-ui/core';
import theme from '../theme.js';


const ScreensRoot = () => {

    return (
        <BrowserRouter>
            <CssBaseline />
            <Container maxWidth="sm">
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
            </Container>
            <BottomNav />
        </BrowserRouter>
    );
}

export default ScreensRoot;