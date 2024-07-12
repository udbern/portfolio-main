import React, { useEffect } from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import  Navbar  from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


export const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        smooth: true,
        duration: 500,
      });
    } else {
      scroll.scrollToTop();
    }
  }, [location]);
  const children = useOutlet();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};