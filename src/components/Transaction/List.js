import React, { Fragment } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import ListSubheader from '@material-ui/core/ListSubheader';
import { ListItemSecondaryAction } from '@material-ui/core';

const TransactionList = ({ transactions }) => {
  console.log(transactions);
  return (transactions.map((item) => (
    <Fragment key={item.id}>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.category} secondary={item.date}></ListItemText>
        <ListItemSecondaryAction>
          ${item.amount}
        </ListItemSecondaryAction>
      </ListItem>
    </Fragment>
    // <tr key={item.id}>
    //   <td>{item.date}</td>
    //   <td>{item.amount}</td>
    //   <td>{item.category}</td>
    // </tr>

  )));
};

export default TransactionList;