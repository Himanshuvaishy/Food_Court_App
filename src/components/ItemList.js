 import { CDN_URL } from "../utilis/constants";
 const ItemList = ({ items }) => {
   // console.log(items);
    return (
        <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-6 border-b-2 text-left flex justify-between h-72"
          >
            <div className="w-8/12">
              <div className="py-2 font-semibold">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="w-4/12 p-4 ">
              <div className="absolute ">
                <button className="p-2 mx-16 mt-[137px] rounded-lg bg-black bg-opacity-75 text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}alt={item.card.info.name} className="w-full rounded-md  h-40 " />
            </div>
          </div>
        ))}
      </div>
    )
}


export default ItemList