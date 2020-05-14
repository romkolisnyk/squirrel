import React from 'react';
import LinkComponent from "../link/link.component";

const FolderItemComponent = (props) => {
  return (
    <li>
      <LinkComponent { ...props } />
    </li>
  );
};

export default FolderItemComponent;
