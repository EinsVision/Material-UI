import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Memos from './pages/Memo/Memos';


const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#3f51b5",
      light: '#7986cb'
    },
    secondary: {
      main: '#d32f2f',
      light: '#ff4081',
    },
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '220px',
    width: '100%',
  }
})

function App() {

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        
        <Memos />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
