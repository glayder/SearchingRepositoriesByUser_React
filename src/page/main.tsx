import React, { useState } from 'react';

import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Form from '../component/Form';
import ModalRepo from '../component/ModalRepo';
import ListDescription from '../component/ListDescription';
import UserInfo from '../component/UserInfo';
import Loading from '../component/Loading';
import Cards from '../component/Cards';

interface Repositories {
  id: number;
  full_name: string;
  created_at: string;
  description: string;
  language: string;
}

interface User {
  public_repos: string;
  followers: string;
  following: string;
  blog: string;
  name: string;
  bio: string;
  twitter_username: string;
  company: string;
  public_gists: string;
  avatar_url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 5,
      boxShadow: '1px 1px 2px #00000061',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      padding: 24,
    },
  }),
);
function Main() {
  const [user, setUser] = useState<User>({
    public_repos: '',
    followers: '',
    following: '',
    blog: '',
    name: '',
    bio: '',
    twitter_username: '',
    company: '',
    public_gists: '',
    avatar_url: '',
  });
  const [nameToFind, setNameToFind] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<Repositories[]>([]);
  const [repoSelected, setRepoSelected] = useState<Repositories[] | any>({
    id: 0,
    full_name: '',
    created_at: '',
    description: '',
    language: '',
  });

  const classes = useStyles();

  async function findUser() {
    const userInfo = await fetch(`https://api.github.com/users/${nameToFind}`);
    const data = await userInfo.json();
    setUser({
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      blog: data.blog,
      name: data.name,
      bio: data.bio,
      public_gists: data.public_gists,
      twitter_username: data.twitter_username,
      company: data.company,
      avatar_url: data.avatar_url,
    });
  }

  async function findRepositories() {
    setLoading(true);
    const repo = await fetch(
      `https://api.github.com/users/${nameToFind}/repos`,
    );
    const data = await repo.json();
    setRepositories(data);
    setLoading(false);
  }

  function showDescription(id: number) {
    const description = repositories.filter(i => i.id === id);
    setRepoSelected(description[0]);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    findUser();
    findRepositories();
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <Container className={classes.container}>
      <Form setNameToFind={setNameToFind} handleSubmit={handleSubmit} />
      {user.public_repos && (
        <div>
          <UserInfo user={user} />
          <Cards
            followers={user.followers}
            public_repos={user.public_repos}
            following={user.following}
            public_gists={user.public_gists}
          />
        </div>
      )}
      {!!repositories.length && (
        <List className={classes.root} aria-label="mailbox folders">
          {repositories.map((i: any) => (
            <div key={i.id}>
              <ListDescription
                id={i.id}
                full_name={i.full_name}
                showDescription={showDescription}
              />
            </div>
          ))}
        </List>
      )}

      <ModalRepo
        open={open}
        handleClose={handleClose}
        repoSelected={repoSelected}
      />
    </Container>
  );
}

export default Main;
