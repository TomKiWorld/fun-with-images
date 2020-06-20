import React, { Component } from 'react';
import FormInput from '../FormFields/FormInput/FormInput';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import AvatarImage from '../AvatarImage/AvatarImage';
import Preloader from '../Preloader/Preloader';
import { DATABASE } from '../../constants';


class ProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      avatar: this.props.user.avatar,
      updateError: '',
      loading: false
    }
  }

  getJoinedDate = () => {
    const joinedDate = new Date(this.props.user.joined);
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    return `${joinedDate.getDate()} ${monthNames[joinedDate.getMonth()]} ${joinedDate.getFullYear()}`
  }

  selectAvatar = (avatar) => {
    this.setState({avatar: avatar});
  }

  // Set state on input change
  onFieldChange = (event, term) => {
    this.setState({[term]: event.target.value })
  }
  
  // Validate user input and register the user
  onSubmitUpdate = (e) => {
    e.preventDefault();
    const { name, avatar } = this.state;
    this.setState({loading: true});

    fetch(`${DATABASE}/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        name: name,
        avatar: avatar
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.setState({
          name: user.name,
          avatar: user.avatar,
          updateError: '',
          loading: false
        });
      } else {
        this.setState({
          updateError: user,
          loading: false
        });
      }
    })
    .catch(err => {
      this.setState({
        updateError: 'Something went wrong please try again later',
        loading: false
      });
    })
  }

  render() {
    const { toggleModal, user, showRemoveButton } = this.props;
    const { name, avatar } = this.state;
    const updateError = this.state.updateError ? <p className='error-message'>{this.state.updateError}</p> : '';
    const preload = this.state.loading ? <Preloader/> : '';
    return (
      <div className='profile-model'>
        <article className='profile-container pa4 ba dark-gray b--black-10 mv4 mw6 shadow-5'>
          <span className='close-modal grow' onClick={toggleModal}>&times;</span>
          <header>
            <div className='profile-title'>
              <AvatarImage 
                avatarId={avatar}
                toggleMenu={toggleModal}
                />
              <h1 className='profile-user-name'>{name}</h1>              
            </div>
            <div className='profile-info'>
              <p>Images submitted: {user.entries}</p>
              <p>Members since: {this.getJoinedDate()}</p>
            </div>
          </header>
          <main>
            <form>
              <FormInput 
                label='Change your Name'
                name='name'
                type='text'
                placeholder={name}
                onChange={(e) => this.onFieldChange(e, 'name')}
              />
              <ProfileAvatar 
                title='Select a new Avatar:'
                avatar={avatar}
                selectAvatar={this.selectAvatar}
              />
              <div className='profile-buttons mt3'>
                <input 
                  onClick={this.onSubmitUpdate}
                  className='cta-button grow profile-button'
                  type='submit'
                  value='Save'
                />
                <button className='cta-button grow profile-button' onClick={toggleModal}>Cancel</button>
              </div>
              {updateError}
            </form>
          </main>
          {showRemoveButton(user.email)}
          {preload}
        </article>
      </div>
    );
  }
  
  
}

export default ProfileModal;
