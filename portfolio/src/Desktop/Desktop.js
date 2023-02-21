import React from "react";
import Contact from "./Contact.js";
import Education from "./Education.js";
import AboutMe from "./AboutMe.js";
import Header from "./Header.js";
const Desktop = () => {
  return (
    <>
      <div className="">
        <div className="bg-[red]">
          <div className="bg-[white] rounded-tl-[80%]">
            <Header />
          </div>
        </div>
        <div className=" ">
          <AboutMe />
        </div>
        <div className=" ">
          <Education />
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Desktop;
