import React from "react";
import Logo from "../../../assets/images/logo.png"
export const AcmeLogo = () => (
  <div className=" h-10 flex  items-center px-2  space-x-2 ">
    <img className=" h-full w-full object-cover object-center" src={Logo} alt="" />
    <span className=" font-merienda text-[20px] lg:text-[26px]  font-semibold  capitalize ">uduak bernard</span>
  </div>
);
