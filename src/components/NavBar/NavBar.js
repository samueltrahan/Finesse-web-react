import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-navbar">
        <a className="links" href="/">Home</a>
        <a className="links" href="/about">About</a>
        <a className="links" href="/started">Getting Started</a>
        </div>
        <div className="right-navbar">
          <a target="_blank" rel="noreferrer" className="socials" href="https://github.com/samueltrahan/Finesse-web-react"><i className="fab fa-github fa-2x"></i></a>
          <a target="_blank" rel="noreferrer" className="socials" href="https://twitter.com/SamuelTrahan4"><i className="fab fa-twitter fa-2x"></i></a>
          <a target="_blank" rel="noreferrer" className="subscribe" href="/subscribe">Subscribe</a>
        </div>
      </nav>
    </div>
  )
}
