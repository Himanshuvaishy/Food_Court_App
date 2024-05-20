
import React from "react";
import ReactDOM from "react-dom/client";

// React element ---> object==>Html element by usingrendor mrethod





// Jxs
let Title= ()=>(
<>
<h1 id="heading">Hlo  react</h1>
</>
)

// react componenet

const Headingcomponent =  function (){
    return ( <div>
        <Title/>
        {Title()}
        <Title></Title>
        <h1> Namaste react</h1>
        <h2>Learning react is not tough if u have teacher like Akshay</h2>
    </div>
)}





const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent/>);



