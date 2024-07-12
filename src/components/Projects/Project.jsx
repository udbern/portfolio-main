import React from "react";
import CustomCard from "../Ui/CustomCard/CustomCard";
import CustomButton from "../Ui/CustomButton/CustomButton";
import { motion } from "framer-motion";
import useGetData from '../../Hooks/useGetData';

function Project() {
  const { data, loading, error } = useGetData('http://localhost:1337/api/projects?populate=*');

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error fetching data: {error.message}</div>;

  return (
    <section className="font-roboto text-center  mt-2 mb-20 pt-20 block justify-center container mx-auto">
      <motion.h2 initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="capitalize text-2xl font-bold">my projects</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[800px]  lg:max-w-[1500px] mx-auto">
        {data?.data.map((project) => (
          <CustomCard key={project.id} project={project.attributes} />
        ))}
      </div>
      <div className="mt-7">
        <CustomButton>view all</CustomButton>
      </div>
    </section>
  );
}

export default Project;
