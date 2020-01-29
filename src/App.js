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
import About from './Components/About';
import Home from './Components/Home';
import Data from './Components/Data';
import PullData from './Containers/MainData'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path =  '/' component={Home}/>
          <Route exact path =  '/about' component={About} />
          <Route exact path =  '/data' component={Data} />
          <Route exact path =  '/main' component={PullData} />
        </Switch>

        <Search />
      </div>
    </Router>
  );
}

export default App;
