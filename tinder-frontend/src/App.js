import React from 'react';
import './CSS/App.css';
import Header from './Components/Header.js';
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from './Components/SwipeButtons.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
function App() {
  return (
    <div className="app">
      
      <Router>
    
        <Switch>
          <Route path="/chats">
            <Header backButton='/'/>
            <h1>chat page</h1>
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
