import React from 'react';
import './ImageLinkForm.css';

/**
 * Image link form 
 * - Input field to submit a url
 * - submit button
 * 
 * Required props:
 * - onInputChange => Register input changes to state
 * - onButtonSubmit => Submit the image url
 * - imageUrlError => Display error to screen
 * - inputValue => Input value from state important in case of resubmission 
 */
// Allow pressing the enter key and not only the button
const handleKeyUp = (e) => {
  if (e.keyCode === 13) {
    const detect = document.querySelector('.detect');
    detect.click();
  }
}

const ImageLinkForm = ({ onInputChange, onButtonSubmit, imageUrlError, getColorsError, getFacesError, inputValue }) => {
  return (
    <div>
      <p className='f3'>This App detects faces in images</p>
      <p>Click on the <strong>paint icon</strong> to see which colors were detected</p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            value={inputValue}
            type='url' 
            onChange={onInputChange}
            onKeyUp={(e) => handleKeyUp(e)}
          />
          <button 
            className='detect w-30 grow link ph3 pv2 dib white bg-light-blue' 
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
        {imageUrlError}
        {getColorsError}
        {getFacesError}
    </div>
  );
}

export default ImageLinkForm;
