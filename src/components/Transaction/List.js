import React from 'react';

const TransactionList = ({transactions}) => {
console.log(transactions);
    return (transactions.map((item) => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.amount}</td>
          <td>{item.category}</td>
        </tr>

      )));
};

export default TransactionList;