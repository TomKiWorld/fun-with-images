import React from 'react';

/**
 * Site navigation
 * 
 * Required props:
 * - onRouteChange => Function to change the state of route
 * - isSignedIn => State to show relative links
 * - route => The current route from state
 */
const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  const mainLink = route === 'home' 
    ? 
    <p 
    onClick={() => onRouteChange('profile')}
    className='link dim black underline pa3 pointer'>Profile</p>
    :
    <p 
      onClick={() => onRouteChange('home')}
      className='link dim black underline pa3 pointer'>Home</p>

  if (isSignedIn) {
    return (
      <nav className='main-nav end'>
        {mainLink}
        <p 
          onClick={() => onRouteChange('signin')}
          className='link dim black underline pa3 pointer'>Sign out</p>
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
