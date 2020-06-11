import { shallow } from 'enzyme';
import React from 'react';
import Profile from './Profile';

describe('Profile Component', () => {
  const mockProps = {
    user: {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
      entries: 0
    }
  }
  const wrapper= shallow(<Profile {...mockProps} />)

  it('Expect to render Profile Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
