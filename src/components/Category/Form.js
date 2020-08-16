import React, { Fragment, useState } from 'react';
import { fetchErrorHandler, fetchSuccessHandler, fetchCatchHandler } from '../../helpers/FetchHandling';
import { Button, TextField, makeStyles } from '@material-ui/core';

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
const CategoryForm = () => {
  const classes = useStyles();
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
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" onChange={(e) => setName(e.target.value)} />
      <Button variant="contained"  onClick={() => saveCategory()} className={classes.button}>Submit</Button>
      </form>
    </Fragment>
  );
};


export default CategoryForm;