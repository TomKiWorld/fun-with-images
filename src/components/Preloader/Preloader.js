import React from 'react';
import preloader from './preloader.gif';

/**
 * Site Preloader
 */
const Preloader = () => {
  return (
    <div className='Preloader'>
      <img src={preloader} alt='Loading...'/>
    </div>
  );
}

export default Preloader;
