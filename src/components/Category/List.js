import React from 'react';

const CategoryList = ({categorys}) => {
    return (categorys.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>

        </tr>

      )));
};

export default CategoryList;