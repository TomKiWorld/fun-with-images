import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DATABASE } from '../../constants';
import { setInputValue, setImageUrl, setImageUrlErr, resubmitImageUrl, setEntries } from '../../actions';

import Greet from '../../components/Greet/Greet';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import ColorList from '../../components/ColorList/ColorList';

const mapStateToProps = (state) => {
  return {
    inputValue: state.imageUrlInputValue.inputValue,
    imageUrl: state.imageUrlInputValue.imageUrl,
    imageUrlError: state.imageUrlInputValue.imageUrlError,
    resubmit: state.imageUrlInputValue.resubmit,
    user: state.userInformation.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (text) => dispatch(setInputValue(text)),
    onImageChange: (text) => dispatch(setImageUrl(text)),
    onImageError: (text) => dispatch(setImageUrlErr(text)),
    onResubmitImageUrl: (bool) => dispatch(resubmitImageUrl(bool)),
    onEntriesUpdate: (user, count) => dispatch(setEntries(user, count))
  }
}

/**
 * Main view of the fun with images app
 * 
 * Required props:
 * - user => User from Redux state
 */
class FaceApp extends Component {
  constructor() {
    super();
    this.state = {
      showColorList: false,
      getColorsError: '',
      getFacesError: '',
      colors: [],
    };
  }

  componentDidMount() {
    if(this.props.resubmit) {
      this.onImageUrlSubmit();
      this.props.onResubmitImageUrl(false);
    } else {
      console.log()
      this.props.onInputChange('');
    }
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
        this.props.onEntriesUpdate(this.props.user, count);
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

  // Toggle the color list pop up
  toggleColorList = () => {
    this.setState({showColorList: !this.state.showColorList});
  }
   
  render() {
    const {
      user,
      imageUrlError,
      onInputChange,
      imageUrl
    } = this.props;
    const { 
      showColorList, 
      colors 
    } = this.state;
    const imageUrlErrorMsg = imageUrlError ? <p className='error-message'>{imageUrlError}</p> : '';
    const getColorsError = this.state.getColorsError ? <p className='error-message'>{this.state.getColorsError}</p> : '';
    const getFacesError = this.state.getFacesError ? <p className='error-message'>{this.state.getFacesError}</p> : '';
    return (
      <article className='pa4 mb4'>
        <Greet 
          name={user.name} 
          entries={user.entries} />
        <ImageLinkForm
          inputValue={this.props.inputValue}
          imageUrlError={imageUrlErrorMsg}
          getColorsError={getColorsError}
          getFacesError={getFacesError}
          onInputChange={onInputChange} 
          onButtonSubmit={this.onImageUrlSubmit} />
        <FaceRecognition 
          imageUrl={imageUrl}
          onShowClick={this.toggleColorList} />
        <ColorList 
          colors={colors}
          showColor={showColorList}
          onShowClick={this.toggleColorList} />
      </article>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FaceApp);
