import React from "react";
import Navbar from "../Navbar/Navbar";
import background from "../../assets/images/hero.png";
import CustomButton from "../Ui/CustomButton/CustomButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className=" dark:bg-[#000000]  mx-2   font-roboto ">
        <div class="font-sans lg:min-h-screen text-[#333]  bg max-w-6xl md:px-5 max-md:max-w-md mx-auto">
          <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6">
            <div class="max-md:order-1 max-md:text-center capitalize text-gray-800 dark:text-[#DBDADC]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                class="text-sm font-bold py-3 capitalize rounded-sm px-6 w-fit  dark:bg-[#e7e7e7] bg-gray-800 text-white  shadow-gray-800   dark:shadow-[#e7e7e7]  shadow-md dark:text-black mb-6"
              >
                <span class="rotate-90 inline-block mr-2">|</span> hello i'm
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                
                class="md:text-5xl text-3xl font-extrabold capitalize mb-4 md:!leading-[55px]"
              >
                mr uduakabasi bernard edwin
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                
                class="mt-4 text-base font-bold text-gray-600 dark:text-gray-500 leading-relaxed"
              >
                A Professional Web Developer and UI/UX Designer.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                
                class=" mt-5 lg:mt-10 space-x-4  "
              >
                <CustomButton>download CV</CustomButton>
              </motion.div>
            </div>

            <div class="lg:h-[650px] md:h-[550px]  overflow-hidden flex items-center relative max-md:before:hidden before:absolute dark:before:bg-[#ff4800ab] before:bg-black before:h-full before:w-[83.1%] before:rounded-sm  before:right-3 before:z-0">
              <motion.img
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={background}
                class="rounded-md lg:w-3/4 md:w-11/12 z-30 relative  object-cover"
                alt="uduakabasi.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
