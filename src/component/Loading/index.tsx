import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';

function Loading() {
  const classes = useStyles();
  return (
    <div data-testid="loading" className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
