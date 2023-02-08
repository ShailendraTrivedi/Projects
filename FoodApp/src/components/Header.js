import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
// Icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <>
      <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16  ">
        {/* Laptop && Tablet */}
        <div className="relative hidden md:flex w-full h-full items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./img/logo.png" className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> City</p>
          </Link>
          <div className="flex items-center gap-8 ">
            <ul className="flex items-center gap-24 ">
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service
              </li>
            </ul>
            <div className="relative flex items-center justify-center p-4">
              <ShoppingCartIcon className="text-textColor text-2xl  cursor-pointer" />
              <p className="absolute text-white font-bold text-xs top-0 right-2 flex bg-blue-800 h-5 w-5 justify-center items-center rounded-full">
                1
              </p>
            </div>
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src="./img/avatar.png"
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                alt="userprofile"
                onClick={login}
              />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className=""></div>
      </header>
    </>
  );
};

export default Header;
