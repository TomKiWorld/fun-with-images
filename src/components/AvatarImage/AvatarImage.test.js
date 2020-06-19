import { shallow } from 'enzyme';
import React from 'react';
import AvatarImage from './AvatarImage';

describe('AvatarImage Component', () => {  
  it('Expect to render ImageCard Component', () => {
    expect(shallow(<AvatarImage />)).toMatchSnapshot();
  });

  it('Expect to render ImageCard Component with image for avatarOne', () => {
    const wrapper = shallow(<AvatarImage avatarId={'avatarOne'}/>)
    const image = wrapper.find('.avatar-img').at(0);
    expect(image.prop('src')).toBe('FaceOne.svg');
  });

  it('Expect to render ImageCard Component with image for avatarTwo', () => {
    const wrapper = shallow(<AvatarImage avatarId={'avatarTwo'}/>)
    const image = wrapper.find('.avatar-img').at(0);
    expect(image.prop('src')).toBe('FaceTwo.svg');
  });

  it('Expect to render ImageCard Component with image for avatarThree', () => {
    const wrapper = shallow(<AvatarImage avatarId={'avatarThree'}/>)
    const image = wrapper.find('.avatar-img').at(0);
    expect(image.prop('src')).toBe('FaceThree.svg');
  });

  it('Expect to render ImageCard Component with image for avatarFour', () => {
    const wrapper = shallow(<AvatarImage avatarId={'avatarFour'}/>)
    const image = wrapper.find('.avatar-img').at(0);
    expect(image.prop('src')).toBe('FaceFour.svg');
  });
});
