   import { useState,useEffect } from "react";
   import { CARD_LIST_API } from "../utilis/constants";
   
const useRestaurantListCard= ()=>{
const [listOfRestaurants,setListOfRestaurant]=useState([]);
const [filterData,setFilterData]=useState([]);

    useEffect(() => {
  fetchData();
},[]);

const fetchData = async () => {
  const data = await fetch(CARD_LIST_API);
    const json = await data.json();
   
   
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
}

return [setFilterData,setFilterData]
}

export default useRestaurantListCard;
