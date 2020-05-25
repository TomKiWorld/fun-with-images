import React from 'react';
import './ImageCard.css';

/**
 * Image card to display submitted images with option to resubmit
 * 
 * Required props:
 * - id => Image id for css selector
 * - url => Image url to display as background
 * - onResubmit => Function to resubmit the image 
 */
const ImageCard = ({id, url, onResubmit}) => {
  return (
    <div id={`ImageCard-${id}`} className='ImageCard' style={{backgroundImage:`url("${url}")`}}>
      <button className='card-button' onClick={() => onResubmit(url)}>Resubmit</button>
    </div>
  );
}

export default ImageCard;
