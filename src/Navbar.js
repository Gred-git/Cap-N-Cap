import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './Navbar.css';

import Search from './Search';
import App from './App';

const Navbar = ({ isOpen, toggleNavbar }) => {

  return (

    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleNavbar}>
      </button>
    
      <nav className="navbar-menu">

        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/Challenges">Challenges</Link></li>
          <li><Link to="/Forums">Forums</Link></li>
        </ul>
      </nav>

      <Route exact path="/" component={App} />
      <Route path="/Search" component={Search} />
      <Route path="/About" component={About} />
      <Route path="/Challenges" component={Challenges} />
      <Route path="/Forums" component={Forums} />

    </div>
  );
};

export default Navbar;
