import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';

interface Props {
  id: number;
  full_name: string;
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
