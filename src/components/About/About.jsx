import React from "react";
import Stacks from "./_component/Stacks/stacks";
import CustomButton from "../Ui/CustomButton/CustomButton";
import { motion } from "framer-motion";
import useGetData from '../../Hooks/useGetData';

function About() {
  const { data, loading, error } = useGetData('http://localhost:1337/api/abouts?populate=*');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  const about = data?.data[0]?.attributes; // Assuming the API response structure

  return (
    <section className="font-roboto mt-2 pt-10 container mx-auto" id="about">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10">
          <div className="h-[500px] rounded-sm overflow-hidden hidden md:block w-[500px]">
            <img
              src={`http://localhost:1337${about?.image?.data?.attributes?.url}`}
              alt="uduakabasi"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex flex-col px-5 text-center md:text-start justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:text-4xl text-3xl font-extrabold capitalize mb-6"
            >
              {about?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {about?.description}
            </motion.p>
            <div className="mt-8">
              <div className="flex flex-col md:flex-row items-center">
                <div>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="font-extrabold capitalize text-2xl"
                  >
                    my stack:
                  </motion.h4>
                </div>
                <div className="md:ml-5 pt-5 md:pt-0">
                  <Stacks />
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="mt-8"
            >
              <CustomButton>Hire me</CustomButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
