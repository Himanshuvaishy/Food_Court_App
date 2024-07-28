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
            <h1 className="text-3xl font-bold text-center mb-4">Count: {this.state.count}</h1>
            <button
                className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 mb-4"
                onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}
            >
                Count Increase
            </button>
            <h3 className="block text-xl font-semibold text-gray-800 mt-6 mb-2">Name: {this.props.name}</h3>
            <p className="block text-lg text-gray-600">Location: {this.props.location}</p>
        </>
        )
    
}
}
export default UserClass;