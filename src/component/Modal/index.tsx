import React from 'react';

import Modal from '@material-ui/core/Modal';
import moment from 'moment';

import useStyles from './style';

interface Props {
  // eslint-disable-next-line
  open: any;
  repoSelected: RepoSelected;
  // eslint-disable-next-line
  handleClose: any;
}

interface RepoSelected {
  full_name: string;
  description: string;
  language: string;
  created_at: string;
}

function ModalRepo(props: Props) {
  const classes = useStyles();
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>Details Repository</h1>
        <p>
          <span>Repository Full Name:</span> {props.repoSelected.full_name}
        </p>
        <p>
          <span>Description:</span> {props.repoSelected.description}
        </p>
        <p>
          <span>Language:</span> {props.repoSelected.language}
        </p>
        <p>
          <span>Date created: </span>
          {moment(props.repoSelected.created_at).format('DD/MM/YYYY')}
        </p>
      </div>
    </Modal>
  );
}

export default ModalRepo;
