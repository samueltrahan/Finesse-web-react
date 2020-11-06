import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog({ image, head, title, paragraph }) {
  return (
    <>
      <Link to="/blog">
        <div className="cards">
          <div className="image">
            <img alt="" src={image} style={{ width: '250px', height: '180px', borderRadius: '10px 10px 0 0'}}></img>
          </div>
          <div className="elements">
            <h5 className="head">{head}</h5>
            <h3 className="title">{title}</h3>
            <p className="paragraph">{paragraph}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
