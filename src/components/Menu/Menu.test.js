import { shallow } from 'enzyme';
import React from 'react';
import Menu from './Menu';

describe('Menu Component', () => {
  const wrapper = shallow(<Menu />);

  it('Expect to render Menu Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
