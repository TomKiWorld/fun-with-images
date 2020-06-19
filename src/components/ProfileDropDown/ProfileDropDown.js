import React, { Component } from 'react';

import './ProfileDropDown.css';

class ProfileDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = (status) => {
    if (status) {
      this.setState({dropdownOpen: status})
    } else {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  }

  showDropDown = () => {
    const { onRouteChange  } = this.props;
    if (this.state.dropdownOpen) {
      return (
        <div 
          className='nav-drop-down'
          onMouseLeave={() => this.toggle(false)}
           >
            <ul>
              <li onClick={() => onRouteChange('home')} >Home</li>
              <li onClick={() => onRouteChange('profile')} >View Profile</li>
              <li onClick={() => onRouteChange('signin')} >Sign out</li>
            </ul>
        </div>
      )
    }
  }

  render() {
    return (      
      <div className='profile-drop-down tc'>
        <div aria-expanded={this.state.dropdownOpen}>
          <p
            className='menu'
            onClick={this.toggle}
            >≡</p>
        </div>
        {this.showDropDown()}
      </div>
    )
  }
}

export default ProfileDropDown;
