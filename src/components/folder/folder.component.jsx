import React from 'react';

import './folder.styles.scss';

import FolderItemComponent from "../folder-item/folder-item.component";

const FolderComponent = (props) => {
  const {items} = props;
  return (
    <ul className='folder'>
      {
        items.map((item) => <FolderItemComponent {...item}/>)
      }
    </ul>
  );
};

export default FolderComponent;
