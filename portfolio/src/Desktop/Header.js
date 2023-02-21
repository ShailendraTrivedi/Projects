import React from "react";
import "./animation.css";
const Header = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full py-10">
        <div className="flex ml-[50rem] p-5">
          <div className="justify-around items-center flex h-12 w-[50rem] text-2xl text-black gap-5">
            <div className="flex justify-center items-center">Home</div>
            <div className="flex justify-center items-center">About Me</div>
            <button className="border border-[red] bg-[red] w-[200px] h-[50px] rounded-3xl text-white hover:bg-red-300 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 h-full ">
          <div className="relative flex justify-center items-center w-full h-fullrounded-full">
            <div className="absolute animate-pulse top-[25rem] left-[0rem] h-[8rem] w-[8rem] rounded-[80%] bg-[red]" />
            <div className="absolute animate-pulse top-[17rem] left-[3rem] h-[6rem] w-[6rem] rounded-[80%] bg-[red]" />
            <div className="absolute animate-pulse top-[10rem] left-[9rem] h-[4rem] w-[4rem] rounded-[80%] bg-[red]" />
            <div className="absolute animate-pulse top-[6rem] left-[15rem] h-[2rem] w-[2rem] rounded-[80%] bg-[red]" />
            <img src="./image/Men.png" alt="" className="bject-contain " />
          </div>
          <div className="">
            <div className="flex flex-col justify-around items-center">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="p-3 text-[100px]">
                  Hy <span className="shake">!</span> I'm
                </div>
                <div className="flex p-3 text-[50px] ">
                  "Shailendra Trivedi"
                </div>
              </div>
              <div className="flex text-black text-5xl typewriter p-10 justify-center items-center animate-text">
                I'm&nbsp;
              </div>
              <div className="flex justify-between w-[500px]">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Q9ss7e8VB80qXyiwPxBHBfrW9hCh8G2T/view?usp=share_link"
                >
                  <button className="w-40 h-10 text-white bg-[red] rounded-2xl hover:bg-red-300 cursor-pointer">
                    Download CV
                  </button>
                </a>
                <button className="w-40 h-10 text-white bg-[red] rounded-2xl hover:bg-red-300 cursor-pointer">
                  Hire Me !
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
