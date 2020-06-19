import React, { Component } from 'react';
import { DATABASE } from '../../constants';

import './Profile.css';
import ImageList from '../../components/ImageList/ImageList';
import Preloader from '../../components/Preloader/Preloader';
import ProfileGreet from '../../components/ProfileGreet/ProfileGreet';
import Modal from '../../components/Modal/Modal';
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import PopUp from '../../components/PopUp/PopUp';
import PopUpMsg from '../../components/PopUpMsg/PopUpMsg';

import AvatarImage from '../../components/AvatarImage/AvatarImage';

/**
 * User Profile
 * - Showes summary of how many times the user used the site
 * - Shows a list of previously submitted images
 * - Offers the option to resubmit past images
 * - Allowes the user to delete his/ hers profile from the database
 * 
 * Required props:
 * - user => User from Redux state
 * - onRouteChange => Function to change route
 * - onResubmit => Function to handle resubmission of images
 */
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isProfileOpen: false,
      popUpMsg: ''
    }
  }

  // Fetch user submitted images from dtatebase
  componentDidMount() {
    this.getProfileImages();
  }

  // Get profile images
  getProfileImages = () => {
    return fetch(`${DATABASE}/profile-images/${this.props.user.id}`,{
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data !== 'Unauthorized' && data.length) {
        this.setState({images: data})
      }
    })
    .catch(err => console.log('Could not fetch images'));
  }

  // Resubmit an image from the profile page
  onImageResubmit = (url) => {
    this.props.onResubmitInput(url);
    this.props.onRouteChange('home');
    this.props.onImageChange('');
    this.props.onImageError('');
    this.props.onResubmitImageUrl(true);
  }

  // Delete the profile only in case profile is not 'Visitor'
  onSubmitRemoval = () => {
    fetch(`${DATABASE}/profile-removal/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        email: this.props.user.email,
        id: this.props.user.id
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({popUpMsg: data});
      window.sessionStorage.removeItem('token');
      setTimeout(() => {
        this.props.onRouteChange('signin')
      }, 3000);
    })
    // .then(() => this.props.onRouteChange('signin'))
    .catch(err => {
      this.setState({popUpMsg: 'Unable to remove profile'});
    });
  }

  onChangeProtected = () => {
    this.setState({ popUpMsg: 'This profile is protected, you may not save changes' });
  }

  showRemoveButton = (email) => {
    const protectedEmails = [
      'visitor@gmail.com',
      'tester@gmail.com'
    ]
    const protectedEmail = (protectedEmails.indexOf(email) > -1)

    if (!protectedEmail) {
      return (
        <button 
          className='cta-button grow delete-profile-button'
          onClick={this.onSubmitRemoval}
        >Delete profile</button> 
      )
    } else {
      return (
        <button 
          className='cta-button grow delete-profile-button'
          onClick={this.onChangeProtected}
        >Delete Profile</button>)
    }
  }

  closePopUp = () => {
    this.setState({ popUpMsg: ''});
  }

  toggleModal = () => {
    this.setState(prevState => ({
      ...this.state,
      isProfileOpen: !prevState.isProfileOpen
    }));
  }

  render() {
    const { user } = this.props;
    let images = user.entries > 0 ? 
      <Preloader /> : 
      <p>Go ahead and submit <span role='img' aria-label='Smirking Face'>😏</span></p>;
    if (this.state.images.length) {
      images = 
        <ImageList 
          images={this.state.images} 
          onResubmit={this.onImageResubmit}/>
    } else {
      images = <p>You are not authorized</p>
    }

    return(
      <article className='profile pa4 mb4'>
        <AvatarImage 
            avatarId={user.avatar}
        />
        <h1>Hi <span className='capitalize'>{user.name}</span></h1>
        <ProfileGreet entries={user.entries} />
        <button 
          className='cta-button grow'
          onClick={this.toggleModal} >Edit your profile</button>
        <section>
          {images}
        </section>
        { this.state.isProfileOpen &&
          <Modal>
            <ProfileModal 
              showRemoveButton={this.showRemoveButton}
              isProfileOpen={this.state.isProfileOpen}
              toggleModal={this.toggleModal}
              loadUser={this.props.loadUser}
              user={user}
            />
          </Modal>
        }
        { this.state.popUpMsg &&
          <PopUp>
            <PopUpMsg
            message={this.state.popUpMsg}
            closePopUp={this.closePopUp}
            />
          </PopUp>
        }
      </article>
    )
  }
}
  
export default Profile;
