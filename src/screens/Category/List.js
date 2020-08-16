import React, { Component, Fragment, useState, useEffect } from 'react';

import CategoryList from '../../components/Category/List';
import { List, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const ScreenCategoryList = () => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch('http://127.0.0.1:8000/api/categories').then(response => response.json());
            return response;
        }
        fetchData().then((value) => {
            setCategories(value.data);
        });
    }, []);



    return (
        <List className={classes.root} >
        <CategoryList categories={categories} />
        </List>
    );
}

export default ScreenCategoryList;