import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Apple iPhone 13 (128GB) - Midnight"
                        price={759.14 }
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
                    />
                    <Product
                        id="4538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={177.46}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41022mFmsPL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                    <Product
                        id="4958094"
                        title="Voltas 2 Ton 5 Star Inverter Split AC (Copper SAC_245V_ADZ (R32) White)"
                        price={710.22}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/21vREr2cksL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="4953804"
                        title="Godrej 564 L Frost Free Side-By-Side Refrigerator (RS EONVELVET 579 RFD PL ST, Platinum Steel, Multi Air Flow System)"
                        price={673.48}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/21uGz6GDD0L._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
