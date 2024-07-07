import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';

import './Navbar.css';

import Search from './Search';
import Challenges from './Challenges';
import Forums from './Forums';
import App from './App';
import About from './About';
import Home from './Home';

const Navbar = ({ isOpen, toggleNavbar }) => {

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleNavbar}>
      </button>
    
      <nav className="navbar-menu">

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/forums">Forums</Link></li>
        </ul>
      </nav>
      <Outlet />

    </div>
  );
};

export default Navbar;
