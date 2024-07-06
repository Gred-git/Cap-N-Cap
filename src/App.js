import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Welcome to Cap N' Can
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
