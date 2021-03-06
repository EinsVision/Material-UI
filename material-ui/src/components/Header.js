import { AppBar, Badge, Button, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( theme => ({
  header: {
    backgroundColor: '#fff',
    // transform: 'translateZ(0)'
  },
  header__container: {
    alignItems: 'center',
  },
  header__searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover' : {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    }
  }
}))

function Header() {

  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.header}>
      <Toolbar>
        <Grid container className={classes.header__container}>
          <Grid item sm={4} style={{border: '1px solid #aaa'}} >
            <InputBase 
              className={classes.header__searchInput}
              placeholder='Search..' 
              startAdornment={<SearchIcon fontSize='small'/>}
            />
          </Grid>
          <Grid item sm>

          </Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon fontSize='small'/>
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <ChatBubbleOutlineIcon fontSize='small'/>
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon fontSize='small'/>
            </IconButton>

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
