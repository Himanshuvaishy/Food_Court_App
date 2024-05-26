import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div className="error"> 
          {err.data}<br/>
          {`${err.statusText}, status code is ${err.status}`}
        </div>
    )
}

export default Error;