import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Source from './components/Source/Source';
import Blog from './components/Blog/Blog';
import Pic04 from './assets/temper.jpg';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <Source />
      <div className="blog-section">
      <Blog image={Pic04}/>
      </div>
    </Router>
  )
}
