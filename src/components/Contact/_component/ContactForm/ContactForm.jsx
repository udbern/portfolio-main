import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaUserTie } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nahld6i', 'template_oqaqt4i', form.current, {
        publicKey: 'WhIo801ZWQjwkRpNK',
      })
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        (error) => {
          toast.failure('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="p-6 rounded-xl lg:col-span-2">
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="relative flex items-center px-2 bg-white">
            <input
              required
              type="text"
              name="user_name"
              placeholder="Name"
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
            <FaUserTie className='h-6 w-6 ' />

          </div>
          
          <div className="relative flex items-center px-2 bg-white">
            <input
              required
              type="number"
              name="user_phone"
              placeholder="Phone No."
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
           <BsTelephoneFill className='h-6 w-6 ' />

          </div>
          <div className="relative flex items-center sm:col-span-2 px-2 bg-white">
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
            <MdEmail className='h-6 w-6 ' />

          </div>
          <div className="relative flex items-center sm:col-span-2 px-2 bg-white">
            <textarea
              required
              name="message"
              placeholder="Write Message"
              className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            ></textarea>
            <RiMessage2Fill className='h-6 w-6 ' />
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center w-fit text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold">
          <button className='text-white shadow-[#FF4900] py-2 px-2  dark:shadow-gray-500  bg-black  shadow-sm dark:bg-[#ff4800ab] capitalize rounded-sm' type="submit">send message</button>
        </div>
      </form>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
}

export default ContactForm;
