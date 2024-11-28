// src/App.js
import React from 'react';
import Bio from './components/Bio';
import Partenaires from './components/Partenaires';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Bio />
        <Partenaires />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
