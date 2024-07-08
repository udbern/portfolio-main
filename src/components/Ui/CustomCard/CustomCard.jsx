import React from "react";
import { Link } from "react-router-dom"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./CSS/CustomCard.css";


function CustomCard({ project }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="  h-60 md:h-80  duration-500 shadow-4xl  border rounded-md">
      <div  className="cursor-pointer h-full shadow-4xl dark:shadow-gray-500 rounded overflow-hidden mx-5 md:mx-0 relative group">
          <img 
            src={`http://localhost:1337${project?.image?.data?.attributes?.url}`} 
            alt="project.png"
            className="w-full h-96 object-cover object-center  bg-overlay " 
          />
          <div className="p-6 absolute bottom-0 left-0 right-0 bg-[#7c2b2b] opacity-0 group-hover:opacity-100 transition-all duration-300">
            
            <h3 className="text-xl font-bold text-gray-100">
            {project.title}
            </h3>
            <p> 
            {project.stag}
            </p>
            <div className="h-0 flex flex-col overflow-hidden group-hover:h-[110px] group-hover:mt-4 transition-all duration-300">
              
              <div className="flex justify-end">
              <Button className="capitalize bg-transparent text-white" onPress={onOpen}>
              view more <span><MdOutlineArrowRightAlt /></span>
            </Button>
              </div>
            </div>
          </div>
        </div>
      

      <Modal className=" w-full md:w-[80%] rounded-md p-2  h-[80%] overflow-auto " isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">
                {project.title}
              </ModalHeader>
              <ModalBody className=" ">
                {project.desc}
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Link className="bg-[#FF4900] rounded-[4px] px-5 py-2 text-white" href={project.github}>
                  github
                </Link>
                <Link  to className="bg-[#FF4900] rounded-[4px] px-5 py-2 cursor-pointer text-white" href={project.live}>
                  live
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  );
}

export default CustomCard;
