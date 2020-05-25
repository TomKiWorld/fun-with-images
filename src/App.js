import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceApp from './components/FaceApp/FaceApp';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

// Set to false during local development 
// Make sure to change your production url
const productionEnv = true;
const DATABASE = productionEnv ? 'https://fierce-oasis-21316.herokuapp.com' : 'http://localhost:3000';

// Options for the particals component
const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

// Initiale state for reset during logout
const initalState = {
  input: '',
  imageUrl: '',
  imageUrlError: '',
  colors: [],
  showColorList: false,
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
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

  // Set the input value on change
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  // Validate the url on submit and make sure a new url is entered
  onImageUrlSubmit = () => {
    if (this.state.input) {
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (this.state.input !== this.state.imageUrl) {
        if (regexp.test(this.state.input)) {
          this.setState({
            imageUrl: this.state.input,
            imageUrlError: ''
          });
          document.querySelectorAll('.bounding-box').forEach(el => el.remove());
          this.getColors();
          this.getFaces();
        } else {
          this.setState({imageUrlError: 'Please enter a valid url'});
        }        
      } else {
        this.setState({imageUrlError: 'Please enter a new url'});
      } 
    } else {
      this.setState({imageUrlError: 'Please enter an image url'});
    }    
  }

  // Resubmit an image from the profile page
  onImageResubmit = (url) => {
    this.onRouteChange('home');
    this.setState({
      input: url,
      imageUrl: '',
      imageUrlError: ''
    });
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
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (!response) {
        throw new Error('We are sorry, but something went wrong');
      }
      fetch(`${DATABASE}/image`, {
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id,
          url: this.state.imageUrl
        })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { entries: count }));
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
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (!response) {
        throw new Error('We are sorry, but something went wrong');
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

  // Toggle the color list pop up
  toggleColorList = () => {
    this.setState({showColorList: !this.state.showColorList});
  }

  // Change the route state
  onRouteChange = (route) => {
    ((route === 'home') || (route === 'profile')) ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false});
    if (route === 'signin') {
      this.setState(initalState)
    }
    if (route === 'home') {
      this.setState({
        input: '',
        imageUrl: '',
        imageUrlError: ''
      })
    }
    this.setState({route: route})
  }

  render() {
    const { isSignedIn, imageUrl, boxes, colors, showColorList, route } = this.state;
    const imageUrlError = this.state.imageUrlError ? <p className='error-message'>{this.state.imageUrlError}</p> : '';
    let content = '';
    switch(route) {
      case 'home':
        content = 
        <FaceApp 
          userName={this.state.user.name}
          entries={this.state.user.entries}
          inputValue={this.state.input}
          imageUrlError={imageUrlError}
          onInputChange={this.onInputChange} 
          onImageUrlSubmit={this.onImageUrlSubmit}
          imageUrl={imageUrl} 
          boxes={boxes} 
          toggleColorList={this.toggleColorList}
          colors={colors}
          showColorList={showColorList}
        />
      break;
      case 'register':
        content = 
        <Register 
          database={DATABASE}
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange}
        />
      break;
      case 'profile':
        content = 
        <Profile 
          database={DATABASE}
          userId={this.state.user.id}
          userName={this.state.user.name}
          userEmail={this.state.user.email}
          entries={this.state.user.entries}
          onRouteChange={this.onRouteChange}
          onResubmit={this.onImageResubmit}
        />
      break;
      default:
        content =
        <SignIn 
          database={DATABASE}
          loadUser={this.loadUser}
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

export default App;
