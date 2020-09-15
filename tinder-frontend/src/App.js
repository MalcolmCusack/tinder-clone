import React from 'react';
import './CSS/App.css';
import Header from './Components/Header.js';
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from './Components/SwipeButtons.js';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
