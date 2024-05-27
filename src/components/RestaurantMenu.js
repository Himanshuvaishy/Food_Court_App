import { useState, useEffect } from "react"
import { MENU_API } from "../utilis/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams();
    // console.log(resId);



    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // console.log(cuisines);
     console.log(resInfo);

    const {itemCards}=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  // console.log (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1])
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