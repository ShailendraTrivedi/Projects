import React, { useContext } from "react";
import { CartContext } from "./Cart";
import Plus from '@material-ui/icons/Add';
import Minus from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';
import {QuantityIncreament,QuantityDecreament,Delete} from './../Reducer/Functions';

const Items = ({ id, name, image, price, quantity }) => {

  const { removeItem, increment, decrement } = useContext(CartContext);


  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="iamge" />
        </div>

        <div className="title">
          <h2>{name}</h2>
        </div>

        <div className="add-minus-quantity">
          <Minus style={{fontSize:"30px",marginBottom:"18px",cursor:"Pointer"}}  onClick={()=>{ decrement(id);QuantityDecreament(id);}}></Minus>
          <input type="text" placeholder={quantity} disabled />
          <Plus style={{fontSize:"30px",marginBottom:"0px",cursor:"Pointer"}} onClick={()=> {QuantityIncreament(id); increment(id);}}></Plus>
        </div>

        <div className="pricecart">
          <h4>
          {price}
          </h4>
        </div>

        <div className="remove-item">
          <DeleteIcon style={{fontSize:"30px",cursor:"pointer"}} className="fas fa-trash-alt remove"
            onClick={() => {removeItem(id); Delete(id);}}></DeleteIcon>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;