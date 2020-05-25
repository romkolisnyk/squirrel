import React from 'react';

import './container.styles.scss';

const ContainerComponent = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
};

export default ContainerComponent;
