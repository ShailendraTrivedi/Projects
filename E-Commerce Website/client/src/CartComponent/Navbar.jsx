import React, { useContext } from "react";
import { CartContext } from "./Cart";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <NavLink style={{marginTop:"15px"}} to='/'><img src="./images/Cart/arrow.png" alt="arrow" className="arrow-icon" /></NavLink>
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/Cart/cart.png" alt="cart-logo" />
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;