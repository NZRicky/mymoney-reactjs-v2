import React, { Component, Fragment, useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TransactionList from '../../components/Transaction/List';

const ScreenTransactionList = () => {

    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const selectedTransactions = (Array.isArray(transactions)) ? transactions.slice(indexOfFirstItem, indexOfLastItem) : [];
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://127.0.0.1:8000/api/transactions').then(response => response.json());
            return response;
        }
        fetchData().then((value) => {
            setTransactions(value.data); 
        });
    }, []);

    const changePage = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (


        <Fragment>
            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    </tr>

                </thead>
                <tbody>
                    <TransactionList transactions={selectedTransactions} />
                </tbody>

            </table>

            <Pagination totalItems={Array.isArray(transactions) ? transactions.length : 0} itemsPerPage={itemsPerPage} changePage={changePage} />
        </Fragment>
    );
}

export default ScreenTransactionList;