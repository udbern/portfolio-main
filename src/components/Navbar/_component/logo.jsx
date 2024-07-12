import React from "react";
import Logo from "../../../assets/images/logo.png"
export const AcmeLogo = () => (
  <div className=" h-10 flex  items-center px-2  space-x-2 ">
    <img className=" h-full w-full object-cover object-center" src={Logo} alt="" />
    <span className=" font-merienda text-[14px] lg:text-[16px]  font-bold  capitalize ">uduak bernard</span>
  </div>
);
