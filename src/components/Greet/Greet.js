import React from 'react';

/**
 * Greet component
 * - Display short greet and amount of entries the user used the app
 * 
 * Required props:
 * - name => User name from state
 * - entries => Amount of times images were submitted from state
 */
const Greet = ({name, entries}) => {
  const greet = entries > 0 ? 'Welcome back' : 'Lets start';
  return (
    <section className='container pa4'>
      <div className='white f3'>
        <h1>{greet} <span className='capitalize'>{name}</span></h1>
        <p>Your current entry count is:</p>
      </div>
      <div className='white f1'>
        <p>#{entries}</p>
      </div>
    </section>
  );
}

export default Greet;
