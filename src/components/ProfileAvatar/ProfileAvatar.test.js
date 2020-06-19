import { shallow } from 'enzyme';
import React from 'react';
import ProfileAvatar from './ProfileAvatar';

describe('ProfileAvatar Component', () => {
  const wrapper =
    shallow(
      <ProfileAvatar 
      title={'Hello'} 
      avatar={'avatarOne'}
      />
      );

  it('Expect to render ProfileAvatar Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
