import React from "react";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <>
      <div className=" bg-black text-white p-10 px-10 w-full h-screen flex flex-col justify-between">
        <div className="bg-black  flex flex-col m-5 justify-center items-center gap-10">
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
          <div className="bg-black">
            "Highly self-motivated and hardworking fresher seeking a challenging
            role in an organization where I can utilize my skills and knowledge
            to contribute to the company's growth. I have a strong passion for
            learning new technologies and am eager to apply my skills in
            implementing and debugging code to deliver high-quality results. As
            a dedicated team player, I am committed to working collaboratively
            to achieve project goals and exceed client expectations."
          </div>
        </div>
        <div className="bg-black  grid grid-cols-2 gap-10 h-[50vh] justify-between">
          <div className="bg-white  text-black flex flex-col justify-between border-2 border-[red]">
            <div className="items-center bg-[red] justify-center text-xl font-bold flex flex-col py-2">
              Contact Me
            </div>
            <div className="flex justify-between px-10 p-[20px] bg-white ">
              <div className="bg-white text-[red] text-xl">GitHub :</div>
              <a
                href="https://github.com/ShailendraTrivedi"
                className="bg-white"
              >
                https://github.com/ShailendraTrivedi
              </a>
            </div>
            <div className="flex justify-between px-10 p-[20px] bg-white">
              <div className="bg-white text-[red] text-xl">Linked In :</div>
              <a
                href="https://www.linkedin.com/in/shailendratrivedi009/"
                className="bg-white"
              >
                https://www.linkedin.com/in/shailendratrivedi009/
              </a>
            </div>
            <div className="flex justify-between px-10 p-[20px] bg-white">
              <div className="bg-white text-[red] text-xl">Gmail :</div>
              <div className="bg-white">shailendratrivedi@009gmail.com</div>
            </div>
            <div className="flex justify-between px-10 p-[20px] bg-white">
              <div className="bg-white text-[red] text-xl">Phone Number :</div>
              <div className="bg-white">(+91) 9453292015</div>
            </div>
          </div>
          <div className="bg-white text-black flex flex-col justify-between border-2 border-[red]">
            <div className="items-center justify-center bg-[red] text-xl font-bold flex flex-col py-2">
              Skills
            </div>
            <div className="flex flex-col  justify-around gap-9 p-2">
              <div className="flex gap-12 bg-white px-2">
                <div className="bg-white">
                  <div className="bg-white">Html: </div>
                </div>
                <div className="border-2 border-[red] w-[50rem] rounded-2xl overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-tr from-[red] to-[black]  flex text-white justify-center items-center rounded-2xl"
                    animate={{
                      width: ["0%", "90%"],
                    }}
                    transition={{
                      duration: 5,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    90%
                  </motion.div>
                </div>
              </div>
              <div className="flex gap-14 bg-white px-2">
                <div className="bg-white">
                  <div className="bg-white">CSS: </div>
                </div>
                <div className="border-2 border-[red] w-[50rem] rounded-2xl overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-tr   from-[red] to-[black]  flex text-white justify-center items-center rounded-2xl"
                    animate={{
                      width: ["0%", "85%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    85%
                  </motion.div>
                </div>
              </div>
              <div className="flex gap-5 bg-white px-2">
                <div className="bg-white">
                  <div className="bg-white">TailWind: </div>
                </div>
                <div className="border-2 border-[red] w-[50rem] rounded-2xl overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-tr   from-[red] to-[black]  flex text-white justify-center items-center rounded-2xl"
                    animate={{
                      width: ["0%", "70%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    70%
                  </motion.div>
                </div>
              </div>
              <div className="flex gap-4 bg-white px-2">
                <div className="bg-white">
                  <div className="bg-white">JavaScript: </div>
                </div>
                <div className="border-2 border-[red] w-[50rem] rounded-2xl overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-tr   from-[red] to-[black]  flex text-white justify-center items-center rounded-2xl"
                    animate={{
                      width: ["0%", "78%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    78%
                  </motion.div>
                </div>
              </div>
              <div className="flex gap-14 bg-white px-2">
                <div class="bg-white">
                  <div className="bg-white">SQL: </div>
                </div>
                <div className="border-2 border-[red] w-[50rem] rounded-2xl overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-tr   from-[red] to-[black]  flex text-white justify-center items-center rounded-2xl"
                    animate={{
                      width: ["0%", "70%"],
                    }}
                    transition={{
                      duration: 2,
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    70%
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
