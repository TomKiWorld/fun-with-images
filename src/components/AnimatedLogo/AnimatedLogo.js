import React from 'react';
import './AnimatedLogo.css';
import funImages from './funGif.gif';

/**
 * Site logo
 */
const AnimatedLogo = () => {
  return (
    <div className='Logo'>
      <img src={funImages} alt='logo'/>
    </div>
  );
}

export default AnimatedLogo;
