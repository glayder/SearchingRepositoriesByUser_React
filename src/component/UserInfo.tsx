import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

interface Props {
  user: User;
}

interface User {
  blog: string;
  name: string;
  bio: string;
  twitter_username: string;
  company: string;
  avatar_url: string;
  followers: string;
  public_repos: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
  },
  gridContainer: {
    [theme.breakpoints.down(600)]: {
      justifyContent: 'center',
    },
  },
  gridDescription: {
    [theme.breakpoints.down(600)]: {
      textAlign: 'center',
    },
  },
}));

function UserInfo(props: Props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            className={classes.image}
            src={props.user.avatar_url}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs className={classes.gridDescription}>
              <Typography gutterBottom variant="subtitle1">
                {props.user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {props.user.company}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {props.user.bio}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.user.blog}
              </Typography>
              {props.user.twitter_username && (
                <Link
                  href={`https://twitter.com/${props.user.twitter_username}`}
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
