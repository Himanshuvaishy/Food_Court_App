import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilis/constants";
import { removeItems } from "../utilis/cartSlice";

const CartList = ({item,info,index}) => {
    console.log(info);
    const dispatch =useDispatch();
    const handleClick = (info,index)=>{
        dispatch(removeItems(info,index))
    }

   
   
   
   
    return (

        <div>

            <div className="menu-list">
                <div className="menu-item">
                    <h2 className="font-bold text-2xl font-900">{item.card.info.name}</h2>
                    <h2 className="font-bold text-2xl font-900">₹ { item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)}</h2>
                    <p className="font-normal text-lg font-600">
                        {item.card.info.description}
                    </p>
                </div>
                <div className=" object-cover w-[150px] h-[150px] m-5 items-center">
                    <img
                        className="menu-img"
                        src={CDN_URL + item.card.info.imageId}alt={item.card.info.name}
                    />
                    <button className="relative bg-black rounded-lg text-white p-2 w-[85px] text-center ml-8 bottom-7 " onClick={() => {
                        handleClick(info, index)

                    }}>Remove -</button>
                </div>
            </div>


        </div>


    )
}

export default CartList;