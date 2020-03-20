import React, { Component } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ScreenTransactionList from './Transaction/List';
import ScreenCategoryList from './Category/List';


const ScreensRoot = () => (
    <BrowserRouter>
        <Route path="/transaction/list" component={ScreenTransactionList} />
        <Route path="/category/list" component={ScreenCategoryList} />


        <p><Link to='/transaction/list'>Transactions</Link></p>
        <Link to='/category/list'>Category</Link>
    </BrowserRouter>
);

export default ScreensRoot;