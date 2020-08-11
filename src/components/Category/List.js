import React from 'react';

const CategoryList = ({ categories }) => {

  if (Array.isArray(categories) && categories.length > 0) {
    

    return (categories.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
      </tr>
    )));
  }
  return null;
};

export default CategoryList;