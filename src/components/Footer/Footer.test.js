import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('Expect to render Footer Component', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
