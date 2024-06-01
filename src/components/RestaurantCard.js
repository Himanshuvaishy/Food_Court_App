
import { CDN_URL } from "../utilis/constants";
import Shimmer from "./Shimmer";
const RestaurantCard = ({info}) => {
 //console.log(info);
//  if (!info) {
//   return <Shimmer/>; // or some fallback UI
// }
 

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = info;

  return (
    <div className="container mx-auto p-4">
     
      <div className="h-80 bg-gray-100 shadow-lg rounded-lg overflow-hidden m-4 p-6 w-80  transform transition-transform duration-300 hover:scale-105" >
  
        <img
          className="w-full h-32 object-cover rounded mb-2"


          src={CDN_URL + cloudinaryImageId}
          alt="img" 
         />
        

         <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="text-gray-700">{cuisines.join(', ')}</h4>
        <h4 className="text-gray-700 font-semibold" ><b>☆</b>{avgRating} stars</h4>
        <h4 className="text-gray-700">{costForTwo}</h4>
        <h4 className="text-gray-700">{sla.slaString}</h4> 
      </div>
    </div>
   
 
  );
 };
// console.log(info);

export const withLabel=(RestaurantCard)=>{
  //console.log(info);
  return (info)=>{
   
       return(
         <div>
            
           <label className="bg-black absolute text-white p-1 rounded-lg m-6 z-10 ">{info.info.aggregatedDiscountInfoV3?.subHeader}</label>
           {/* <label className="bg-black absolute text-white p-1 rounded-lg m-6 z-10 ">promoted</label> */}

           
           <RestaurantCard {...info} />
         </div>
       )

  }
 }


export default RestaurantCard;