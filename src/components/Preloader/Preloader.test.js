import { shallow } from 'enzyme';
import React from 'react';
import Preloader from './Preloader';

describe('Preloader Component', () => {
  it('Expect to render Preloader Component', () => {
    expect(shallow(<Preloader />)).toMatchSnapshot();
  });
});
