import React from 'react';
import avatarOne from '../../images/FaceOne.svg';
import avatarTwo from '../../images/FaceTwo.svg';
import avatarThree from '../../images/FaceThree.svg';
import avatarFour from '../../images/FaceFour.svg';

const getAvatar = (avatarId) => {
  switch(avatarId) {
    case 'avatarOne':
      return avatarOne;
    case 'avatarTwo':
      return avatarTwo;
    case 'avatarThree':
      return avatarThree;
    case 'avatarFour':
      return avatarFour;
    default:
      return avatarOne;
  }      
}

const AvatarImage = ({ avatarId }) => {
  return (
    <img
      src={getAvatar(avatarId)}
      className='avatar-img' alt='avatar'
      />
  );
}

export default AvatarImage;
