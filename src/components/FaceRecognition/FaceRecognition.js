import React from 'react';
import './FaceRecognition.css';
import colorsIcon from './colorsIcon.svg';

/**
 * Displays 
 * - Preview of submitted image url 
 * - Squares where faces were found
 * - Option to see colors found in the image
 * 
 * Required props:
 * - imageUrl => From state
 * - onShowClick => Function to change state of toggle color list
 */
const FaceRecognition = ({ imageUrl, onShowClick }) => {
const imgBlock = imageUrl ? <img id='imageElement' src={imageUrl} alt='result' /> : <p>Submit an image url to start</p>
const colorsView = imageUrl ? 
  <div className='view-colors' onClick={onShowClick}>
    <img src={colorsIcon} alt='View Colors' />
  </div> : '';

  return (
    <div className='center image-holder'>
      {colorsView}
      {imgBlock}
    </div>
  );
}

export default FaceRecognition;
