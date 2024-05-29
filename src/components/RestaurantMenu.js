
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilis/useRestaurantMenu";

const RestaurantMenu = () => {
    

    const { resId } = useParams();
     console.log(resId);
    const resInfo= useRestaurantMenu(resId);
    console.log(resInfo);



   

    if (resInfo === null) return <Shimmer />;

      const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
       console.log(cuisines);
         console.log(name);

    const {itemCards}=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
       console.log(itemCards);






    return (
        <div className="menu">
            <h3>{name}</h3>
            <p>{cuisines} ,{costForTwoMessage}</p>
           
           <ul>
           {itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} - {" Rs "} {item.card.info.defaultPrice/100 || item.card.info.price/100}
           </li>))}
            
           </ul>
        </div>
    )
}

export default RestaurantMenu