import React, { Component, Fragment, useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TransactionList from '../../components/Transaction/List';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const ScreenTransactionList = () => {
    const classes = useStyles();
    const [scrolledToBottom, setScrolledToBottom] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    console.log("currentPage", currentPage);
    const indexOfLastItem = currentPage * itemsPerPage;

    //const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const indexOfFirstItem = 0;
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

    const handleScroll = () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("scrollTop",scrollTop);
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledToBottom = scrollTop / height;
        if (1 == scrolledToBottom) {
            setCurrentPage(currentPage + 1);
        }
        //setScrolledToBottom(scrolledToBottom);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[]);

    return (
        <Fragment >
            <List className={classes.root} >
                <TransactionList transactions={selectedTransactions} />
            </List>

            <Pagination totalItems={Array.isArray(transactions) ? transactions.length : 0} itemsPerPage={itemsPerPage} changePage={changePage} />
            {/* <table>
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

            <Pagination totalItems={Array.isArray(transactions) ? transactions.length : 0} itemsPerPage={itemsPerPage} changePage={changePage} /> */}
        </Fragment>
    );
}

export default ScreenTransactionList;