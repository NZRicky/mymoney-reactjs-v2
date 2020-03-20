import React, { Component, Fragment, useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TransactionList from '../../components/Transaction/List';

const ScreenTransactionList = () => {

    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const selectedTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
    useEffect(async () => {
        const response = await (await fetch('http://mymoney.local/api/transaction/list')).json();
        setTransactions(response.data);
    }, []);

    const changePage = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <Fragment>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>

                </thead>
                <tbody>
                    <TransactionList transactions={selectedTransactions} />
                </tbody>

            </table>

            <Pagination totalItems={transactions.length} itemsPerPage={itemsPerPage} changePage={changePage} />
        </Fragment>
    );
}

export default ScreenTransactionList;