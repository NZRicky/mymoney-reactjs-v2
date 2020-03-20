import React, { Component, Fragment, useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import CategoryList from '../../components/Category/List';

const ScreenCategoryList = () => {

    const [Categorys, setCategorys] = useState([]);

    useEffect(async () => {
        const response = await (await fetch('http://mymoney.local/api/category/list')).json();
        setCategorys(response.data);
    }, []);

    

    return (
        <Fragment>
            <table>
                <thead>
                    <th>Name</th>

                </thead>
                <tbody>
                    <CategoryList Categorys={Categorys} />
                </tbody>

            </table>


        </Fragment>
    );
}

export default ScreenCategoryList;