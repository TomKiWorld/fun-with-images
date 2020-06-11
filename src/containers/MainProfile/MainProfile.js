import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resubmitImageInput, resubmitImageUrl, setImageUrl, setImageUrlErr } from '../../actions';

import Profile from '../Profile/Profile';

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
 * MainProfile container
 */
class MainProfile extends Component {
  render() {
    return <Profile { ...this.props } />;
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainProfile);
