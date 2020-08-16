import React, { Fragment } from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
const CategoryList = ({ categories }) => {

  if (Array.isArray(categories) && categories.length > 0) {


    return (categories.map((item) => (
      <Fragment key={item.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} ></ListItemText>

        </ListItem>
      </Fragment>

    )));
  }
  return null;
};

export default CategoryList;