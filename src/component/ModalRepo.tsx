import React from 'react';

import Modal from '@material-ui/core/Modal';
import moment from 'moment';

import './modalRepo.css';

interface Props {
  open: any;
  repoSelected: RepoSelected;
  handleClose: any;
}

interface RepoSelected {
  full_name: string;
  description: string;
  language: string;
  created_at: string;
}

function ModalRepo(props: Props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="modal"
    >
      <div className="content">
        <h1>Details Repository</h1>
        <p>Repository Full Name: {props.repoSelected.full_name}</p>
        <p>Description: {props.repoSelected.description}</p>
        <p>Language: {props.repoSelected.language}</p>
        <p>
          Date created:
          {moment(props.repoSelected.created_at).format('DD/MM/YYYY')}
        </p>
      </div>
    </Modal>
  );
}

export default ModalRepo;
