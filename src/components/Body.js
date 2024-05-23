import RestaurantCard from "./RestaurantCard";
import resList from "../utilis/mockData"; 
import { useState } from "react";
const Body = () => {
    // Local storage Variable - super powerful variable
    const [listOfRestaurants,setListOfRestaurant]=useState(resList);
    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button onClick={()=>{
            const filterList = listOfRestaurants.filter(
                (res)=> {
                    return res.data.avgRating > 4.3
                }
            )
            setListOfRestaurant(filterList);
          }}>Filter Top Restaurant</button>
        </div>
        <div className="res-container">
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {listOfRestaurants.map((restaurant) => (
  
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
  
          ))}
  
  
  
  
        </div>
      </div>
    );
  };

  export default Body;