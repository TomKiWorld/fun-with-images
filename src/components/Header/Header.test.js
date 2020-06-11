import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header Component', () => {
  it('Expect to render Header Component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});