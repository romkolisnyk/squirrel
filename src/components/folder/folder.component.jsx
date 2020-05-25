import React from 'react';

import './folder.styles.scss';

import FolderItemComponent from "../folder-item/folder-item.component";

const FolderComponent = (props) => {
  const {items, title} = props;
  return (
    <div className='folder'>
      <p className='folder__header'>{title.toUpperCase()}</p>
      {
        items.map((item) => <FolderItemComponent {...item}/>)
      }
    </div>
  );
};

export default FolderComponent;
