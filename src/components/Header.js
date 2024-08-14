import { useState } from "react";
import { LOGO_URL } from "../utilis/constants";
import { Link } from "react-router-dom";
import useOnline from "../utilis/useOnline";
 import { useSelector } from "react-redux";
 
 const Header = () => {
  const[btn,setBtn]=useState("login");
   const isOnline=useOnline();

   // subscribing to the store using a selector
   
   // if we use carrly  bracket then we need to return explicitly 
   const cartItems = useSelector((store)=>{  
     return store.cart.items})
    console.log(cartItems);


    return (
      <div className="header ">

        <div className="logo">
          <img src={LOGO_URL}alt="App Logo"className="mr-80"/>
        </div>

        <input type="checkbox" id="click"></input>
        <label htmlFor="click" className="menu-btn">
          <i className="fa-solid fa-bars "></i>
        </label>

        <div className="nav-items">
          <ul className="">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link className="link" >User:{loggedin}</Link></li> */}

            <li>status:{isOnline?"💚":"💖"}</li>
            <li><Link className="link" to="/cart"><i className="fa-solid fa-cart-shopping"></i><sup className="bg-[#681a7e] rounded-full text-white px-1">{cartItems.length}</sup></Link></li>
           
            <button className="login italic font-bold " onClick={()=>{if(btn==="login") { setBtn("Himanshu")}else if(btn==="Himanshu"){setBtn("logOut")}else if(btn==="logOut"){setBtn("login")}
          }}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;