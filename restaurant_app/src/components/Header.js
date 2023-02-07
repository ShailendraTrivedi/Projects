import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.config.js';
import { useStateValue } from '../Context/StateProvider.js';
import { actionType } from '../Context/reducer.js';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';


const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    const login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            })
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }
    }
    const logout = () => {
        setIsMenu(false)
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }
    return (
        <>
            <header className="fixed z-50 w-screen bg-slate-300 p-3 px-10">
                {/* Desktop & Tablet */}
                <div className="hidden md:flex w-full h-full p-3 px-2 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="Images/logo.png" className="w-12 object-cover" alt="Logo" />
                        <p className="text-cartBg text-5xl font-bold">City</p>
                    </Link>
                    <div className="flex items-center gap-5">
                        <ul
                            className="flex items-center gap-6">
                            <li className="text-base text-2xl text-black hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                            <li className="text-base text-2xl text-black hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                            <li className="text-base text-2xl text-black hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                            <li className="text-base text-2xl text-black hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer">Services</li>
                        </ul>
                        <div className="relative flex justify-center items-center">
                            <ShoppingCartIcon className="text-black text-2xl m-3 hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer" />
                            <p className="absolute top-0 right-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white font-semibold">2</p>
                        </div>
                        <div className="relative">
                            <img
                                className="h-12 w-12 border-2 border-black rounded-full cursor-pointer"
                                onClick={login}
                            />
                            {
                                isMenu && (
                                    <div className=" absolute right-2 w-40 bg-slate-400 shadow-xl rounded-lg items-center cursor-pointer">
                                    {user && user.email == "shailendratrivedi004@gmail.com" && (
                                            <Link to={"/crete Item"}>
                                                <p className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-300 duration-100 transition-all ease-in-out text-base "><AddIcon />Add Item</p>
                                            </Link>
                                        )}
                                        <p className="flex items-center justify-center p-2 rounded-lg hover:bg-slate-300 duration-100 transition-all ease-in-out" onClick={logout}>Logout<LogoutIcon /></p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className="flex relative md:hidden w-full h-full justify-between">
                    <div className="relative flex justify-center items-center">
                        <ShoppingCartIcon className="text-black text-2xl m-3 hover:text-gray-600 duration-100 transition-all ease-in-out cursor-pointer" />
                        <p className="absolute top-0 right-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white font-semibold">2</p>
                    </div>
                    <Link to="/" className="flex items-center gap-2">
                        <img src="Images/logo.png" className="w-10 object-cover" alt="Logo" />
                        <p className="text-cartBg text-5xl font-bold">City</p>
                    </Link>
                    <div className="relative flex justify-center items-center">
                        <img
                            src={(user) ? user.photoURL : "Images/avatar.png"}
                            alt="Avatar"
                            className="h-12 w-12 border-2 border-black rounded-full cursor-pointer"
                            onClick={login}
                        />
                        {
                            isMenu && (
                                <div 
                                    className=" absolute gap-2 right-4 top-12 w-36 bg-slate-400  rounded-lg  cursor-pointer">
                                    <ul className='text-base flex flex-col items-center justify-center'>
                                        {user && user.email == "shailendratrivedi004@gmail.com" && (
                                            <Link to={"/crete Item"}>
                                                <li className="text-base flex w-[142px] rounded-md items-center justify-center p-2  text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer"><AddIcon />Add Item</li>
                                            </Link>
                                        )}
                                        <li className="text-base flex w-[100%] items-center justify-center p-2  text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                                        <li className="text-base flex w-[100%] items-center justify-center p-2  text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                                        <li className="text-base flex w-[100%] items-center justify-center p-2  text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                                        <li className="text-base flex w-[100%] items-center justify-center p-2  text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer">Services</li>
                                        <li className="text-base flex  w-[100%] items-center justify-center p-2 rounded-md  bg-slate-600 text-black hover:bg-slate-300 duration-100 transition-all ease-in-out cursor-pointer" onClick={logout}>Logout<LogoutIcon /></li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
