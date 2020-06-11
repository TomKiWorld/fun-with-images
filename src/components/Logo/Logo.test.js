import { shallow } from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo Component', () => {
  it('Expect to render Logo Component', () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
  });
});
