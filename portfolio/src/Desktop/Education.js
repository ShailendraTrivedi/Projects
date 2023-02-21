import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
const Education = () => {
  return (
    <>
      <div className="bg-white text-black p-5 px-10 w-full h-screen flex flex-col ">
        <div className="bg-white text-black g-black px-40 flex m-5 justify-between items-center gap-10">
          <div className="flex flex-col bg-white text-black  text-5xl p-3 gap-2">
            Education
            <motion.div
              className="border-2 border-[red] w-[50%] h-1"
              animate={{
                width: ["0%", "50%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="border-2 border-[red] w-[50%] h-1"
              animate={{
                width: ["100%", "50%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <div className="flex flex-col bg-white text-black  text-5xl p-3 gap-2">
            Experience
            <motion.div
              className="border-2 border-[red] w-[50%] h-1"
              animate={{
                width: ["0%", "50%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="border-2 border-[red] w-[50%] h-1"
              animate={{
                width: ["100%", "50%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 w-full h-full text-white ">
          <div className="relative flex border-4 border-black rounded-xl pl-5 bg-black">
            <motion.div
              className="absolute border-2 h-96 left-[34px] top-[50px]  border-[red]"
              animate={{
                height: ["0%", "80%"],
              }}
              transition={{
                duration: 2,
              }}
            />
            <div className="flex flex-col justify-around items gap-3">
              <div className="flex gap-8 p-2 items-center ">
                <FaCircle className="text-[red]" />
                <div className="">
                  <div className="flex flex-col w-[400px] justify-between">
                    <div className="flex font-bold text-xl text-[red]">
                      SRMCEM
                    </div>
                    <div className="">B.Tech in Electronics and</div>
                    <div className="">Communications Engineering (ECE)</div>
                    <div className="font-bold text-[red]">2020-2024</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 p-2 items-center">
                <FaCircle className="text-[red]" />
                <div className="">
                  <div className="flex flex-col w-[400px] justify-between">
                    <div className="flex font-bold text-xl text-[red]">
                      New Public Inter College
                    </div>
                    <div className="flex ">Class XII (CBSE)</div>
                    <div className="font-bold flex text-[red]">2020</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 p-2 items-center">
                <FaCircle className="text-[red]" />
                <div className="">
                  <div className="flex flex-col w-[400px] justify-between">
                    <div className="flex font-bold text-xl text-[red]">
                      New Public Inter College
                    </div>
                    <div className="">Class X (CBSE)</div>
                    <div className="font-bold text-[red]">2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex border-4 border-black rounded-xl pl-5 bg-black">
            <motion.div
              className="absolute border-2 h-40 left-[34px] top-[50px]  border-[red]"
              animate={{
                height: ["0%", "80%"],
              }}
              transition={{
                duration: 2,
              }}
            />
            <div className="flex flex-col justify-around items gap-3">
              <div className="flex gap-8 p-2 items-center ">
                <FaCircle className="text-[red]" />
                <div className="">
                  <div className="flex flex-col w-[400px] gap-4 justify-between">
                    <div className="flex font-bold text-4xl text-[red]">
                      Coding Ninja
                    </div>
                    <div className="text-xl">Teacher Assistant</div>
                    <div className="">
                      Internship programs typically provide hands-on learning
                      experiences in a real-world setting, allowing individuals
                      to apply and develop their skills. They often offer
                      mentorship and guidance from experienced professionals,
                      networking opportunities, and the chance to gain valuable
                      work experience in a particular field.
                    </div>
                    <div className="font-bold text-[red]">2020-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
