import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  setNameToFind: any;
  getDataUser: any;
}

function Form(props: Props) {
  return (
    <form noValidate autoComplete="off">
      <TextField
        onChange={e => props.setNameToFind(e.target.value)}
        label="Name user"
      />
      <Button
        endIcon={<SearchIcon />}
        onClick={() => {
          props.getDataUser();
        }}
        variant="contained"
        color="primary"
      >
        Primary
      </Button>
    </form>
  );
}

export default Form;
