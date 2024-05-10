import React from "react";
import CustomButton from "../Ui/CustomButton/CustomButton";
import Coding from "../../assets/images/coding.jpg";
import { motion } from "framer-motion";

function Banner() {
  return (
    <>
      <section>
        <div class="relative font-roboto before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={Coding}
            alt="Banner Image"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="min-h-[300px] relative  z-30 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              class="sm:text-xl text-xl text-gray-400 font-bold mb-6"
            >
              Have any project in mind
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              class=" text-center font-bold text-4xl pb-5 text-gray-200"
            >
              I'm available for hire
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CustomButton>Hire Now</CustomButton>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
