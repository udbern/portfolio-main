import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaSquareGithub } from 'react-icons/fa6';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';


export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className=' bg-black w-full font-roboto  p-2 px-5  min-[calc(100vh - 34px)]:  '>
        <div className='flex  max-w-6xl mx-auto   items-center justify-between  md:h-20   '>
          <Link to="/">
          <p className='text-white'>&copy; {getCurrentYear()} UduakAbasi Bernard Edwin</p>
          </Link>
        
        
        <div>
            <ul className='flex items-center space-x-4 text-2xl '>
              <Link to="https://www.facebook.com/udbern1">
                <AiFillFacebook className='text-[#039BE5]' />
              </Link>
              <Link to="https://twitter.com/EdwinUduakabasi">
                <AiFillTwitterSquare className=' text-[#03A9F4]' />
              </Link>
              <Link to="https://github.com/udbern">
                < FaSquareGithub className=' text-[#333]' />
              </Link>
              <Link to="https://instagram.com/ub_edwin">
                < FaSquareInstagram className='text-[#D81B60]' />
              </Link >
              <Link to="https://wa.me/2349012675868" >
                < FaWhatsappSquare className='text-[#40C351]' />
              </Link>
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}
