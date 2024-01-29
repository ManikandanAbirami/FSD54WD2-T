import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Room from './Room';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/room/100">Room 100</Link>
            </li>
            <li>
              <Link to="/room/200">Room 200</Link>
            </li>
            <li>
              <Link to="/room/300">Room 300</Link>
            </li>
            <li>
              <Link to="/room/400">Room 400</Link>
            </li>
            <li>
              <Link to="/room/Manikandan Anbalagan">Room MK</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' Component={Home}>
          </Route>
          <Route path='/about' Component={About}>
          </Route>
          <Route path='/contact' Component={Contact}>
          </Route>
          <Route path="/room/:mani" Component={Room}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
