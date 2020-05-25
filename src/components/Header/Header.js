import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

/**
 * Site header 
 * 
 * Required props:
 * - isSignedIn => In order to dispaly the correct naviagtion from state
 * - onRouteChange => Function to change route state
 * - route => The current route from state
 */
const Header = ({isSignedIn, onRouteChange, route}) => {
  return (
    <header className='site-header'>
      <Navigation 
          isSignedIn={isSignedIn}
          onRouteChange={onRouteChange}
          route={route} />
      <Logo />
    </header>
  );
}

export default Header;
