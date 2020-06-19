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
  }

  const wrapper = shallow(
    <Navigation 
      route={mockState.route} 
      isSignedIn={mockState.isSignedIn}
      onRouteChange={(value) => mockRouteChange(value)}
    />
  );

  it('Expect to render Navigation Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to change rout to register', () => {
    const registerBtn = wrapper.find('.link').at(1);
    registerBtn.simulate('click', { value: 'register' } );
    expect(mockState.route).toBe('register');
  });

  it('Expect to change rout to sigin', () => {
    const signinBtn = wrapper.find('.link').at(0);
    signinBtn.simulate('click', { value: 'signin' } );
    expect(mockState.route).toBe('signin');
  });

  it('Expect to render Navigation Component when signed in', () => {
    const wrapper = shallow(
      <Navigation 
        route={mockState.route} 
        isSignedIn={true}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
