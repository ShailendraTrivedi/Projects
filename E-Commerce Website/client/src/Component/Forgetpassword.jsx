import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Forgetpassword = (e) => {

    const [email, setEmail] = useState('');
    const [otp, setotp] = useState('');
    const history = useHistory();
    const requestotp = async (e) => {
        e.preventDefault();


        if (email.length !== 10) {
            alert("Invalid Mobile Number")
        }
        else {

            const res = await fetch('/requestotp', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email

                })
            });
            if (res.status === 402) {
                alert("Invalid Mobile Number");
            }
            else if (res.status === 200) {
                alert("OTP sent");
                document.getElementById("but1").style.display = "none";
                document.getElementById("otpinput").style.display = "block";
                document.getElementById("but2").style.display = "block";
            }
            else {
                alert("Mobile Number Not Found");
            }


        }
    }

    const verifyotp = async (e) => {
        e.preventDefault();
        console.log(otp);
        const res = await fetch('/verifyotp', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp: otp

            })
        });

        if (res.status === 402) {
            alert("Invalid OTP");
        }
        else {
            alert("OTP Matched");
            history.push('/changepassword');
        }
    }



    return (
        <>
            <div className="container1">
                <div className="loginbox1">
                    <div id="forgetheading">
                        <h1>Verify Mobile Number</h1>
                    </div>
                    <div id="forgetbox">
                        <div id="otpinputbox">
                            <div className="input-field1">
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} name="phone" type="text" placeholder="Enter Mobile Number"></input>
                            </div>
                            <div id="otpinput" className="input-field1">
                                <input onChange={(e) => { setotp(e.target.value) }} value={otp} name="otp" type="text" placeholder="Enter OTP"></input>
                            </div>
                        </div>
                        <input id="but1" type="submit" value="Submit" onClick={requestotp} className="btn solid"></input>
                        <input id="but2" type="submit" value="Verify" onClick={verifyotp} className="btn solid"></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgetpassword;