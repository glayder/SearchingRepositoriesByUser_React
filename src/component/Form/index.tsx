import React from 'react';

import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

interface Props {
  setNameToFind(e: string): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
}

function Form(props: Props) {
  const classes = useStyles();
  return (
    <form
      data-testid="find-user-form"
      onSubmit={props.handleSubmit}
      noValidate
      autoComplete="off"
      className={classes.form}
    >
      <TextField
        inputProps={{
          'data-testid': 'find-user-input',
        }}
        onChange={e => props.setNameToFind(e.target.value)}
        label="Name user"
      />
      <Button
        type="submit"
        endIcon={<SearchIcon />}
        color="primary"
        variant="contained"
        className={classes.btnSubmit}
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
