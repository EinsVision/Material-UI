import React from 'react';
import PageHeader from '../../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import MemoForm from './MemoForm';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  memos: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  }
}))

function Memos() {
  const classes = useStyles();
  return (
    <div>
      <PageHeader
        title='New Memo'  
        subTitle='this is memo.' 
        icon={<PeopleIcon fontSize='large'/>}
      />
      <Paper className={classes.memos}>
        <MemoForm />
      </Paper>
     
    </div>
  )
}

export default Memos
