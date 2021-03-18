import { makeStyles } from '@material-ui/core';
import React from 'react';
import SideMenu from './components/SideMenu';

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%',
  }
})

function App() {

  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <h1 className={classes.appMain}>
        app manu
      </h1>
    </>
  );
}

export default App;
// 18