import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <div className=" bg-black text-white p-10 px-10 w-full h-screen grid grid-cols-2 justify-around">
        <div className="bg-black  flex flex-col m-5 justify-center items-center gap-16">
          <div className="flex flex-col bg-black text-5xl p-3 gap-2">
            About Me
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
          <img src="./image/Contact.jpg" alt="" className="" />
        </div>
        <div className="flex flex-col bg-white text-black rounded-xl m-5">
          <div className="flex flex-col gap-5 px-10 border-4 rounded-xl h-full w-full justify-center">
            <div className="flex justify-center text-3xl">Details</div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <div className="text-xl">First Name :</div>
                <input
                  type="text"
                  className="border-black border-2 rounded-xl w-[17rem]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-xl">Last Name :</div>
                <input
                  type="text"
                  className="border-black border-2 rounded-xl w-[17rem]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Email :</div>
              <input
                type="text"
                className="border-black border-2 rounded-xl w-[37rem]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl">Message :</div>
              <textarea
                type="text"
                className="border-black border-2 rounded-xl w-[37rem] h-[10rem]"
              />
            </div>
            <div className="flex justify-center">
              <button className="border-4 border-black rounded-3xl bg-[red] h-[4rem] w-[10rem]">
                Submit
              </button>
            </div>
            <div className="text-xl"> 😄 Thanks for submission !</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
