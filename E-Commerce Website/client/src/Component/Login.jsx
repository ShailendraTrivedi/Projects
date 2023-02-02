import React,{useState,useContext} from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './../CSS/login.css';
import rocket from './../images/rocket.png'
import { NavLink, useHistory } from 'react-router-dom';
import {UserContext} from './App';



const Login=()=>{

    const {update,setcartdata} = useContext(UserContext);


    const history = useHistory();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const CartUpdate = async () => {
        try {
          const res = await fetch('/cart', {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
      
            },
            credentials: "include"
          });
          const data = await res.json();
          setcartdata(data);
          console.log(data);
      
        }
        catch (err) {
          console.log(err);
        }
      }

    

    const loginUser= async (e)=>{

        console.log(email,password);

        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,

            })
        });

        const data =res.json();

        if(res.status===400 || !data){
            window.alert("filled details");
            console.log("Invalid Registration");
        }
        else if (res.status === 401) {
            window.alert("Invalid Details");
            console.log("Invalid Registration");
        }
        else if (res.status === 403) {
            window.alert("Wrong Password");
            console.log("Invalid Registration");
        }
        else{
            CartUpdate();
            update("true");
            if(localStorage.getItem("state")==null){
                localStorage.setItem("state","true");
            }
            else{
                console.log("---->","no");
            }

            window.alert("Successful Login");
            history.push("/");
        }


 


    }



    return (
        <>
            <div className="container">
                <div className="loginbox">
                    <div className="box1">
                        <img src={rocket} alt="Login"></img>
                        <NavLink id="link0" to="/register">Create an Account</NavLink>
                    </div>
                    <div className="box2">
                        <div className="heading">
                            <h1>Sign In</h1>
                        </div>
                        <div className="data">
                            <form method="POST" action="" className="sign-in-form">
                                <div className="input-field">
                                    <EmailIcon style={{margin:"15px 10px",color:"black"}}></EmailIcon>
                                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} name="email" type="text" placeholder="Enter Email"></input>
                                </div>
                                <div className="input-field">
                                    <LockIcon style={{margin:"15px 10px",color:"black"}}></LockIcon>
                                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} name="password" type="text" placeholder="Enter Password"></input>
                                </div>
                                <div className="forgot">
                                    <NavLink id="forgot" to="/forget">Forgot Password?</NavLink>
                                </div>
                                <input type="submit" value="login" onClick={loginUser} className="btn solid"></input>
                            </form>
                            <NavLink id="link1" to="/register">Create an Account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;