import { shallow } from 'enzyme';
import React from 'react';
import ProfileDropDown from './ProfileDropDown';

describe('ProfileDropDown Component', () => {
  const wrapper = shallow(<ProfileDropDown />);

  it('Expect to render ProfileDropDown Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
