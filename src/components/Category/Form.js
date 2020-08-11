import React, { Fragment, useState } from 'react';
import { fetchErrorHandler, fetchSuccessHandler, fetchCatchHandler } from '../../helpers/FetchHandling';


const CategoryForm = () => {
  const [name, setName] = useState('');

  async function saveCategory() {
    const response = await fetch('http://127.0.0.1:8000/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        name: name
      })
    })
    .then(fetchErrorHandler)
    .then(fetchSuccessHandler)
    .catch(fetchCatchHandler);

  }

  return (
    <Fragment>
      <label>Name</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => saveCategory()}>Submit</button>
    </Fragment>
  );
};


export default CategoryForm;