import React, { Fragment, useState, useEffect } from 'react';
import { fetchErrorHandler, fetchSuccessHandler, fetchCatchHandler } from '../../helpers/FetchHandling';

const TransactionForm = ({ categories }) => {

  const defaultCategoryId = (categories.length > 0 ? categories[0].id : 0);

  const [formData, setFormData] = useState({
    amount: 0,
    categoryId: 0
  });

  // useEffect(() => {
  //   setFormData({
  //     amount: 0,
  //     categoryId: defaultCategoryId
  //   });
  // }, []);

  async function saveTransaction() {
    
    if (formData.categoryId == 0) {
      formData.categoryId = defaultCategoryId;
    }

    await fetch('http://127.0.0.1:8000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(fetchErrorHandler)
      .then(fetchSuccessHandler)
      .catch(fetchCatchHandler);
  }

  return (
    <Fragment>
      <label>Amoun</label>
      <input type="text" onKeyUp={e => {
        if (Object.keys(formData).length === 0 && formData.constructor === Object) {
          console.log('empty formdata');
          setFormData({ amount: e.target.value });
        } else {
          formData.amount = e.target.value;
          setFormData(formData);
        }
        console.log(formData);
      }
      } />
      <p>
        <label>Category</label>
        <select onChange={ e => {
          if (Object.keys(formData).length === 0 && formData.constructor === Object) {
            console.log('empty formdata');
            setFormData({ categoryId: e.target.value });
          } else {
            formData.categoryId = e.target.value;
            setFormData(formData);
          }
          console.log(formData);
        }

        }>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}

        </select>
      </p>
      <button onClick={() => saveTransaction()}>Submit</button>
    </Fragment>
  );
};

export default TransactionForm;