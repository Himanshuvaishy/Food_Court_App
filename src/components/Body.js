import RestaurantCard ,{withLabel}from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARD_LIST_API } from "../utilis/constants";

import { useState, useEffect } from "react";

import useOnline from "../utilis/useOnline";
const LabelCard=withLabel(RestaurantCard);
console.log(LabelCard);



const Body = () => {
  // Local storage Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_LIST_API);
    const json = await data.json();


    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


  }
  console.log(listOfRestaurants);
  //console.log(listOfRestaurants);
  //console.log(listOfRestaurants[0].info.aggregatedDiscountInfoV3?.header);
    
  const isOnline = useOnline();

  if (isOnline == false) {
    return <h1> check your internet connection</h1>
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body bg-[]">
      <div className="filter ">
        <div className="search-container  css px-4 py-2 border-l border-gray-300 rounded-md   shadow-md flex justify-center items-center">
          <input type="text"
           className = "input-body py-2 w-1/2 pr-5 rounded-l border-none font-semibold focus:ring  placeholder:text-gray-400  transition hover:bg-gray-200 border"
            placeholder="Search Restaurant "
            id="textInput"
            value={searchText}
            onChange={(e) => {
            setSearchText(e.target.value);
             

            }} />

          <button className="search-btn bg-blue-500 hover:transition hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-r mr-20 "
            onClick={() => {
              const filteredRestaurent = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilterData(filteredRestaurent);
              


            }}>Search</button>

          <button className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => {
            console.log("button cliced top");
            const filterList = listOfRestaurants.filter(
              (res) => {
                return res.info.avgRating > 4.3
              }
            )
            setFilterData(filterList);
          }}> Top Restaurant</button>

        </div>

        <div className="res-container flex  flex-wrap justify-center ">

          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

          {filterData.map((restaurant) => (
         
            <Link className="a mt-4"  key={restaurant?.info?.id} to={"/restaurants/" + restaurant.info.id}> 
            
            
            {restaurant.info.aggregatedDiscountInfoV3?.subHeader ?(<LabelCard info={restaurant.info}/>): (<RestaurantCard info={restaurant.info}/>)}
            
          
            
            
            
          
        </Link>) )}
           
          
        



        </div>
      </div>
    </div>
  );
};

export default Body;