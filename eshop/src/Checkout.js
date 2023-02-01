import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import { useStateValue } from './StateProvider'
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <>
      <div className="checkout">
        <div className="checkoutleft">
          <img src="./images/adv.png" alt="" className="checkout__adv" />
          <div className="checkout--title">
            <h2>Shooping Basket</h2>
            <br />
            <hr />
            {basket.map(item => (<CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />))}

          </div>
        </div>
        <div className="checkoutright">
          <SubTotal />
        </div>
      </div>
    </>
  )
}

export default Checkout