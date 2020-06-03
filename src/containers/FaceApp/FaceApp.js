import React, { Component } from 'react';
import Greet from '../../components/Greet/Greet';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import ColorList from '../../components/ColorList/ColorList'

/**
 * Main view of the fun with images app
 * 
 * Required props:
 * - userName => User name from state
 * - entries => Count of user entries from state
 * - inputValue => User input from state
 * - imageUrlError => Error to display during url submittion from state
 * - onInputChange => Function to set state of input value
 * - onImageUrlSubmi => Function on url submit
 * - imageUrl => The image url from state
 * - boxes => Location of faces on the page
 * - colors => List of colors found by the API
 */
class FaceApp extends Component {
  constructor() {
    super();
    this.state = {
      showColorList: false
    };
  }

  // Toggle the color list pop up
  toggleColorList = () => {
    this.setState({showColorList: !this.state.showColorList});
  }
   
  render() {
    const {
      userName, 
      entries, 
      imageUrlError, 
      getColorsError,
      getFacesError,
      onInputChange, 
      onImageUrlSubmit,
      imageUrl,
      boxes,
      colors
    } = this.props;
    const { showColorList } = this.state;
    return (
      <article className='pa4 mb4'>
        <Greet 
          name={userName} 
          entries={entries} />
        <ImageLinkForm
          inputValue={this.props.inputValue}
          imageUrlError={imageUrlError}
          getColorsError={getColorsError}
          getFacesError={getFacesError}
          onInputChange={onInputChange} 
          onButtonSubmit={onImageUrlSubmit} />
        <FaceRecognition 
          imageUrl={imageUrl} 
          boxes={boxes} 
          onShowClick={this.toggleColorList} />
        <ColorList 
          colors={colors}
          showColor={showColorList}
          onShowClick={this.toggleColorList} />
      </article>
    );
  }
}

export default FaceApp;
