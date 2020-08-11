import React, { Component, Fragment, useState, useEffect } from 'react';

import CategoryList from '../../components/Category/List';

const ScreenCategoryList = () => {

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
        <Fragment>
            <table>

<thead>
                    <tr><td>Name</td></tr>
                    </thead>
                <tbody>
                    <CategoryList categories={categories} />
                </tbody>

            </table>


        </Fragment>
    );
}

export default ScreenCategoryList;