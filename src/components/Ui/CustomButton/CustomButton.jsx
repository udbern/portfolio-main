import React from "react";
import { Button } from "@nextui-org/react";

const CustomButton = ({  children }) => {
  return (
    <Button   className=" text-white shadow-[#FF4900] dark:shadow-gray-500  bg-black  shadow-sm dark:bg-[#ff4800ab] capitalize rounded-sm" >
      {children}
    </Button>
  );
};

export default CustomButton;

