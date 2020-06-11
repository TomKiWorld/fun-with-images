import { shallow } from 'enzyme';
import React from 'react';
import Greet from './Greet';

describe('Greet Component', () => {
  it('Expect to render Greet Component', () => {
    expect(shallow(<Greet />)).toMatchSnapshot();
  });

  it('Expect to render Greet Component with welcome back', () => {
    expect(shallow(<Greet entries={18}/>)).toMatchSnapshot();
  });
});
