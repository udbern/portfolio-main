import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import CustomCard from "../Ui/CustomCard/CustomCard";
import CustomButton from "../Ui/CustomButton/CustomButton";
import { motion } from "framer-motion";

function Project() {
  const variants = [
    
    "underlined",
    
  ];

  const [selected, setSelected] = React.useState("all");
  return (
    <>
      <section className="font-roboto text-center mt-2 mb-20 pt-20 block justify-center  container mx-auto">
        <motion.h2 initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} className="capitalize text-2xl   font-bold ">my projects</motion.h2>
        <div className="flex mt-8 justify-center">
          <div className="flex flex-col  w-full  ">
          {variants.map((variant) => (
            <Tabs
              className="flex flex-col   "
              aria-label="Options"
              selectedKey={selected}
              onSelectionChange={setSelected}
              key={variant} variant={variant} 
              color="primary"
            >
              <Tab key="all" title="All" className="rounded-none">
                <Card className="grid grid-cols-1 dark:bg-black bg-white border-none rounded-md shadow-none p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <CustomCard />
                  <CustomCard />
                  <CustomCard />
                  <CustomCard />
                </Card>
              </Tab>
              <Tab
                className="rounded-none b"
                key="ui/ux"
                title="ui/ux"
              >
                <Card className="grid grid-cols-1 dark:bg-black bg-white border-none rounded-md shadow-none p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab className="" key="html/css" title="HTML/CSS">
                <Card className="grid grid-cols-1 dark:bg-black bg-white border-none rounded-md shadow-none p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab className="" key="react.js" title="React.js">
                <Card className="grid grid-cols-1 dark:bg-black bg-white border-none rounded-md shadow-none p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="next.js" title="Next.js">
                <Card className="grid grid-cols-1 dark:bg-black bg-white border-none rounded-md shadow-none p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            ))}
          </div>
        </div>
        <div className=" mt-7">
            <CustomButton>view all</CustomButton>
        </div>
        
      </section>
    </>
  );
}

export default Project;
