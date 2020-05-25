import React from 'react';
import Greet from '../Greet/Greet';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import ColorList from '../ColorList/ColorList'

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
 * - toggleColorList => Function to toggle list of found colors
 * - colors => List of colors found by the API
 * - showColorList => Boolean to show or hide the colors pop up from state
 */
const FaceApp = ({
  userName, 
  entries, 
  inputValue,
  imageUrlError, 
  onInputChange, 
  onImageUrlSubmit,
  imageUrl,
  boxes,
  toggleColorList,
  colors,
  showColorList
}) => {
  return (
    <article className='pa4 mb4'>
      <Greet 
        name={userName} 
        entries={entries} />
      <ImageLinkForm
        inputValue={inputValue}
        imageUrlError={imageUrlError}
        onInputChange={onInputChange} 
        onButtonSubmit={onImageUrlSubmit} />
      <FaceRecognition 
        imageUrl={imageUrl} 
        boxes={boxes} 
        onShowClick={toggleColorList} />
      <ColorList 
        colors={colors}
        showColor={showColorList}
        onShowClick={toggleColorList} />
    </article>
  );
}

export default FaceApp;
