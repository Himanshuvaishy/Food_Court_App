import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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