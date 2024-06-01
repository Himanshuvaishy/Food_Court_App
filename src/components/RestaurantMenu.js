
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    

    const { resId } = useParams();
    // console.log(resId);
    const resInfo= useRestaurantMenu(resId);
    //console.log(resInfo);

const [showIndex,setShowIndex]=useState(0);

   

    if (resInfo === null) return <Shimmer />;

      const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
      // console.log(cuisines);
        // console.log(name);
   //     console.log(resInfo);

    const {itemCards}=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
       
   // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);//console.log(itemCards);

const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c)=>{
   return   c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
})

//console.log(categories);



 return (
        <div className="text-center">
            <h3 className="font-bold my-4 text-2xl">{name}</h3>
            <p className="text-red-500 m-2 font-semibold">{cuisines} ,{costForTwoMessage}</p>
          { categories.map((category,index )=>{
            // controlled component
            return  <RestaurantCategory
             key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={ showIndex===index}
              setShowIndex={()=> setShowIndex(index === showIndex ?null :index)}
              currentindex={showIndex}
              index={index}
              />

          })  }
          
        </div>
    )
}

export default RestaurantMenu