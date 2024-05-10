import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import Home from "../Pages/Home/Home"

export default function Root() {
    return (
      <>
      <Navbar />
       <Home/>
       <Footer/>
      </>
    );
  }