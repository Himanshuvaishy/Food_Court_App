import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-4">I am Himanshu</h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                This is a food ordering App where you can find a variety of delicious meals!
            </p>
            <hr className="border-t border-gray-300 mb-6" />
            <div className="">
                <UserClass 
                    name="Himanshu" 
                    location=" lucknow" 
                />
            </div>
        </div>
    )
}
export default About