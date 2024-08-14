import { Link } from "react-router-dom";
import profileimage from "../utilis/image.jpg";

const About = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-5xl font-extrabold text-center text-gray-700 mb-6">I am Himanshu</h1>
                <p className="text-xl text-gray-800 text-center mb-6">
                    Welcome to my food ordering app! Here, you'll find a variety of delicious meals crafted to satisfy your cravings. Dive in and explore the menu to discover your next favorite dish.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <img
                                src={profileimage}
                                alt="Himanshu"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I'm passionate about creating seamless and delightful experiences through code. Whether you're looking for a quick bite or a full-course meal, I've got you covered. Let's make your food journey exciting!
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/">
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300">
                            Explore Menu
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
