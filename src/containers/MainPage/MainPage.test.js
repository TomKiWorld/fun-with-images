import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage Component', () => {
  const mockProps = {
    route: 'signin',
    isSignedIn: false
  };
  const wrapper = shallow(<MainPage { ...mockProps}/>);

  it('Expect to render MainPage Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
