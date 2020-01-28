import React from 'react';
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path =  '/about' component="{#}" />
          <Route exact path =  '/home' component="#" />
          <Route exact path =  '/about' component="#" />
        </Switch>

        <Navbar />
        <Search />
      </div>
    </Router>
  );
}

export default App;
