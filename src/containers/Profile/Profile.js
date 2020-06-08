import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DATABASE } from '../../constants';
import { resubmitImageInput, resubmitImageUrl, setImageUrl, setImageUrlErr } from '../../actions';

import './Profile.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import Wiggle from '../../components/Wiggle/Wiggle';

const mapStateToProps = (state) => {
  return {
    user: state.userInformation.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResubmitInput: (text) => dispatch(resubmitImageInput(text)),
    onResubmitImageUrl: (bool) => dispatch(resubmitImageUrl(bool)),
    onImageChange: (text) => dispatch(setImageUrl(text)),
    onImageError: (text) => dispatch(setImageUrlErr(text))
  }
}

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
  constructor(props) {
    super();
    this.state = {
      images: []
    }
  }

  // Fetch user submitted images from dtatebase
  componentDidMount() {
    fetch(`${DATABASE}/profile-images/${this.props.user.id}`)
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

  render() {
    const { user } = this.props;
    const removeButton = user.id !== 1 ? 
      <button 
        className='remove-button'
        onClick={this.onSubmitRemoval}
        >Delete your profile</button> 
        : '';

    const greet = user.entries > 0 ?  
      <div>
        <p>Thank you for using the app {user.entries} times so far!!</p> 
        <h3>The following images were submitted by you:</h3>
        <p>Note: Some images might have been submitted multipale times</p>
      </div> 
      : 
      <h3>You haven't submitted any images yet.. </h3>;

    let images = user.entries > 0 ? <p>Loading...</p> : <p>Go ahead and submit <span role='img' aria-label='Smirking Face'>😏</span></p>
    if (this.state.images.length) {
      images = this.state.images.map(image => {
        return (
          <Wiggle
            key={image.id}
            elementId= {`ImageCard-${image.id}`}>
              <ImageCard
                key={image.id}
                id={image.id}
                url={image.url}
                onResubmit={this.onImageResubmit}
              />
          </Wiggle>
        )        
      });
    }

    return(
      <article className='profile pa4 mb4'>
        <h1>Hi <span className='capitalize'>{user.name}</span></h1>
        {greet}
        {removeButton}
        <section className='images-container'>
          {images}
        </section>
      </article>
    )
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
