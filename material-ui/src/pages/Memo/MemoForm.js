import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  memoForm: {
    '& .MuiFormControl-root': {
      width: '100%',
      margin: theme.spacing(1),
    }
  }
}))

const initialMemoValues = {
  id:0,
  title:'',
  contents:'',
  createDate: new Date(),
  departmentId: '',
}

function MemoForm() {
  
  const [values, setValues] = useState(initialMemoValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <form className={classes.memoForm}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='title'
            name='title'
            value={values.title} 
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='contents'
            name='contents'
            value={values.contents} 
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default MemoForm
