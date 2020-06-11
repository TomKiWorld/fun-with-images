import { shallow } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  const mockState = {
    route: 'signin',
    isSignedIn: false
  };
  const mockRouteChange = (route) => {
    mockState.route = route;
  };
  const wrapper = shallow(
    <Navigation 
      route={mockState.route} 
      isSignedIn={mockState.isSignedIn}
      onRouteChange={mockRouteChange}
    />
  );

  it('Expect to render Navigation Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to render register route', () => {
    wrapper.find('p').at(1).simulate('click')
    expect(mockState.route).toBe('register');
  });

  it('Expect to render profile route', () => {
    const wrapper = shallow(
      <Navigation 
        route={'home'} 
        isSignedIn={true}
        onRouteChange={mockRouteChange}
      />
    );
    wrapper.find('p').at(0).simulate('click')
    expect(mockState.route).toBe('profile');
  });

  it('Expect to render home route', () => {
    const wrapper = shallow(
      <Navigation 
        route={'profile'} 
        isSignedIn={true}
        onRouteChange={mockRouteChange}
      />
    );
    wrapper.find('p').at(0).simulate('click')
    expect(mockState.route).toBe('home');
  });

  it('Expect to render signin route when signed in', () => {
    const wrapper = shallow(
      <Navigation 
        route={'profile'} 
        isSignedIn={true}
        onRouteChange={mockRouteChange}
      />
    );
    wrapper.find('p').at(1).simulate('click')
    expect(mockState.route).toBe('signin');
  });

  it('Expect to render signin route when signed out', () => {
    const wrapper = shallow(
      <Navigation 
        route={'profile'} 
        isSignedIn={false}
        onRouteChange={mockRouteChange}
      />
    );
    wrapper.find('p').at(0).simulate('click')
    expect(mockState.route).toBe('signin');
  });
});