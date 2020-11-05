import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="about-home">
        <a className="links" href="/">Home</a>
        <a className="links" href="/about">About</a>
        <a className="links" href="/started">Getting Started</a>
        </div>
      </nav>
    </div>
  )
}
