import React from 'react';
import './ColorList.css';

/**
 * Pop up to show colors detected in images
 * 
 * Required props:
 * - colors => Array of colors from the api
 * - showColor => Show or hide the element
 * - onShowClick => On click function to change the value of showColor
 */
const ColorList = ({ colors, showColor, onShowClick }) => {
  const display = showColor ? 'block' : 'none';
  let colorText = <p>No colors detected.</p>
  if(colors.length) {
    const list = colors.map(color => {
      const { hex, name } = color;
      return <li key={hex} ><span style={{backgroundColor:hex}}></span>HEX: {hex}, Name: {name}</li>;
    });
    colorText = <ul>{list}</ul>;
  }  

  return (
    <div className='colors-list br3' style={{display: display}}>
      <span 
        className='close-colors' 
        onClick={onShowClick}>&times;</span>
      <h2>These colors were detected:</h2>
      {colorText}
    </div>
  );
}

export default ColorList;