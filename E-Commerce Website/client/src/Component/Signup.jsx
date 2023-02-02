import React, { useState } from 'react'
import './../CSS/signup.css'
import Desk from './../images/desk.png'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    });
    let name, value;
    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }
    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = user;


        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password,
                cpassword: cpassword

            })
        });


        const data = await res.json();


        if (res.status === 400 || !data) {
            window.alert("filled details");
            console.log("Invalid Registration");
        }
        else if (res.status === 401) {
            window.alert("Phone Number is Invalid");
            console.log("Invalid Registration");
        }
        else if (res.status === 402) {
            window.alert("Invalid E-mail");
            console.log("Invalid Registration");
        }
        else if (res.status === 422) {
            window.alert("Email already Exist");
            console.log("Invalid Registration");
        }
        else if (res.status === 423) {
            window.alert("Mobile Number already Exist");
            console.log("Invalid Registration");
        }
        else if (res.status === 423) {
            window.alert("Password Not Matched");
            console.log("Invalid Registration");
        }
        
        else {
            window.alert("Successful Registration");

            history.push("/login");
        }







    }




    return (
        <>
            <div className="container1">
                <div className="signupbox">
                    <div className="boxsign1">
                        <div className="headingsign">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="signdata">
                            <form action="/signup" method="post" className="sign-up-form">
                                <div className="inputfield">
                                    <EmailIcon style={{ margin: "15px 10px", color: "black" }}></EmailIcon>
                                    <input name="name" value={user.name} onChange={handleInputs} type='text' placeholder="Enter Name"></input>
                                </div>
                                <div className="inputfield">
                                    <EmailIcon style={{ margin: "15px 10px", color: "black" }}></EmailIcon>
                                    <input name="email" value={user.email} onChange={handleInputs} type='email' placeholder="Enter E-mail"></input>
                                </div>
                                <div className="inputfield">
                                    <EmailIcon style={{ margin: "15px 10px", color: "black" }}></EmailIcon>
                                    <input name="phone" value={user.phone} onChange={handleInputs} type='text' placeholder="Enter Phone Number"></input>
                                </div>
                                <div className="inputfield">
                                    <LockIcon style={{ margin: "15px 10px", color: "black" }}></LockIcon>
                                    <input name="password" value={user.password} onChange={handleInputs} type='text' placeholder="Enter Password"></input>
                                </div>
                                <div className="inputfield">
                                    <LockIcon style={{ margin: "15px 10px", color: "black" }}></LockIcon>
                                    <input name="cpassword" value={user.cpassword} onChange={handleInputs} type='text' placeholder="Enter Confirm Password"></input>
                                </div>
                                <input type="submit" value="Submit" onClick={PostData} className="btn solid"></input>
                            </form>
                            <div id="show" className="clicklogin ">
                                Already Registered??  <NavLink to="/login">Login</NavLink>

                            </div>
                        </div>
                    </div>
                    <div className="boxsign2">
                        <div className="deskimg">
                            <img src={Desk} alt=""></img>
                        </div>
                        <div id="show1" className="clicklogin">
                            Already Registered??  <NavLink to="/login">Login</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;