import { clearCart } from "../utilis/cartSlice";
import ItemList from "./ItemList";
import CartList from "./cartList";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {

    const cartItems = useSelector((store) => { return store.cart.items })
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (

        <div className=" m-2">
           

            <div className="w-8/12 ml-auto mr-auto">
                <button className="p-2  bg-black text-white rounded" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0 &&<h1 className="flex items-center justify-center font-bold mt-9">Your Cart Is Empty.Add Items To The Cart...🤞💕</h1>}

                <ItemList items={cartItems} />
                {/* {cartItems.map((menu,index)=>{return<CartList key={menu.id} index={index}info={menu} />})} */}
               

            </div>

        </div>

    )

}
export default Cart;