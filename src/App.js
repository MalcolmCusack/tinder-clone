import React from 'react';
import './CSS/App.css';
import Header from './Components/Header.js'
import TinderCards from "./Components/TinderCards.js"

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
