import React, { useContext, useRef ,useEffect} from 'react'
import { UserContext } from './App';
import {useHistory} from 'react-router-dom';
import PaymentIcon from '@material-ui/icons/Payment';
import './../CSS/payment.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReactLoading from "react-loading";



const Payment = () => {
    const { paymentprice } = useContext(UserContext);
    const history=useHistory();

    const Form1 = useRef();
    const Form2 = useRef();
    const Form3 = useRef();
    const progress = useRef();
    const paymentloading = useRef();
    const paymentsuccessfull = useRef();

    const callPaymentpage = async ()=>{
        try{

            const res = await fetch('/payment',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                    
                },
                credentials:"include"
            });

           if(res.status===401){
                const error = new Error(res.error);
                throw error;
           }

        }
        catch(err){
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        
        callPaymentpage();
       
    });






    const Next1 = () => {

        Form1.current.style.display = "none";
        Form2.current.style.display = "block";
        progress.current.style.width = "66%";

    }
    const Back1 = () => {
        Form1.current.style.display = "block";
        Form2.current.style.display = "none";
        progress.current.style.width = "33%";

    }
    const Next2 = () => {
        setTimeout(()=>{
            paymentsuccessfull.current.style.visibility="visible";
            paymentloading.current.style.display="none";
        },4000);
        Form2.current.style.display = "none";
        Form3.current.style.display = "block";
        progress.current.style.width = "100%";

    }
    const GoHome = () => {
        
        Form1.current.style.display = "block";
        Form3.current.style.display = "none";
        history.push('/');

    }



    return (
        <>
            <div className="paymentpage">
                <div className="pcontainer">
                    <div className="step-row">
                        <div id="pprogress" ref={progress}></div>
                        <div className="step-col"><small>Step 1</small></div>
                        <div className="step-col"><small>Step 2</small></div>
                        <div className="step-col"><small>Step 3</small></div>
                    </div>
                    <form id="pform1" value="true" ref={Form1}>
                        <h3 className="h3">ADDRESS DETAILS</h3>
                        <input type="text" placeholder="Enter Your Name" required></input>
                        <input type="text" placeholder="Enter Your Pincode" required></input>
                        <input type="text" placeholder="Enter Your Address" required></input>
                        <div className="pbuttonbox">
                            <button type="button" value="true" onClick={Next1} id="next1">Next</button>
                        </div>
                    </form>

                    <form id="pform2" ref={Form2}>
                        <div className="paymentheading">
                            <h3 className="h3">PAYMENT DETAILS</h3><PaymentIcon style={{ "marginLeft": "20px", "marginTop": "-50px", "fontSize": "60px" }}></PaymentIcon>
                        </div>
                        <input type="text" placeholder="Enter Card Number" required></input>
                        <input type="text" placeholder="Enter Card Holder Name" required></input>
                        <input type="text" placeholder="Enter CVV Number" required></input>
                        <h1 id="pid">Amount: <span>{paymentprice}</span></h1>
                        <div className="pbuttonbox">
                            <button type="button" value="true" onClick={Back1} id="back1">Back</button>
                            <button type="button" value="true" onClick={Next2} id="next2">Next</button>
                        </div>
                    </form>

                    <div id="pform3" ref={Form3}>
                        <div className="spinning" ref={paymentloading}>
                            <ReactLoading height={'10%'} width={'10%'} type="spokes" color="red" />
                        </div>
                        <div className="paymentsuccessful" ref={paymentsuccessfull}>
                            <CheckCircleIcon style={
                                {
                                    "fontSize": "20rem",
                                    "marginBottom": "20px",
                                    "color": "green",
                                }
                            }></CheckCircleIcon>


                            <h3 className="h3">Payment successfull</h3>
                            <div className="pbuttonbox">
                            <button type="button" value="true" onClick={GoHome} id="next3">Next</button>
                        </div>
                        </div>

                        
                    </div>


                </div>
            </div>
        </>

    )
}

export default Payment;