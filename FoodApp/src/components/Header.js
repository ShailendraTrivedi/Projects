import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
// Icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
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
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-24 "
            >
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
            </motion.ul>
            <div className="relative flex items-center justify-center p-4">
              <ShoppingCartIcon className="text-textColor text-2xl  cursor-pointer" />
              <p className="absolute text-white font-bold text-xs top-0 right-2 flex bg-blue-800 h-5 w-5 justify-center items-center rounded-full">
                1
              </p>
            </div>
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : "./img/avatar.png"}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                alt="userprofile"
                onClick={login}
              />
              {isMenu && (
                <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                  {user && user.email === "shailendratrivedi004@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-md text-base">
                        <AddCircleOutlineIcon /> New Item
                      </p>
                    </Link>
                  )}

                  <p className="px-4 py-2 flex items-center  gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-md text-base">
                    <LogoutIcon /> Logout
                  </p>
                </div>
              )}
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
