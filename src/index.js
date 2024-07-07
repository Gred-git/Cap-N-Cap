import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';

import Search from './Search';
import Challenges from './Challenges';
import Forums from './Forums';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import App from './App';



const container = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <App /> }>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
, container);

reportWebVitals();