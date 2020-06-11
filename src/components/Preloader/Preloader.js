import React from 'react';
import './Preloader.css';

/**
 * Site Preloader
 */
const Preloader = () => {
  return (
    <div className="Preloader">
      <div className="Preloader__holder">
        <div className="Preloader__bar"></div>
        <div className="Preloader__bar"></div>
        <div className="Preloader__bar"></div>
        <div className="Preloader__bar"></div>
        <div className="Preloader__bar"></div>
        <div className="Preloader__ball"></div>
      </div>
    </div>
  );
}

export default Preloader;
