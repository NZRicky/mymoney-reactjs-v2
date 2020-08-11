import React, { Component, Fragment, useState, useEffect } from 'react';
import TransactionForm from '../../components/Transaction/Form';



const ScreenTransactionForm = () => {

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
        
            <TransactionForm categories={categories} />

    );
}

export default ScreenTransactionForm;