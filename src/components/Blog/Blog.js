import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog({image}) {
  return (
    <>
    <hr className="solid"></hr>
    <Link to="/blog">
      <div className="cards">
        <div className="image">
          <img alt="" src={image}></img>
        </div>
        <div>
          <h5>tests</h5>
          <h3>The Title</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa obcaecati consequatur error blanditiis quod maiores odio vel aspernatur neque voluptas, eius deserunt beatae veniam est, nihil aut! Error, quae quibusdam.</p>
        </div>
      </div>
    </Link>
    </>
  )
}
