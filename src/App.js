import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import axios from 'axios'
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

  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      )
      setData(result.data)
    }
    fetchData()
  }, [])


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
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
    </Router>
  );
}



export default App;
