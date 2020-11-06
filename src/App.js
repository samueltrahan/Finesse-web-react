import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Source from "./components/Source/Source";
import Blog from "./components/Blog/Blog";
import Footer from './components/Footer/Footer';
import Pic04 from "./assets/temper.jpg";
import Pic05 from './assets/medium.png';
import Pic06 from './assets/website.jpg';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <div className="source-section">
      <Source />
      </div>
      <div className="blog-section">
        <Blog path="/welcome" image={Pic04} head='Finesse' title='Welcome to Finesse' paragraph="This article will help you get started with transforming this template into your own beautiful website."/>
        <Blog path="/process" image={Pic05} head='Medium' title="The Process" paragraph="This article is a Medium article on the process of build this template. There is some helpful hints on styling and customization in the article." />
        <Blog path="/inspiration" image={Pic06} head="Inspiration" title="The Purpose of a Website" paragraph="This article will show you why you need a website and even if you don't have a business, having a website is critical for anything you want to do."/>
      </div>
      <Footer />
    </Router>
  );
}
