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
import { Link as ScrollLink } from 'react-scroll';
import Switcher from "./_component/ThemeSwitcher/Switcher";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "#hero", target: "hero" },
    { name: "About me", link: "#about", target: "about" },
    { name: "Projects", link: "#project", target: "project" },
    { name: "Blog", link: "#blog", target: "blog" },
    { name: "Contact me", link: "#contact", target: "contact" },
  ];

  return (
    <>
      <Navbar
        className="dark:bg-[#000000] bg-[#FFFFF9]   font-bold  z-50 font-roboto  text-xl"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="">
          <NavbarBrand className="">
            <Link to={"/"} className="cursor-pointer">
              <AcmeLogo />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden  text-[#FF4900] dark:text-[white] text-xl cursor-pointer"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden capitalize  dark:text-[#DBDADC] text-gray-700   md:flex gap-5"
          justify="center"
        >
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item.name}-${index}`}
              className=" hover:bg-[#FF4900]  hover:text-white active:bg-[#FF4900]   flex flex-col items-center duration-500 justify-center px-2  h-full cursor-pointer"
              isActive={item.name === "Home"}
            >
              {item.name === "hero" ? (
                <ScrollLink to={item.target} smooth={true} duration={500}>
                  {item.name}
                </ScrollLink>
              ) : item.name === "Project" ? (
                <ScrollLink to={item.target} smooth={true} duration={500}>
                  {item.name}
                </ScrollLink>
              ) : (
                <ScrollLink to={item.target} smooth={true} duration={500}>
                  {item.name}
                </ScrollLink>
              )}
            </NavbarItem>
          ))}
          <button className=" bg-[#ff4800ab]  h-full px-2 justify-center flex  flex-col text-[#DBDADC] capitalize text-xl cursor-pointer">
            hire me
          </button>
        </NavbarContent>

        <NavbarMenu className="space-y-5 pt-10">
  {menuItems.map((item, index) => (
    <NavbarMenuItem
      className="capitalize p-2 hover:text-gray-950 font-semi-bold hover:bg-gray-200 active:bg-gray-300 font-roboto text-center cursor-pointer"
      key={`${item.name}-${index}`}
    >
      {item.name === "Home" || item.name === "Projects" ? (
        <ScrollLink to={item.target} smooth={true} duration={500}>
          {item.name}
        </ScrollLink>
      ) : (
        <ScrollLink to={item.target} smooth={true} duration={500}>
          {item.name}
        </ScrollLink>
      )}
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
