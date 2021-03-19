import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

interface Props {
  id: number;
  full_name: string;
  showDescription: any;
}

function ListDescription(props: Props) {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button onClick={() => props.showDescription(props.id)}>
        <ListItemText primary={props.full_name} />
        <ListItemIcon>
          <KeyboardArrowRightIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );
}

export default ListDescription;
