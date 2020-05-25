import React from 'react';

/**
 * Form submit
 * - Display short greet and amount of entries the user used the app
 * 
 * Required props:
 * - value => Displayed name
 * - type => Field type
 * - onClick => Function on button click
 * Optional props:
 * - extraClass => For classlist
 */
const FormSubmit = ({value, type, onClick, extraClass}) => {
  const receivedClass= extraClass ?? '';
  return (
    <div className='mt3'>
      <input 
        onClick={onClick}
        className={`${receivedClass} b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib`} 
        type={type}
        value={value}
      />
    </div>
  );
}

export default FormSubmit;
