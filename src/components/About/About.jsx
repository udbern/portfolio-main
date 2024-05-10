import React from "react";
import coding from "../../assets/images/coding.jpg";
import Stacks from "./_component/Stacks/stacks";
import CustomButton from "../Ui/CustomButton/CustomButton";
function About() {
  return (
    <>
      <section className=" font-roboto mt-2 pt-10 container mx-auto">
        <div class="max-w-7xl w-full mx-auto">
          <div class="grid  md:grid-cols-2 justify-center items-center gap-10">
            <div class="h-[500px] rounded-sm overflow-hidden hidden md:block w-[500px]">
              <img
                src={coding}
                alt="uduakabasi"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col px-5 text-center md:text-start  justify-center">
              <h2 class="md:text-4xl text-3xl font-extrabold capitalize mb-6">
                about me
              </h2>
              <p>
                My name is UduakAbasi Bernard Edwin, A Front-End
                Developer/Designer with a proven ability to deliver on any given
                task and to collaborate effectively with other developers. I
                enjoy working closely with team members to ensure workloads are
                effectively redirected, and I pick up the slack when necessary
                with a passion for personal growth and software development.
              </p>

              <div class="mt-8 ">
                <div class="flex flex-col md:flex-row   items-center">
                  <div class="">
                    <h4 class="font-extrabold  capitalize text-2xl">
                      my stack:
                    </h4>
                  </div>
                  <div className="md:ml-5 pt-5 md:pt-0">
                    <Stacks />
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <CustomButton >
                  Hire me
                </CustomButton>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
