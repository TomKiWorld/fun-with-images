import React from 'react';

const ProfileGreet = ({ entries }) => {
  if (entries > 0) {
    return (
        <div>
          <p>Thank you for using the app {entries} times so far!!</p> 
          <h3>The following images were submitted by you:</h3>
          <p>Note: Some images might have been submitted several times</p>
        </div>) 
  } else {
    return <h3>You haven't submitted any images yet..</h3>;
  }
}

export default ProfileGreet;
