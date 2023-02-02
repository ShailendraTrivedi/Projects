import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import Home from './Home';
import { Route } from 'react-router-dom';
import Mobiles from './Mobiles';
import Electronics from './Electronics';
import Laptop from './Laptop';
import Television from './Television';
import Camera from './Camera';
import Refrigrator from './Refrigrator';
import Appliances from './Appliances';
import Microwave from './Microwave';
import Ac from './Ac';
import Washingmachine from './Washingmachine';
import Headphone from './Headphone';
import Chimney from './Chimney';
import BeautyToys from './BeautyToys';
import Beauty from './Beautypage';
import Toy from './Toypage';
import Fitness from './Fitnesspage';
import Food from './Foodpage';
import Fashion from './Fashion';
import Menspage from './Menspage';
import Womenspage from './Womenspage';
import Kidspage from './Kidspage';
import Watchpage from './Wathpage';
import Homedecor from './Homedecoration';
import Homedecorpage from './Homedecorpage';
import Bedroomfurniturepage from './Bedroomfurniturepage';
import Livingfurniturepage from './Livingfurniturepage';
import Kidsfurniturepage from './Kidsfurniturepage';
import Cookware from './Cookwarepage';
import Computer from './Computer';
import Gaming from './Gaming';
import Footer from './Footer';
import Cart from './../CartComponent/Cart';
import Profile from './Profile';
import Detailspage from './Detailspage';
import Logout from './Logout';
import Payment from './Payment';
import Forgetpassword from './Forgetpassword';
import ChangePassword from './ChangePassword';

export const UserContext = createContext();


const App = () => {

    const [cartdata,newupdatecart]=useState([]);
    const [state,setstate]=useState();
    const [bookproduct,setbookproduct]=useState();
    const [paymentprice,setpaymentprice]=useState();

    const history=useHistory();

    const setPayment=(args)=>{
        setpaymentprice(args);
    }


    const setcartdata=(value)=>{
        newupdatecart(value);
    }

    
    const updatebookproduct=(args)=>{
        setbookproduct(args);
        history.push('/detailspage');
    }

    

    const update=(val)=>{
        setstate(val);
    }



    return (
        <>

            <UserContext.Provider value={{state,update,cartdata,setcartdata,updatebookproduct,bookproduct,paymentprice,setPayment}}>


                <Navbar></Navbar>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Signup></Signup>
                </Route>
                <Route path="/mobiles">
                    <Mobiles></Mobiles>
                </Route>
                <Route path="/electronics">
                    <Electronics></Electronics>
                </Route>
                <Route path="/laptop">
                    <Laptop></Laptop>
                </Route>
                <Route path="/television">
                    <Television></Television>
                </Route>
                <Route path="/camera">
                    <Camera></Camera>
                </Route>
                <Route path="/refrigrator">
                    <Refrigrator></Refrigrator>
                </Route>
                <Route path="/appliances">
                    <Appliances></Appliances>
                </Route>
                <Route path="/ac">
                    <Ac></Ac>
                </Route>
                <Route path="/microwave">
                    <Microwave></Microwave>
                </Route>
                <Route path="/washingmachine">
                    <Washingmachine></Washingmachine>
                </Route>
                <Route path="/headphone">
                    <Headphone></Headphone>
                </Route>
                <Route path="/chimney">
                    <Chimney></Chimney>
                </Route>
                <Route path="/beautytoys">
                    <BeautyToys></BeautyToys>
                </Route>
                <Route path="/beauty">
                    <Beauty></Beauty>
                </Route>
                <Route path="/toy">
                    <Toy></Toy>
                </Route>
                <Route path="/fitness">
                    <Fitness></Fitness>
                </Route>
                <Route path="/food">
                    <Food></Food>
                </Route>
                <Route path="/fashion">
                    <Fashion></Fashion>
                </Route>
                <Route path="/mentopwear">
                    <Menspage></Menspage>
                </Route>
                <Route path="/womens">
                    <Womenspage></Womenspage>
                </Route>
                <Route path="/kids">
                    <Kidspage></Kidspage>
                </Route>
                <Route path="/watch">
                    <Watchpage></Watchpage>
                </Route>
                <Route path="/homedecoration">
                    <Homedecor></Homedecor>
                </Route>
                <Route path="/bedroomfurniture">
                    <Bedroomfurniturepage></Bedroomfurniturepage>
                </Route>
                <Route path="/livingfurniture">
                    <Livingfurniturepage></Livingfurniturepage>
                </Route>
                <Route path="/kidsfurniture">
                    <Kidsfurniturepage></Kidsfurniturepage>
                </Route>
                <Route path="/homedecor">
                    <Homedecorpage></Homedecorpage>
                </Route>
                <Route path="/cookware">
                    <Cookware></Cookware>
                </Route>
                <Route path="/computer">
                    <Computer></Computer>
                </Route>
                <Route path="/gaming">
                    <Gaming></Gaming>
                </Route>
                <Route path="/cart">
                    <Cart></Cart>
                </Route>
                <Route path="/profile">
                    <Profile></Profile>
                </Route>
                <Route path="/logout">
                    <Logout></Logout>
                </Route>
                <Route path="/detailspage">
                    <Detailspage></Detailspage>
                </Route>
                <Route path="/payment">
                    <Payment></Payment>
                </Route>
                <Route path="/forget">
                    <Forgetpassword></Forgetpassword>
                </Route>
                <Route path="/changepassword">
                    <ChangePassword></ChangePassword>
                </Route>
               
                <Footer></Footer>
            </UserContext.Provider>
        </>
    )
};


export default App;