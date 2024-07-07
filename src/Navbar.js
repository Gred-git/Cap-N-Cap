import React from 'react';
import './Navbar.css';


const Navbar = ({ isOpen, toggleNavbar }) => {

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleNavbar}>
      </button>
    
      <nav className="navbar-menu">


        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#challenges">Challenges</a></li>
          <li><a href="#forums">Forums</a></li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
