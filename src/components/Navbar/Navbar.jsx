import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./_component/logo";
import { Link } from "react-router-dom";
import Switcher from "./_component/ThemeSwitcher/Switcher";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About me",
    "Projects",
    "Blog",
    "Contact me",
    
  ];

  return (
    <>
      <Navbar
        className="dark:bg-[#000000] bg-[#FFFFF9]   font-bold  z-50 font-roboto  text-xl"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="">
          
          <NavbarBrand className="">
            <Link to={"/"} className="">
              <AcmeLogo />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden  text-[#FF4900] dark:text-[white] text-xl "
          />
        </NavbarContent>

        <NavbarContent
          className="hidden capitalize  dark:text-[#DBDADC] text-gray-700   md:flex gap-5"
          justify="center"
        >
          <NavbarItem
            className=" hover:bg-[#FF4900]  hover:text-white active:bg-[#FF4900]   flex flex-col items-center justify-center duration-500   px-2 h-full"
            isActive
          >
            <Link className=" " to={"/"} aria-current="page">
              about me
            </Link>
          </NavbarItem>
          <NavbarItem className=" hover:bg-[#FF4900]  hover:text-white active:bg-[#FF4900]   flex flex-col items-center duration-500 justify-center px-2  h-full">
            <Link className="" to={"/"}>
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem className=" hover:bg-[#FF4900]  hover:text-white active:bg-[#FF4900]  flex flex-col items-center justify-center duration-500 px-2  h-full">
            <Link className=" " to={"/"}>
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem className=" hover:bg-[#FF4900]  hover:text-white active:bg-[#FF4900]   flex flex-col items-center justify-center duration-500 px-2  h-full">
            <Link className="" to={"/"}>
              contact
            </Link>
          </NavbarItem>
          <button className=" bg-[#ff4800ab]  h-full px-2 justify-center flex  flex-col text-[#DBDADC] capitalize text-xl ">
            hire me
          </button>
        </NavbarContent>

        <NavbarMenu className="space-y-5 pt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem className=" capitalize p-2 hover:text-gray-950 font-semi-bold hover:bg-gray-200 active:bg-gray-300  font-roboto text-center" key={`${item}-${index}`}>
              <Link 
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full "
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <div className="">
        <Switcher />
        </div>
        
        
      </Navbar>
    </>
  );
}

export default Nav;
