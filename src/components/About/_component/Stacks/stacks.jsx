import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";


function stacks() {
  return (
    <>
        <section className='flex items-center text-3xl text-black dark:text-white space-x-5'>
        <FaHtml5 className=' ' />
        <FaCss3Alt />
        <FaSass/>
        <IoLogoJavascript/>
        <RiTailwindCssFill/>
        <FaReact/>
        <RiNextjsFill/>
        
        </section>
    </>
  )
}

export default stacks