import React, { useContext} from 'react'
import './../CSS/navbar.css';
import MenuBar1 from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from './App';
import { useHistory } from 'react-router-dom';





const Navbar = () => {
    const history = useHistory();
    const { state, setcartdata } = useContext(UserContext);
    


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
            history.push("/cart");


        }
        catch (err) {
            console.log(err);
        }
    };

    

    




    const RenderMenu = () => {

        if (state === "true") {
            return (
                <>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li id="cart">
                            <NavLink to=""><AddShoppingCartIcon onClick={CartUpdate} id="cartbutton" style={{ fontSize: "40px", marginBottom: "-15px" }}></AddShoppingCartIcon></NavLink>
                        </li>

                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </>
            )
        }
        // style={{display:navstate?'block':'none'}}
        else {
            return (
                <>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>

                    </ul>
                </>
            )
        }
    }





    return (
        <>
            <nav className="navbar1">
                <div className="logo">MEGAKART</div>
                <label for="btn" className="icon">
                    <MenuBar1 style={{ fontSize: "30px" }} className="bars"></MenuBar1>
                </label>
                <input type="checkbox" label="nav" id="btn"></input>

                <RenderMenu></RenderMenu>
            </nav>

        </>
    )
};


export default Navbar;