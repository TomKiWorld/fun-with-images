import { shallow } from 'enzyme';
import React from 'react';
import SuspenseLoad from './SuspenseLoad';

describe('SuspenseLoad Component', () => {
  const child = () => <h1>Test</h1>;
  it('Expect to render SuspenseLoad Component', () => {
    expect(shallow(<SuspenseLoad child/>)).toMatchSnapshot();
  });
});
