import React from 'react';
import { useSelector } from 'react-redux';

import { User } from '../../store';

import { Avatar, Grid, Paper, Typography, Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './style';

function UserInfo() {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: User = useSelector((state: any) => state.user);
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            className={classes.image}
            src={user.avatar_url}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className={classes.gridDescription}>
              <Typography gutterBottom variant="subtitle1">
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.company}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.bio}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user.blog}
              </Typography>
              {user.twitter_username && (
                <Link
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                >
                  <TwitterIcon />
                </Link>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserInfo;
