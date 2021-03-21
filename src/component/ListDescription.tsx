import React from 'react';

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

interface Props {
  id: number;
  full_name: string;
  // eslint-disable-next-line
  showDescription: any;
}

function ListDescription(props: Props) {
  return (
    <>
      <ListItem button onClick={() => props.showDescription(props.id)}>
        <ListItemText primary={props.full_name} />
        <ListItemIcon>
          <KeyboardArrowRightIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </>
  );
}

export default ListDescription;
