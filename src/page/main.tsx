import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { User, Repositories } from '../store/index';

import { Container, List } from '@material-ui/core';

import Form from '../component/Form';
import ModalRepo from '../component/Modal';
import ListDescription from '../component/ListDescription';
import UserInfo from '../component/UserInfo';
import Loading from '../component/Loading';
import Cards from '../component/Cards';

import useStyles from './style';

function Main() {
  const [nameToFind, setNameToFind] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repoSelected, setRepoSelected] = useState<Repositories[] | any>({
    id: 0,
    full_name: '',
    created_at: '',
    description: '',
    language: '',
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const repositories: Repositories[] = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.repository,
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: User = useSelector((state: any) => state.user);

  async function findUser() {
    const userInfo = await fetch(`https://api.github.com/users/${nameToFind}`);
    const data = await userInfo.json();
    dispatch({ type: 'ADD_USER', user: data });
  }

  async function findRepositories() {
    setLoading(true);
    const repo = await fetch(
      `https://api.github.com/users/${nameToFind}/repos`,
    );
    const data = await repo.json();
    setLoading(false);
    // setRepositories(data);
    dispatch({ type: 'ADD_REPOSITORY', repository: data });
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
        <>
          <UserInfo />
          <Cards />
        </>
      )}
      {!!repositories.length && (
        <List className={classes.root} aria-label="mailbox folders">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
