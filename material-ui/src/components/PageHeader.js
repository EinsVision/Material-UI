import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    backgroundColor: '#fdfdff',
  },
  pageHedaer__contents: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  pageHeader__pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1',
  },
  pageHeader__pageTitle: {
    paddingLeft: theme.spacing(4),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    }
  }
}))

function PageHeader(props) {
  const classes = useStyles();
  const {title, subTitle, icon} = props;

  return (
    <Paper square className={classes.pageHeader}>
      <div className={classes.pageHedaer__contents}>
        <Card className={classes.pageHeader__pageIcon}>
          {icon}
        </Card>
        <div className={classes.pageHeader__pageTitle}>
          <Typography
            variant='h6'
            component='div' 
          >
            {title}
          </Typography>

          <Typography
            variant='subtitle2'
            component='div' 
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader
