import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInputValue, setImageUrl, setImageUrlErr, setUser } from '../actions';

import './App.css';

import MainPage from './MainPage/MainPage';

const mapStateToProps = (state) => {
  return {
    user: state.userInformation.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (text) => dispatch(setInputValue(text)),
    onImageChange: (text) => dispatch(setImageUrl(text)),
    onImageError: (text) => dispatch(setImageUrlErr(text)),
    onUserLoad: (data) => dispatch(setUser(data))
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props } />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
