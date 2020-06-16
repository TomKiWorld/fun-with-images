import React, { Component } from 'react';
import { DATABASE } from '../../constants';

import './Profile.css';
import ImageList from '../../components/ImageList/ImageList';
import Preloader from '../../components/Preloader/Preloader';
import ProfileGreet from '../../components/ProfileGreet/ProfileGreet';

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
      images: []
    }
  }

  // Fetch user submitted images from dtatebase
  componentDidMount() {
    this.getProfileImages();
  }

  // Get profile images
  getProfileImages = () => {
    return fetch(`${DATABASE}/profile-images/${this.props.user.id}`)
    .then(response => response.json())
    .then(data => {
      if(data.length) {
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
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.props.user.email,
        id: this.props.user.id
      })
    })
    .then(response => response.json())
    .then(data => {
      alert(data);
    })
    .then(() => this.props.onRouteChange('signin'))
    .catch(err => alert('Unable to remove profile'));
  }

  showRemoveButton = (id) => {
    if (id !== 1) {
      return (
        <button 
        className='remove-button'
        onClick={this.onSubmitRemoval}
        >Delete your profile</button> 
      )
    } else {
      return <button className='remove-button'>You can not remove this profile</button>
    }
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
    }

    return(
      <article className='profile pa4 mb4'>
        <h1>Hi <span className='capitalize'>{user.name}</span></h1>
        <ProfileGreet entries={user.entries} />
        {this.showRemoveButton(user.id)}
        <section>
          {images}
        </section>
      </article>
    )
  }
}
  
export default Profile;
