import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

/**
 * Site header 
 * 
 * Required props:
 * - isSignedIn => In order to dispaly the correct naviagtion from state
 * - onRouteChange => Function to change route state
 */
const Header = ({ avatarId, isSignedIn, onRouteChange }) => {
  return (
    <header className='site-header'>
      <Navigation
        isSignedIn={isSignedIn}
        onRouteChange={onRouteChange} />
      <Logo />
    </header>
  );
}

export default Header;
