import React from "react";
import ContactForm from "./_component/ContactForm/ContactForm"
import { TiMessageTyping } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

function Contact() {
  return (
    <>
      <section>
        <div class="max-w-6xl mx-auto bg-white dark:bg-black my-6 font-[sans-serif] text-[#011c2b]">
          <div class="text-center dark:text-gray-100 text-gray-900   px-6">
            <h2 class="text-3xl font-extrabold capitalize">get in touch</h2>
            <p class="text-sm text-gray-400 mt-3">
              Have some big idea or brand to develop and need help?
            </p>
          </div>
          <div class="grid lg:grid-cols-3 items-center gap-4 p-2  rounded-md mt-8">
            <div class="dark:bg-[rgba(255,72,0,0.4)] bg-black  rounded-lg p-6 max-lg:text-center">
              <h2 class="text-xl font-bold text-white">Contact Information</h2>
              <p class="text-sm text-gray-400 dark:text-gray-100 mt-3">
                Have some big idea or brand to develop and need help?
              </p>
              <ul class="mt-16 space-y-10">
                <li class="flex items-center max-lg:justify-center">
                <TiMessageTyping className="text-[#fff] text-xl  " />
                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong>edwinuduakabasi@gmail.com</strong>
                  </a>
                </li>
                <li class="flex items-center max-lg:justify-center">
                <IoCallOutline className="text-[#fff] text-xl  " />
                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong>+235 9012575868</strong>
                  </a>
                </li>
                <li class="flex items-center max-lg:justify-center">
                <IoLocationOutline className="text-[#fff] text-xl  "  />

                  <a href="javascript:void(0)" class="text-white text-sm ml-3">
                    <strong> Ikot Use Ekong Eket Akwa Ibom State NIgeria</strong>
                  </a>
                </li>
              </ul>
              <ul class="flex max-lg:justify-center mt-16 space-x-4">
                <li class="bg-gray-200 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                  <MdOutlineFacebook className="h-7 w-7 " />
                  </a>
                </li>
                <li class="bg-gray-200 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                  <AiOutlineGithub className="h-7 w-7" />
                  </a>
                </li>
                <li class="bg-gray-200 hover:bg-gray-400 duration-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                  <RiTwitterXLine className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
