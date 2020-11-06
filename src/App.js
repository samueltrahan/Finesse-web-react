import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Source from './components/Source/Source';
import Blog from './components/Blog/Blog';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Source />
      <Blog />
    </div>
  )
}
