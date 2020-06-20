import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
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
          className='nav-drop-down menu-links'
          onMouseLeave={() => this.toggle(false)}
           >
            <ul>
              <li 
                onClick={() => onRouteChange('home')} >Home</li>
              <li 
                onClick={() => onRouteChange('profile')} >View Profile</li>
              <li 
                onClick={() => onRouteChange('signin')} >Sign out</li>
            </ul>
        </div>
      )
    }
  }

  render() {
    const { onRouteChange  } = this.props;
    return (      
      <div className='menu-container tc'>
        <div aria-expanded={this.state.dropdownOpen}>
          <p
            className='menu'
            onClick={this.toggle}
            >≡</p>
        </div>
        {this.showDropDown()}
        <div 
          className='nav-open menu-links'
           >
            <ul>
              <li 
                onClick={() => onRouteChange('home')}
                className='link dim black underline pa3 pointer' >Home</li>
              <li 
                onClick={() => onRouteChange('profile')}
                className='link dim black underline pa3 pointer' >View Profile</li>
              <li 
                onClick={() => onRouteChange('signin')}
                className='link dim black underline pa3 pointer' >Sign out</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
