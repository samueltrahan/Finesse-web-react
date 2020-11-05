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
          <a className="socials" href="https://github.com/samueltrahan/Finesse-web-react"><i className="fab fa-github fa-2x"></i></a>
          <a className="socials" href="https://twitter.com/SamuelTrahan4"><i className="fab fa-twitter fa-2x"></i></a>
          <a className="subscribe" href="/subscribe">Subcribe</a>
        </div>
      </nav>
    </div>
  )
}
