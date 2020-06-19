import React from 'react';
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

/**
 * Site navigation
 * 
 * Required props:
 * - onRouteChange => Function to change the state of route
 * - isSignedIn => State to show relative links
 */
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='main-nav end'>
        <ProfileDropDown
          onRouteChange={onRouteChange} />
      </nav>
    )
  } else {
    return(
      <nav className='main-nav end'>
        <p 
          onClick={() => onRouteChange('signin')}
          className='link dim black underline pa3 pointer'>Sign in</p>
        <p 
          onClick={() => onRouteChange('register')}
          className='link dim black underline pa3 pointer'>Register</p>
      </nav>
    )
  }
}

export default Navigation;
