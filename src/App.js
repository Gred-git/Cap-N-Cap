import React, { useState } from 'react';

import './App.css';
import sprayCanIcon from './images/spray-can-icon.png';
import Navbar from './Navbar';
import GalleryContainer from './GalleryContainer'; 
import CrazyButton from './CrazyButton';
import SearchFilters from './SearchFIlters/SearchFilters.js';
import ForumSwitch from './ForumSwitch';
import ForumButtons from './ForumButtons';
import AccordionRow from './AccordionRow';


function App() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const [activeState, setActiveState] = useState('Forums');

  const handleStateChange = (state) => {
    setActiveState(state);
  };

  const galleryItems = [
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    }
  ];


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
        <CrazyButton buttonText="Upload" />

        <SearchFilters />

        <ForumButtons />        

      </header>

      <header className="forum-header">

        <ForumSwitch activeState={activeState} onStateChange={handleStateChange} />

        <div className="accordion-container">

          <AccordionRow
            title="Forum 1"
            upvotes={10}
            isActive={activeState === 'Forums'}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
            </p>
            <input type="text" placeholder="Enter your comment" />
            <button type="submit">Submit</button>
          </AccordionRow>

          <AccordionRow
            title="Forum 2"
            upvotes={15}
            isActive={activeState === 'QAs'}
          >
            <p>
              Fusce pellentesque vel mauris ut varius. Proin nec erat quis
              ipsum consequat ullamcorper.
            </p>
            <input type="text" placeholder="Enter your comment" />
            <button type="submit">Submit</button>
          </AccordionRow>

          <AccordionRow
            title="Forum 3"
            upvotes={8}
            isActive={activeState === 'Forums'}
          >
            <p>
              Nullam nec sapien eget velit viverra gravida ut a eros.
              Mauris tristique sapien id risus sagittis lacinia.
            </p>
            <input type="text" placeholder="Enter your comment" />
            <button type="submit">Submit</button>
          </AccordionRow>
      </div>
      </header>


      <header className="featured-header">

        <p>
          ↓↓↓ Catch up on last weeks challenge submissions   ↓↓↓
        </p>
        <p>
          Current theme: The React Logo !
        </p>
        <GalleryContainer galleryItems={galleryItems} />
      </header>

    </div>

  );
}

export default App;
