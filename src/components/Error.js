import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
            <p className="mt-4 text-lg text-gray-800">
                Something went wrong.
            </p>
            <p className="mt-2 text-gray-600">
                {`${err.statusText}, status code is ${err.status}`}
            </p>
            {err.data && (
                <p className="mt-2 text-gray-500">
                    {err.data}
                </p>
            )}
            <button 
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.href = '/'}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default Error;
