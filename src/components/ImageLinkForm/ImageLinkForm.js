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

const ImageLinkForm = ({ onInputChange, onButtonSubmit, imageUrlError, getColorsError, getFacesError, inputValue }) => {
  return (
    <main>
      <p className='f3 pa4'>This App detects faces and colors in images</p>
      <div className='center'>
        <form className='center form hyve pa4 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            value={inputValue}
            type='url' 
            onChange={(e) => onInputChange(e.target.value)}
          />
          <input 
            value='Detect'
            type='submit'
            className='detect w-30 grow link ph3 pv2 dib white bg-light-blue' 
            onClick={onButtonSubmit}
          />
        </form>
      </div>
      {imageUrlError}
      {getColorsError}
      {getFacesError}
    </main>
  );
}

export default ImageLinkForm;
