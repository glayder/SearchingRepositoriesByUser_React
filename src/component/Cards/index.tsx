import React from 'react';
import { useSelector } from 'react-redux';

import { User } from '../../store';

import { Code, PersonAdd, PeopleAlt, Book } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import CardItem from './CardItem';

import useStyles from './style';

function Cards() {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: User = useSelector((state: any) => state.user);
  return (
    <Grid
      data-testid="grid-container"
      container
      className={classes.card}
      spacing={3}
    >
      <CardItem>
        <PeopleAlt className={classes.icon} />
        Followers: <span>{user.followers}</span>
      </CardItem>
      <CardItem>
        <Book className={classes.icon} />
        Public Reposositories: <span>{user.public_repos}</span>
      </CardItem>
      <CardItem>
        <PersonAdd className={classes.icon} />
        Following: <span>{user.following}</span>
      </CardItem>
      <CardItem>
        <Code className={classes.icon} />
        Gists: <span>{user.public_gists}</span>
      </CardItem>
    </Grid>
  );
}

export default Cards;
