import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    left: 'calc(50% - 20px)',
    position: 'fixed',
  },
}));

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
