import React, { createContext, useReducer, useEffect, useContext } from "react";
import "./../CSS/cart.css";
import ContextCart from "./ContextCart";
import  reducer  from "./reducer";
import {UserContext} from './../Component/App';
import {Clear} from './../Reducer/Functions';





export const CartContext = createContext();


const Cart = () => {
  const {cartdata}= useContext(UserContext);


  const initialState = {
    item: cartdata,
    totalAmount: 0,
    totalItem: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);



  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    Clear();
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}>
      
      
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;