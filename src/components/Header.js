import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
const Header = () => {

  const[btn,setBtn]=useState("LogIn");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
  
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="button-login" onClick={()=>{
             btn==="LogIn" ? setBtn("LogOut") :setBtn("LogIn");
            }}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;