import React from "react";
import ContactForm from "./_component/ContactForm/ContactForm";
import { TiMessageTyping } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto bg-white dark:bg-black my-6 font-[sans-serif] text-[#011c2b]">
          <div className="text-center dark:text-gray-100 text-gray-900   px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-extrabold capitalize"
            >
              get in touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-400 mt-3"
            >
              Have some big idea or brand to develop and need help?
            </motion.p>
          </div>
          <div className="grid lg:grid-cols-3 items-center gap-4 p-1  md:p-10 rounded-md mt-8">
            <div className="dark:bg-[#f3f3f3] border   border-red-500 bg-black  rounded-lg p-6 max-lg:text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-bold  dark:text-gray-900 text-white"
              >
                Contact Information
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-gray-400 dark:text-gray-900 mt-3"
              >
                Have some big idea or brand to develop and need help?
              </motion.p>
              <ul className="mt-16 space-y-10">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center max-lg:justify-center"
                >
                  <TiMessageTyping className="text-[#fff] text-xl dark:text-gray-900  " />
                  <a
                    
                    className="text-white dark:text-gray-900 text-sm ml-3"
                  >
                    <strong>edwinuduakabasi@gmail.com</strong>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center  max-lg:justify-center"
                >
                  <IoCallOutline className="text-[#fff] text-xl dark:text-gray-900 " />
                  <a
                    
                    className="text-white dark:text-gray-900 text-sm ml-3"
                  >
                    <strong>+235 9012575868</strong>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-center max-lg:justify-center"
                >
                  <IoLocationOutline className="text-[#fff] text-xl dark:text-gray-900  " />

                  <a
                    
                    className="text-white dark:text-gray-900 text-sm ml-3"
                  >
                    <strong>
                     
                      Ikot Use Ekong Eket Akwa Ibom State NIgeria
                    </strong>
                  </a>
                </motion.li>
              </ul>
              <ul className="flex max-lg:justify-center mt-16 space-x-4">
                <li className="bg-gray-200 dark:bg-gray-400 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a >
                    <MdOutlineFacebook className="h-7 w-7 " />
                  </a>
                </li>
                <li className="bg-gray-200 dark:bg-gray-400 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a >
                    <AiOutlineGithub className="h-7 w-7" />
                  </a>
                </li>
                <li className="bg-gray-200 dark:bg-gray-400 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a >
                    <RiTwitterXLine className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
