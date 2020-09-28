import React from 'react';
import './CSS/App.css';
import Header from './Components/Header.js';
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from './Components/SwipeButtons.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Components/Chats.js';
function App() {
  return (
    <div className="app">
      
      <Router>
    
        <Switch>
          <Route path="/chats">
            <Header backButton='/'/>
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
