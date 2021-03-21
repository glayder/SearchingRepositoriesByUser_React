import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './style';

interface Props {
  // eslint-disable-next-line
  children: any;
}

function CardItem(props: Props) {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.cardItem}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Grid>
  );
}

export default CardItem;
