import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from "../../components/About/About"
import Project from "../../components/Projects/Project"
import Banner from "../../components/Banner/Banner"
import Blog from '../../components/Blog/Blog'
import Contact from '../../components/Contact/Contact'


function Home() {
  return (
    <>
        <Hero/>
        <About/>
        <Project/>
        <Banner/>
        <Blog/>
        <Contact/>
    </>
  )
}

export default Home