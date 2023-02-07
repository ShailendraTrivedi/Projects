import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import { useHistory } from 'react-router-dom';
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import {Clear} from './../Reducer/Functions';
import {UserContext} from './../Component/App';



const ContextCart = () => {
  const {  setPayment } = useContext(UserContext);
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  const history = useHistory();
  const Payment = (args) => {
    setPayment(args);
    history.push("/payment");
  
  }
    if (item.length === 0) {
      return (
        <>
          <div className="cartbox">
            <Navbar />
            <section className="main-cart-section">
              <h1>shopping Cart</h1>
              <p className="total-items">
                you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">
                    <h1>Empty Cart</h1>
                  </Scrollbars>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cartbox">
            <Navbar />
            <section className="main-cart-section">
              <h1>shopping Cart</h1>
              <p className="total-items">
                you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">
                    {item.map((curItem) => {
                      return <Items key={curItem.id} {...curItem} />;
                    })}
                  </Scrollbars>
                </div>
              </div>
              <div className="card-total">
                <h3>
                  Total Amount: <span>₹ {totalAmount} </span>
                </h3>
                <button onClick={() => Payment(totalAmount)}>CheckOut</button>
                <button onClick={() => {Clear(); clearCart();}}>Clear Cart</button>
              </div>
            </section>
          </div>
        </>
      );
    }
  };

export default ContextCart;