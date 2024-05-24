import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


import { useState,useEffect } from "react";
const Body = () => {
    // Local storage Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurant]=useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'

      );
  
      const json = await data.json();
      console.log(json);
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
     setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
      
    }
    if(listOfRestaurants.length===0){
      return <Shimmer/>
    }

    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button onClick={()=>{
            const filterList = listOfRestaurants.filter(
                (res)=> {
                    return res.info.avgRating > 4.3
                }
            )
            setListOfRestaurant(filterList);
          }}>Filter Top Restaurant</button>
        </div>
        <div className="res-container">
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {listOfRestaurants.map((restaurant) => (
           
            <RestaurantCard  key={restaurant?.info?.id} resData={restaurant} />
  
          ))}
  
  
  
  
        </div>
      </div>
    );
  };

  export default Body;