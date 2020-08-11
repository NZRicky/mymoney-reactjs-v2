import React, { Component } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ScreenTransactionList from './Transaction/List';
import ScreenCategoryList from './Category/List';
import ScreenTransactionForm from './Transaction/Form';
import ScreenCategoryForm from './Category/Form';


const ScreensRoot = () => (
    <BrowserRouter>
        <Route path="/transaction/list" component={ScreenTransactionList} />
        <Route path="/category/list" component={ScreenCategoryList} />
        <Route path="/transaction/new" component={ScreenTransactionForm} />
        <Route path="/category/new" component={ScreenCategoryForm} />



        <p><Link to='/transaction/list'>Transactions</Link></p>
        <p><Link to='/category/list'>Category</Link></p>
        <p><Link to='/transaction/new'>New Transaction</Link></p>
        <p><Link to='/category/new'>New Category</Link></p>
    </BrowserRouter>
);

export default ScreensRoot;