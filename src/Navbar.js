// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = ({ isOpen, toggleNavbar }) => {
  return (

    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleNavbar}>
      </button>
    
      <nav className="navbar-menu">

        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Challenges</a></li>
          <li><a href="#">Forums</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
