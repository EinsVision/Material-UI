import { AppBar, Badge, Button, Grid, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container>
          <Grid item sm={4} style={{border: '1px solid #fff'}} >
            <InputBase />
          </Grid>

          <Grid item sm={8} style={{border: '1px solid #000'}}>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
