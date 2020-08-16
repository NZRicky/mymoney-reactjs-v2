import React, { Fragment, useState, useEffect } from 'react';
import { fetchErrorHandler, fetchSuccessHandler, fetchCatchHandler } from '../../helpers/FetchHandling';
import { makeStyles, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

const TransactionForm = ({ categories }) => {
  const classes = useStyles();

  const defaultCategoryId = (categories.length > 0 ? categories[0].id : 0);

  const [category, setCategory] = useState('');
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

  const handleChange = (e) => {

      if (Object.keys(formData).length === 0 && formData.constructor === Object) {
        console.log('empty formdata');
        setFormData({ categoryId: e.target.value });
      } else {
        formData.categoryId = e.target.value;
        setFormData(formData);
      }

      setCategory(e.target.value);
      console.log(formData);


    
  };

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
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Amount" onKeyUp={e => {
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

<FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          {categories.map(c => (
            <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>

          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={() => saveTransaction()} className={classes.button}>Submit</Button>

      </form>
      
      

    </Fragment>
  );
};

export default TransactionForm;