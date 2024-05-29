import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_LIST_API } from "../utilis/constants";

import { useState,useEffect } from "react";

import useOnline from "../utilis/useOnline";
const Body = () => {
    // Local storage Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    const [filterData,setFilterData]=useState([]);
    const [searchText,setSearchText]=useState("");
        useEffect(() => {
      fetchData();
    },[]);
  
    const fetchData = async () => {
      const data = await fetch(CARD_LIST_API);
        const json = await data.json();
       
       
            setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
      
    }
   
    const isOnline=useOnline();
  
  if(isOnline==false){
    return <h1> check your internet connection</h1>
  }

    return listOfRestaurants.length===0? <Shimmer/>: (
      <div className="body">
        <div className="search-container">
          <input type="text" 
          placeholder="Search Restaurant"
          id="textInput"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);

          }} />
          
          <button className="search-btn" 
          onClick={()=>{
            const filteredRestaurent=listOfRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )

          setFilterData(filteredRestaurent);
         
         
          }}>Search</button>

          <button className="top-restaurent" onClick={()=>{
            console.log("button cliced top");
            const filterList = listOfRestaurants.filter(
                (res)=> {
                    return res.info.avgRating > 4.0
                }
            )
          setFilterData(filterList);
          }}> Top Restaurant</button>
        </div>
        <div className="res-container">
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {filterData.map((restaurant) => (
           
         <Link   key={restaurant?.info?.id} to={"/restaurants/"+restaurant.info.id}>  <RestaurantCard  resData={restaurant} /></Link>  
  
          ))}
  
  
  
  
        </div>
      </div>
    );
  };

  export default Body;