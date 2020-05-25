import React from 'react';
import './Logo.css';
import funImages from './funGif.gif';

/**
 * Site logo
 */
const Logo = () => {
  return (
    <div className='Logo'>
      <img src={funImages} alt='logo'/>
    </div>
  );
}

export default Logo;
