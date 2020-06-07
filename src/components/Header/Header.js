import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';

/**
 * Site header 
 * 
 * Required props:
 * - isSignedIn => In order to dispaly the correct naviagtion from state
 * - onRouteChange => Function to change route state
 * - route => The current route from state
 */
const Header = ({ isSignedIn, onRouteChange, route, loaded }) => {
  const logo = loaded ? <AnimatedLogo /> : <Logo />;
  return (
    <header className='site-header'>
      <Navigation 
          isSignedIn={isSignedIn}
          onRouteChange={onRouteChange}
          route={route} />
      {logo}
    </header>
  );
}

export default Header;
