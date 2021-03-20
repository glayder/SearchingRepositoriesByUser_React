import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  createStyles,
  Theme,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

interface Props {
  children: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      margin: 10,
      minWidth: 215,
    },
    cardItem: {
      maxWidth: '100%;',
      padding: '0!important',
      [theme.breakpoints.down(525)]: {
        flex: 1,
      },
    },
  }),
);

function CardItem(props: Props) {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.cardItem}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Grid>
  );
}

export default CardItem;
