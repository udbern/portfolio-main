import React from "react";
import coding from "../../../../assets/images/coding.jpg";
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


function CustomCard() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div class=" cursor-pointer  rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] mx-5 md:mx-0 relative group">
      <img src={coding} alt="Blog Post 1" class="w-full h-96 object-cover" />
      <div class="p-6 absolute bottom-0 left-0 right-0  bg-[#e6480a66] opacity-90">
        <span class="text-sm block text-gray-100 mb-2">
          10 FEB 2023 | BY JOHN DOE
        </span>
        <h3 class="text-xl font-bold text-gray-100">
          A Guide to Igniting Your Imagination
        </h3>
        <div class="h-0 flex flex-col overflow-hidden group-hover:h-[110px] group-hover:mt-4 transition-all duration-300">
          <p class="text-gray-100 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
            vitae ligula.
          </p>
          <div className=" flex justify-end">
          <Button className=" capitalize bg-transparent " onPress={onOpen}>view more <span><MdOutlineArrowRightAlt />
</span></Button>
          </div>
          
        </div>
      </div>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default CustomCard;
