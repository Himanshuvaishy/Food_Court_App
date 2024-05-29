import { useState } from "react";

const User= ({name,location})=>{
    const[count]=useState(0);
    const[count1]=useState(1);

return (
    <>
    <h1> count :{count}</h1>
    <h1> count1 :{count1}</h1>
    <h3>Name:{name}</h3>
    <p>Location:{location}</p>
    
    </>
)
}
export default User;