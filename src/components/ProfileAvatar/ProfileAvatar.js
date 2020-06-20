import React from 'react';
import avatarOne from '../../images/FaceOne.svg';
import avatarTwo from '../../images/FaceTwo.svg';
import avatarThree from '../../images/FaceThree.svg';
import avatarFour from '../../images/FaceFour.svg';

import './ProfileAvatar.css';

const setclasses = (text, avatar) => {
  return text === avatar ? 'avatar-img hyve grow selected' : 'avatar-img hyve grow';
}

const ProfileAvatar = ({ title, avatar, selectAvatar }) => {
  return (
    <div>
      <p className='db fw6 lh-copy f6'>{title}</p>
      <div className='profile-avatars'>
        <img
          className={setclasses('avatarOne', avatar)}
          src={avatarOne}
          alt='Avatar one'
          onClick={() => selectAvatar('avatarOne')}
        />
        <img
          className={setclasses('avatarTwo', avatar)}
          src={avatarTwo} 
          alt='Avatar two'
          onClick={() => selectAvatar('avatarTwo')}
        />
        <img
          className={setclasses('avatarThree', avatar)}
          src={avatarThree} 
          alt='Avatar three' 
          onClick={() => selectAvatar('avatarThree')}
        />
        <img
          className={setclasses('avatarFour', avatar)}
          src={avatarFour} 
          alt='Avatar four' 
          onClick={() => selectAvatar('avatarFour')}
        />
      </div>
    </div>
  );
}

export default ProfileAvatar;
