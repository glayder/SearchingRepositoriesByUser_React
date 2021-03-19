import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  setNameToFind: any;
  handleSubmit: any;
}

function Form(props: Props) {
  return (
    <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
      <TextField
        onChange={e => props.setNameToFind(e.target.value)}
        label="Name user"
      />
      <Button
        type="submit"
        endIcon={<SearchIcon />}
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
