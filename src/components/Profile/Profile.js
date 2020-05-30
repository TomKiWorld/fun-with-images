import React, { Component } from 'react';
import './Profile.css';
import ImageCard from '../ImageCard/ImageCard';
import Wiggle from '../Wiggle/Wiggle';

/**
 * User Profile
 * - Showes summary of how many times the user used the site
 * - Shows a list of previously submitted images
 * - Offers the option to resubmit past images
 * - Allowes the user to delete his/ hers profile from the database
 * 
 * Required props:
 * - userId => User id from state
 * - userEmail => User email from state
 * - userName => User name from state
 * - entries => Amount of times images were submitted from state
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
    fetch(`${this.props.database}/profile-images/${this.props.userId}`)
    .then(response => response.json())
    .then(data => {
      if(data.length) {
        this.setState({images: data})
      }
    })
    .catch(err => console.log('Could not fetch images'));
  }

  // Delete the profile only in case profile is not 'Visitor'
  onSubmitRemoval = () => {
    fetch(`${this.props.database}/profile-removal/${this.props.userId}`, {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.props.userEmail,
        id: this.props.userId
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
    const { userId, userName, entries, onResubmit } = this.props;
    const removeButton = userId !== 1 ? 
      <button 
        className='remove-button'
        onClick={this.onSubmitRemoval}
        >Delete your profile</button> 
        : '';

    const greet = entries > 0 ?  
      <div>
        <p>Thank you for using the app {entries} times so far!!</p> 
        <h3>The following images were submitted by you:</h3>
        <p>Note: Some images might have been submitted multipale times</p>
      </div> 
      : 
      <h3>You haven't submitted any images yet.. </h3>;

    let images = entries > 0 ? <p>Loading...</p> : <p>Go ahead and submit <span role='img' aria-label='Smirking Face'>😏</span></p>
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
                onResubmit={onResubmit}
              />
          </Wiggle>
        )        
      });
    }

    return(
      <article className='profile pa4 mb4'>
        <h2>Hi <span className='capitalize'>{userName}</span></h2>
        {greet}
        {removeButton}
        <section className='images-container'>
          {images}
        </section>
      </article>
    )
  }
}
  
export default Profile;