import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Search from './Search';
import Challenges from './Challenges';
import Forums from './Forums';
import About from './About';
import Home from './Home';

import sprayCanIcon from './images/spray-can-icon.png';
import Navbar from './Navbar';

function App() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (

    <div className="App">

      <button className="open-navbar-button" onClick={toggleNavbar}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </button>
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    

      <header className="App-header">
        <img src={sprayCanIcon} className="App-logo" alt="logo" />
        <p>
          Welcome to Cap N' Can
        </p>
        <a
          className="App-link"
          href="Search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gallery
        </a>
      </header>

    </div>
  );
}

export default App;
