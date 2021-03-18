import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu:{
    display:'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0',
    width: '220px',
    height: '100%',
    backgroundColor: '#253053',
  }
})

function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <h1></h1>
    </div>
  )
}

export default SideMenu
