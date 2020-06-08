import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { setInputValue, setImageUrl, setImageUrlErr, setUser } from '../actions';

import './App.css';

import Particles from 'react-particles-js';
import Header from '../components/Header/Header';
import SignIn from './SignIn/SignIn';
import Footer from '../components/Footer/Footer';

const FaceApp= React.lazy(() => import('./FaceApp/FaceApp'));
const Register= React.lazy(() => import('./Register/Register'));
const Profile= React.lazy(() => import('./Profile/Profile'));

const mapStateToProps = (state) => {
  return {
    user: state.userInformation.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (text) => dispatch(setInputValue(text)),
    onImageChange: (text) => dispatch(setImageUrl(text)),
    onImageError: (text) => dispatch(setImageUrlErr(text)),
    onUserLoad: (data) => dispatch(setUser(data))
  }
}

// Options for the particals component
const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

// Initiale state for reset during logout
const initalState = {
  route: 'signin',
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initalState;
  }

  // Change the route state
  onRouteChange = (route) => {
    ((route === 'home') || (route === 'profile')) ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false});
    if (route === 'signin') {
      this.setState(initalState);
      this.props.onInputChange('');
      this.props.onUserLoad({});
    }
    if (route === 'home') {
      this.props.onImageChange('');
      this.props.onImageError('');
    }
    this.setState({route: route})
  }

  renderContent(route) {
    switch(route) {
      case 'signin':
        return (
          <SignIn 
            loadUser={this.props.onUserLoad}
            onRouteChange={this.onRouteChange} 
          />
        );
      case 'home':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <FaceApp />
          </Suspense>
        );
      case 'register':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Register 
              loadUser={this.props.onUserLoad}
              onRouteChange={this.onRouteChange}
            />
          </Suspense>
        );
      case 'profile':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile
              onRouteChange={this.onRouteChange}
            />
          </Suspense>
        );
      default:
        return (
          <SignIn 
            loadUser={this.props.onUserLoad}
            onRouteChange={this.onRouteChange} 
          />
        );
    }
  }

  render() {
    const { isSignedIn, route } = this.state;

    return (
      <div className='App'>
        <Particles
          className='particles' 
          params={particlesOptions}
        />
        <Header 
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange} 
          route={route}
          />
        { this.renderContent(route)}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
