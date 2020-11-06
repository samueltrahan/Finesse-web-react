import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="copy-right-section">
        <p className="copy-right">
          Finesse &copy; 2020 | Finesse is a Cinque Web Development product
        </p>
      </section>
      <section className="footer-socials">
        <div className="footer-socials-links">
        <a className="footer-links" href="/latest">
          Latest Posts
        </a>
        <a
          className="footer-links"
          rel="noreferrer"
          target="_blank"
          href="https://www.cinquewd.com/"
        >
          CWD
        </a>
        <a
          className="footer-links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/samueltrahan/Finesse-web-react"
        >
          GitHub
        </a>
        <a
          className="footer-links"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/SamuelTrahan4"
        >
          Twitter
        </a>
        </div>
      </section>
    </>
  );
}
