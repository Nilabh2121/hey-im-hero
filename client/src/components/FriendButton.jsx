import React from 'react';
import './FriendButton.css'

const FriendButton = ({ isFriend, handleFriendToggle }) => {
  return (
    <button onClick={handleFriendToggle} className="friend-button">
      {isFriend ? 'Remove Friend' : 'Add Friend'}
    </button>
  );
};

export default FriendButton;
