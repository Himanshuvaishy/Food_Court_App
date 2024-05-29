import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props),

        this.state= {
            count:0,
            count1:1
        }
    }
   

    render() {
        const {count}=this.state
        return (
            <>
            <h1> count:{count}</h1>
            <button onClick={()=>{
                this.setState ({
                 count:this.state.count+1
                })
            }}
            
            >Count Increase</button>
          
            <h3> Name:{this.props.name}</h3>
            <p> Location:{this.props.location}</p>
            
            </>
        )
    
}
}
export default UserClass;