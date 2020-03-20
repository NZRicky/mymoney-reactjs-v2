import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, changePage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {

        pageNumbers.push(i);
    }
    return (<div>
        <ul>
            {pageNumbers.map((i) => {
                return (<li onClick={() => changePage(i)} key={i}>{i}</li>);
            })
            }

        </ul>
    </div>);
}

export default Pagination;