import React from 'react';
import ColorList from '../ColorList/ColorList';
import './FaceRecognition.css';

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
const FaceRecognition = ({ imageUrl, colors }) => {
const imgBlock = imageUrl ? <img id='imageElement' src={imageUrl} alt='result' /> : <p className='white'>Submit an image url to start</p>
const colorsView = imageUrl ? 
  <ColorList 
    colors={colors} /> : 
    '';

  return (
    <section className='face-recognition container'>
      <div className='image-holder'>
        {imgBlock}
      </div>
        {colorsView}
    </section>
  );
}

export default FaceRecognition;
