
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems, setShowIndex,currentindex,index}) => {
   
    const handleclick = ()=>{
        setShowIndex(currentindex === index ? null : index)
    }
    
    // console.log(data.title);
    return (
        <div>
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
                <div className=" flex justify-between cursor-pointer" onClick={handleclick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{index === currentindex ? "⏫" : "⏬"}</span>
                </div>
               { showItems   &&<ItemList items={data.itemCards} />}
            </div>
        </div>
    );
}


export default RestaurantCategory
