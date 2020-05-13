import React from 'react';

import './link.styles.scss';
import IconComponent from "../icon/icon.component";

const LinkComponent = (props) => {
  const { title, url } = props;
  return (
    <a href={ url } className='link'>
      <IconComponent url={ url }/>
      <span>{ title }</span>
    </a>
  );
};

export default LinkComponent;
