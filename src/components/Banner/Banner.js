import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <div>
      <section className="banner">
        <img className="finesse-logo" alt="" src="/images/FINESSE.png"></img>
      </section>
      <section className="banner-quote">
        <h2 className="professional">Professional Blog Platform</h2>
      </section>
    </div>
  )
}
