import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '220px',
    width: '100%',
  }
})

function App() {

  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <h1 className={classes.appMain}>
        <Header />
      </h1>
    </>
  );
}

export default App;
