import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
const Product = ({id,title,price,rating,image}) => {
const[state,dispatch] = useStateValue();
const addToBasket= ()=> {
    dispatch({
        type:"ADD_TO_BASKET",
        item:{
            id:id,
            image:image,
            price:price,
            rating:rating,
        },
        })
}
    return (
        <>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <div className="product__price"><small>$</small>{price}</div>
                    <div className="product__rating">
                    {
                        Array(rating).fill().map((_,i)=>(<p key={id+i}>⭐</p>))
                    }
                    </div>
                </div>
                <img src={image} alt="" />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>  
        </>
    )
}

export default Product
