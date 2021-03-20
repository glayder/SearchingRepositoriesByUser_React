import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Code, PersonAdd, PeopleAlt, Book } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import CardItem from './CardItem';

import './card.css';

interface Props {
  followers: string;
  public_repos: string;
  following: string;
  public_gists: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: '0.8rem',
      padding: 0,
      justifyContent: 'center',
    },
    icon: {
      marginRight: 10,
    },
  }),
);

function Cards(props: Props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.card} spacing={3}>
      <CardItem>
        <PeopleAlt className={classes.icon} />
        Followers: <span>{props.followers}</span>
      </CardItem>
      <CardItem>
        <Book className={classes.icon} />
        Public Reposositories: <span>{props.public_repos}</span>
      </CardItem>
      <CardItem>
        <PersonAdd className={classes.icon} />
        Following: <span>{props.following}</span>
      </CardItem>
      <CardItem>
        <Code className={classes.icon} />
        Gists: <span>{props.public_gists}</span>
      </CardItem>
    </Grid>
  );
}

export default Cards;
