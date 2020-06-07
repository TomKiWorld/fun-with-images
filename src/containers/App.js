import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Particles from 'react-particles-js';
import Header from '../components/Header/Header';
import SignIn from './SignIn/SignIn';
import Footer from '../components/Footer/Footer';
import { DATABASE } from '../constants';
import { setInputValue, resubmitImageInput, setImageUrl, setImageUrlErr, setUser, setEntries } from '../actions';

const FaceApp= React.lazy(() => import('./FaceApp/FaceApp'));
const Register= React.lazy(() => import('./Register/Register'));
const Profile= React.lazy(() => import('./Profile/Profile'));

const mapStateToProps = (state) => {
  return {
    inputValue: state.imageUrlInputValue.inputValue,
    imageUrl: state.imageUrlInputValue.imageUrl,
    imageUrlError: state.imageUrlInputValue.imageUrlError,
    user: state.userInformation.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(setInputValue(event.target.value)),
    onResubmitInput: (text) => dispatch(resubmitImageInput(text)),
    onImageChange: (text) => dispatch(setImageUrl(text)),
    onImageError: (text) => dispatch(setImageUrlErr(text)),
    onUserLoad: (data) => dispatch(setUser(data)),
    onEntriesUpdate: (number) => dispatch(setEntries(number))
  }
}

// Options for the particals component
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

// Initiale state for reset during logout
const initalState = {
  getColorsError: '',
  getFacesError: '',
  colors: [],
  route: 'signin',
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initalState;
  }

  // Set the user from the response into state
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  // Validate the url on submit and make sure a new url is entered
  onImageUrlSubmit = () => {
    if (this.props.inputValue) {
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (this.props.inputValue !== this.props.imageUrl) {
        if (regexp.test(this.props.inputValue)) {
          this.props.onImageChange(this.props.inputValue);
          this.props.onImageError('');
          document.querySelectorAll('.bounding-box').forEach(el => el.remove());
          this.getColors();
          this.getFaces();
        } else {
          this.props.onImageError('Please enter a valid url');
        }        
      } else {
        this.props.onImageError('Please enter a new url');
      } 
    } else {
      this.props.onImageError('Please enter an image url');
    }    
  }

  // Resubmit an image from the profile page
  onImageResubmit = (url) => {
    this.props.onResubmitInput(url);
    this.onRouteChange('home');
    this.props.onImageChange('');
    this.props.onImageError('');
    window.setTimeout(() => {
      this.onImageUrlSubmit();
    }, 500);
  }

  // Fetch the colors from the colors API and set state
  getColors = () => {
    fetch(`${DATABASE}/image-colors`, {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        input: this.props.inputValue
      })
    })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.outputs) {
        const errMsg = response ? response : 'No response from faces API';
        this.setState({getColorsError: errMsg})
        throw new Error(errMsg);
      } else {
        this.setState({getColorsError: ''})
      }
      fetch(`${DATABASE}/image`, {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          id: this.props.user.id,
          url: this.props.imageUrl
        })
      })
      .then(response => response.json())
      .then(count => {
        this.props.onEntriesUpdate(count);
      })
      .catch(err => console.log('getFaces colors: ', err))
      
      const colorsUsed = [];
      const colorsFound = response.outputs[0].data.colors;
      colorsFound.map(singleColor => {
        const color = {
          hex: singleColor.w3c.hex,
          name: singleColor.w3c.name
        }
        colorsUsed.push(color);
        return this.setState({colors: colorsUsed});
      })
    })
    .catch(err => console.log(err));
  }

  // Fetch the faces from the faces API and set state
  getFaces = () => {
    fetch(`${DATABASE}/image-faces`, {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        input: this.props.inputValue
      })
    })
    .then(response => response.json())
    .then(response => {
      if (!response || !response.outputs) {
        const errMsg = response ? response : 'No response from colors API';
        this.setState({getFacesError: errMsg})
        throw new Error(errMsg);
      } else {
        this.setState({getFacesError: ''})
      }
      this.calculateFaceLocations(response)
    })
    .catch(err => console.log('getFaces error: ', err));
  }

  // Calculate location of all bounding boxes based on the getFaces response
  calculateFaceLocations = (data) => {
    const imageElement = document.getElementById('imageElement');
    if (!imageElement) {
      return;
    }
    const imageWidth = Number(imageElement.width);
    const imageHeight = Number(imageElement.height);
    const clarifaiFaces = data.outputs[0].data.regions;
    const boundingBoxes = [];
    clarifaiFaces.map(face => this.calculateBoundingBox(face, imageWidth, imageHeight, boundingBoxes));
    boundingBoxes.map(boundingBox => this.displayBoundingBox(boundingBox, imageElement));    
  }

  // Calculate location of a single bounding box based on the getFaces response
  calculateBoundingBox = (face, imageWidth, imageHeight, boundingBoxes) => {
    const faceBoundingBoxData = face.region_info.bounding_box;
    const boundingBox = {
      leftCol: faceBoundingBoxData.left_col * imageWidth,
      topRow: faceBoundingBoxData.top_row * imageHeight,
      RightCol: imageWidth - (faceBoundingBoxData.right_col * imageWidth),
      bottomRow: imageHeight - (faceBoundingBoxData.bottom_row * imageHeight)
    }
    boundingBoxes.push(boundingBox);
  }

  // Display the bounding box in parent element
  displayBoundingBox = (box, holder) => {
    const boundingBox = document.createElement('DIV');
    boundingBox.classList.add('bounding-box');
    boundingBox.style.left = `${box.leftCol.toFixed(4)}px`;
    boundingBox.style.top = `${box.topRow.toFixed(4)}px`;
    boundingBox.style.right = `${box.RightCol.toFixed(4)}px`;
    boundingBox.style.bottom = `${box.bottomRow.toFixed(4)}px`;
    return holder.parentElement.appendChild(boundingBox);
  }

  // Change the route state
  onRouteChange = (route) => {
    ((route === 'home') || (route === 'profile')) ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false});
    if (route === 'signin') {
      this.setState(initalState);
      setInputValue('');
    }
    if (route === 'home') {
      this.props.onImageChange('');
      this.props.onImageError('');
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, boxes, colors, route } = this.state;
    const imageUrlError = this.props.imageUrlError ? <p className='error-message'>{this.props.imageUrlError}</p> : '';
    const getColorsError = this.state.getColorsError ? <p className='error-message'>{this.state.getColorsError}</p> : '';
    const getFacesError = this.state.getFacesError ? <p className='error-message'>{this.state.getFacesError}</p> : '';
    const { inputValue, onInputChange, user } = this.props;
    let content = '';
    switch(route) {
      case 'home':
        content = 
        <Suspense fallback={<div>Loading...</div>}>
          <FaceApp
            userName={user.name}
            entries={user.entries}
            inputValue={inputValue}
            imageUrlError={imageUrlError}
            getColorsError={getColorsError}
            getFacesError={getFacesError}
            onInputChange={onInputChange}
            onImageUrlSubmit={this.onImageUrlSubmit}
            imageUrl={this.props.imageUrl} 
            boxes={boxes}
            colors={colors}
          />
        </Suspense>
        break;
      case 'register':
        content = 
        <Suspense fallback={<div>Loading...</div>}>
          <Register 
            loadUser={this.props.onUserLoad}
            onRouteChange={this.onRouteChange}
          />
        </Suspense>
        break;
      case 'profile':
        content = 
        <Suspense fallback={<div>Loading...</div>}>
          <Profile 
            database={DATABASE}
            userId={user.id}
            userName={user.name}
            userEmail={user.email}
            entries={user.entries}
            onRouteChange={this.onRouteChange}
            onResubmit={this.onImageResubmit}
          />
        </Suspense>
        break;
      default:
        content =
        <SignIn 
          loadUser={this.props.onUserLoad}
          onRouteChange={this.onRouteChange} 
        />
    }

    return (
      <div className='App'>
        <Particles
          className='particles' 
          params={particlesOptions}
        />
        <Header 
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange} 
          route={this.state.route}
          />
        { content }
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
