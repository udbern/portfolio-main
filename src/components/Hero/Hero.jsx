import React from 'react';
import CustomButton from '../Ui/CustomButton/CustomButton';
import { motion } from 'framer-motion';
import useGetData from '../../Hooks/useGetData';

function Hero() {
  const { loading, error, data } = useGetData('http://localhost:1337/api/heroes?populate=*');

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error) return <div className='text-center'>Error fetching data: {error.message}</div>;

  const hero = data?.data[0]?.attributes; 
  const cvUrl = `http://localhost:1337${hero?.cv?.data?.attributes?.url}`;

  return (
    <section className="dark:bg-[#000000] mx-2 font-roboto">
      <div className="font-sans lg:min-h-screen text-[#333] bg max-w-6xl md:px-5 max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <div className="max-md:order-1 max-md:text-center capitalize text-gray-800 dark:text-[#DBDADC]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-bold py-3 capitalize rounded-sm px-6 w-fit dark:bg-[#e7e7e7] bg-gray-800 text-white shadow-gray-800 dark:shadow-[#e7e7e7] shadow-md dark:text-black mb-6"
            >
              <span className="rotate-90 inline-block mr-2">|</span> hello i'm
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:text-5xl text-3xl font-extrabold capitalize mb-4  md:!leading-[55px]"
            >
              {hero?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 text-base font-bold text-gray-600 dark:text-gray-500 leading-relaxed"
            >
              {hero?.text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-5 lg:mt-10 space-x-4"
            >
              <a href={cvUrl} download>
                <CustomButton>Download CV</CustomButton>
              </a>
            </motion.div>
          </div>

          <div className="lg:min-h-[650px] md:min-h-[550px] w-full overflow-hidden flex items-center relative max-md:before:hidden before:absolute dark:before:bg-[white] before:bg-black before:h-full before:w-[83.1%] before:rounded-sm before:right-3 before:z-0">
            <motion.img
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`http://localhost:1337${hero?.image?.data?.attributes?.url}`}
              className="rounded-md lg:w-3/4 md:w-11/12 z-30 relative object-cover"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
