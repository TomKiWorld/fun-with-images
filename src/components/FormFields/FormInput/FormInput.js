import React from 'react';

/**
 * Form input field
 * - Display short greet and amount of entries the user used the app
 * 
 * Required props:
 * - label => Displayed name
 * - name => For the is and label for
 * - type => Field type
 * - onChange => Function on input change
 * - onKeyUp => Function on key up - enter detection
 * Optional props:
 * - extraClass => For classlist 
 */
const FormInput = ({ label, name, type, placeholder, onChange, onKeyUp, extraClass, ...otherProps }) => {
  const receivedClass= extraClass ?? '';
  let autocomplete = ''
  switch(name) {
    case 'password':
      autocomplete = 'current-password';
      break;
    case 'email-address':
      autocomplete = 'email';
      break;
    case 'name':
      autocomplete = 'name';
      break;
    default:
      autocomplete = '';
  }

  const displayPlaceholder = placeholder ? placeholder : '';

  return (
    <div className='mt3'>
      <label className='db fw6 lh-copy f6' htmlFor={type}>{label}
        <input 
          onChange={onChange}
          onKeyUp={onKeyUp}
          className={`${receivedClass} pa2 input-reset ba b--black hover-bg-black hover-white w-100`} 
          type={type} 
          name={name}
          placeholder={displayPlaceholder}
          id={name} 
          autoComplete={autocomplete}
        />
      </label>
    </div>
  );
}

export default FormInput;
