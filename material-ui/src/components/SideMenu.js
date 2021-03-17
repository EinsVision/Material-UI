import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core";

// in CSS ///////////////////////////// makeStyles using @material-ui/core
// .sideMenu{
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   left: 0;
//   width: 320px;
//   height: 100%;
//   background-color: #253053;
// }

const useStyles = makeStyles({
  sideMenu:{
    display:'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
  }
})

function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <h1>Side Menu</h1>
    </div>
  )
}

export default SideMenu
