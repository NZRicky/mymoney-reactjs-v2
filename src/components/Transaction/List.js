import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import ListSubheader from '@material-ui/core/ListSubheader';

const TransactionList = ({ transactions }) => {
  console.log(transactions);
  return (transactions.map((item) => (
    <>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.category} secondary={item.date} />
      <ListSubheader>${item.amount}</ListSubheader>
    </ListItem>

<ListItem>
<ListItemAvatar>
  <Avatar>
    <ImageIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary={item.category} secondary={item.date} />
</ListItem>

<ListItem>
<ListItemAvatar>
  <Avatar>
    <ImageIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary={item.category} secondary={item.date} />
</ListItem>

<ListItem>
<ListItemAvatar>
  <Avatar>
    <ImageIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary={item.category} secondary={item.date} />
</ListItem>

<ListItem>
<ListItemAvatar>
  <Avatar>
    <ImageIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary={item.category} secondary={item.date} />
</ListItem>
</>

    // <tr key={item.id}>
    //   <td>{item.date}</td>
    //   <td>{item.amount}</td>
    //   <td>{item.category}</td>
    // </tr>

  )));
};

export default TransactionList;