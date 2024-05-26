import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


import { useState,useEffect } from "react";
const Body = () => {
    // Local storage Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    const [filterData,setFilterData]=useState([]);
    const [searchText,setSearchText]=useState("");

    useEffect(() => {
      fetchData();
    },[]);
  
    const fetchData = async () => {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'

      );
  
      const json = await data.json();
      console.log(json);
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
     setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
      
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
           
            <RestaurantCard  key={restaurant?.info?.id} resData={restaurant} />
  
          ))}
  
  
  
  
        </div>
      </div>
    );
  };

  export default Body;