import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
      <div className="App">
        <BrowserRouter>
          <Header />
          console.log(<Header/>);
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout" component={Checkout} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
