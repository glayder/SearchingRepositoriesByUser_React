import React, { useState } from 'react';

import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Form from '../component/Form';
import ModalRepo from '../component/ModalRepo';
import ListDescription from '../component/ListDescription';

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
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
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
      twitter_username: data.twitter_username,
      company: data.company,
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
    return <h1>Loading</h1>;
  }
  return (
    <Container maxWidth="sm">
      <Form setNameToFind={setNameToFind} handleSubmit={handleSubmit} />
      <br />
      {user.public_repos && (
        <div>
          <p>Name: ${user.name}</p>
          <p>Public Reposositories: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Blog: {user.blog}</p>
          <p>Bio: {user.bio}</p>
          <p>Twitter: {user.twitter_username}</p>
          <p>Company: {user.company}</p>
        </div>
      )}
      <br />
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
