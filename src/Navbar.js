import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleNavbar}>
        Menu
      </button>
      <nav className="navbar-menu">
        <ul>
          <li><a href="#">Search</a></li>
          <li><a href="#">Challenges</a></li>
          <li><a href="#">Forums</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">~~~~~~</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
