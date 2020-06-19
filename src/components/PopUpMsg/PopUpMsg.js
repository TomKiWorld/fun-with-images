import React from 'react';

const PopUpMsg = ({ message, closePopUp }) => {
  setTimeout(() => {
    const closeBtn = document.querySelector('.close-pop-up')
    if (closeBtn) {
      closeBtn.click();
    }
  }, 8000);

  return (
    <div className='pop-up-message'>
      <span 
        className='close-pop-up' 
        onClick={closePopUp}>&times;</span>
      <p>{message}</p>
    </div>
  );
}

export default PopUpMsg;
