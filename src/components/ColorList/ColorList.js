import React from 'react';
import './ColorList.css';

/**
 * Pop up to show colors detected in images
 * 
 * Required props:
 * - colors => Array of colors from the api
 * - onShowClick => On click function to change the value of showColor
 */
const ColorList = ({ colors }) => {
  let colorText = <p>No colors detected.</p>
  if(colors.length) {
    const list = colors.map(color => {
      const { hex, name } = color;
      return <li key={hex} ><span style={{backgroundColor:hex}}></span>HEX: {hex}, Name: {name}</li>;
    });
    colorText = <ul>{list}</ul>;
  }  

  return (
    <article className='colors-list'>
      <h2>Detected colors:</h2>
      {colorText}
    </article>
  );
}

export default ColorList;