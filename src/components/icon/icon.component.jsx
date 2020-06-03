import React from 'react';

import './icon.styles.scss';

const IconComponent = (props) => {
  const { url } = props;
  // bad naming
  const src1x = `chrome://favicon/${ url }`;
  const src2x = `chrome://favicon/size/16@2x/${ url }`;

  return (
    <img
      className='icon'
      src={ src1x }
      srcSet={ src2x }
      alt={ `website favicon` }
    />
  );
};

export default IconComponent;
