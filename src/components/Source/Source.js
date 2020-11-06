import React from "react";
import "./Source.css";
import Pic01 from "../../assets/source.png";
import Pic02 from "../../assets/finesse-single-logo.png";

export default function Source() {
  return (
    <section className="source">
      <div className="source-section-1">
        <a href="/">
          <img className="source-img" alt="" src={Pic01}></img>
        </a>
      </div>
      <div className="source-section-2">
        <a className="source-link" href="/source">
          Source
          <br /> <h1>GitHub Source</h1>
          <p>Where you can find this project on GitHub</p>
        </a>
        <br />
        <img className="source-mini-logo" alt="" src={Pic02}></img>
      </div>
    </section>
  );
}
