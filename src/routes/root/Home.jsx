import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Project from "../../components/Projects/Project";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";

import {  Element } from "react-scroll";

function Home() {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

export default Home;
