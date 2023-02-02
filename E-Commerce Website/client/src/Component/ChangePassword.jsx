import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const ChangePassword = () => {

    const [password, setpassword] = useState('');
    const history = useHistory();
    const [cpassword, setconfirmpassword] = useState('');

    const changepassword = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            alert("Flll details Correctly");
        }
        else {
            const res = await fetch('/changepassword', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password:password,
                    cpassword:cpassword

                })
            });
            console.log(res.status);
            alert("Password Change Successfully");
            history.push('/login');
        }
    }


    return (
        <>
            <div className="container1">
                <div className="loginbox1">
                    <div id="forgetheading">
                        <h1>Reset Password</h1>
                    </div>
                    <div id="forgetbox">
                        <div id="otpinputbox">
                            <div className="input-field1">
                                <input onChange={(e) => { setpassword(e.target.value) }} value={password} name="password" type="text" placeholder="Enter New Password"></input>
                            </div>
                            <div className="input-field1">
                                <input onChange={(e) => { setconfirmpassword(e.target.value) }} value={cpassword} name="cpassword" type="text" placeholder="Enter Confirm Password"></input>
                            </div>
                        </div>
                        <input id="but1" type="submit" value="Submit" onClick={changepassword} className="btn solid"></input>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;