import React, { useContext } from 'react';
import { UserContext } from './App';
import { useHistory } from 'react-router-dom';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './../CSS/bookproduct.css';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Scrollbars } from "react-custom-scrollbars-2";



const UploadData = async (arg) => {


    let quantity = 1, id = 0;
    try {
        const res = await fetch('/addtocart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                name: arg.cname,
                image: arg.imgsrc,
                price: arg.price,
                quantity: quantity
            })
        });
        if(res.result===400){
            console.log("error");
        }
        else{
            console.log("success");
        }
    }
    catch (err) {
        console.log(err);
    }
}



const Detailspage = () => {

    const { bookproduct, setPayment } = useContext(UserContext);
    const history = useHistory();
    const Payment = (args) => {
        setPayment(args);
        history.push("/Payment");

    }

    return (
        <>
            <div className="bookpage">
                <div className="bookcard">
                    <div className="bookcard_img">
                        <div className="bookimage">
                            <img src={bookproduct.imgsrc} alt="" ></img>
                        </div>
                        <div className="bookcard_book">
                            <div style={{ marginRight: "10px" }} className="bookbtn"><button onClick={() => Payment(bookproduct.price)} style={{ marginRight: "10px" }} id="b1"><FlashOnIcon style={{ fontSize: "30px" }}></FlashOnIcon>Book</button></div>
                            <div style={{ marginRight: "10px" }} className="bookbtn"><button onClick={() => UploadData(bookproduct)} style={{ marginRight: "10px" }} id="b2"><AddShoppingCartIcon style={{ fontSize: "30px" }}></AddShoppingCartIcon>Add to Cart</button></div>
                        </div>
                    </div>
                    <div className="bookinfo">
                        <div className="bookcard_info1">
                            <div className="bookitemtitle">
                                <h3 >{bookproduct.cname}</h3>
                                <Box style={{ "marginTop": "10px" }} component="fieldset" mb={3} borderColor="transparent">
                                    <Rating style={{ "fontSize": "30px" }} name="read-only" value={3} readOnly />
                                </Box>
                                <h4>{bookproduct.price}</h4>
                            </div>
                            <div className="booklist">
                                <Scrollbars style={
                                    {
                                        "height":"400px"
                                    }
                                }>
                                <ul>
                                    
                                        {

                                            bookproduct.list.map((val) => {
                                                return (
                                                    <li>{val.l}</li>
                                                )
                                            })

                                        }
                                        
                                        <li><LocalOfferIcon style={{ "marginRight": "20px" }}></LocalOfferIcon>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card<br></br></li>
                                        <li><LocalOfferIcon style={{ "marginRight": "20px" }}></LocalOfferIcon>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik<br></br></li>
                                        <li><LocalOfferIcon style={{ "marginRight": "20px" }}></LocalOfferIcon>Bank OfferFlat ₹100 off on first Flipkart Pay Later order of ₹500 and above<br></br></li>
                                        
                                </ul>
                                </Scrollbars>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detailspage;