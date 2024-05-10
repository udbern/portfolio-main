import React from "react";
import CustomBlogCard from "../Blog/_component/CustomBlogCard/CustomCard";
import CustomButton from "../Ui/CustomButton/CustomButton";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

function Blog() {
  return (
    <>
      <section className=" block  justify-center items-center pt-16 pb-16">      
        <div class="bg-white dark:bg-black font-roboto  pt-5">
          <div class="max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-[#333] dark:text-gray-200 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#ff4800ab] after:rounded-full">
                LATEST BLOGS
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[800px] lg:max-w-[1500px] mx-auto">
              <CustomBlogCard />
              <CustomBlogCard />
              <CustomBlogCard />
            </div>
          </div>
          <div className=" w-fit mx-auto mt-16">
          <CustomButton>
            view all
          </CustomButton>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Blog;
