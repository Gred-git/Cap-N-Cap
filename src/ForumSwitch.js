import React, { useState } from 'react';
import './ForumSwitch.css';

const ForumSwitch = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="forum-switch">
      <button
        className={`switch-button ${isActive ? 'active' : ''}`}onClick={toggleSwitch}
      >
        Forums
      </button>

      <div className="switch-spacing"></div> 

      <button
        className={`switch-button ${isActive ? '' : 'active'}`}onClick={toggleSwitch}
      >
        Q/A
      </button>
    </div>
  );
};

export default ForumSwitch;