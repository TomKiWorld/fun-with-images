import React, { Component } from 'react';

import Particles from 'react-particles-js';
import SuspenseLoad from '../../components/SuspenseLoad/SuspenseLoad';
import Header from '../../components/Header/Header';
import SignIn from '../SignIn/SignIn';
import Footer from '../../components/Footer/Footer';

const FaceApp= React.lazy(() => import('../FaceApp/FaceApp'));
const Register= React.lazy(() => import('../Register/Register'));
const MainProfile= React.lazy(() => import('../MainProfile/MainProfile'));

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

class MainPage extends Component {
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

  renderContent = (route) => {
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
          <SuspenseLoad>
            <FaceApp />
          </SuspenseLoad>
        );
      case 'register':
        return (
          <SuspenseLoad>
            <Register 
              loadUser={this.props.onUserLoad}
              onRouteChange={this.onRouteChange}
            />
          </SuspenseLoad>
        );
      case 'profile':
        return (
          <SuspenseLoad>
            <MainProfile
              onRouteChange={this.onRouteChange}
            />
          </SuspenseLoad>
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

export default MainPage;
