import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";
import 'core-js/stable';
import 'regenerator-runtime/runtime';



const About=lazy(()=> import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading......</h1>}>
          <About/>

        </Suspense>
      },
      {
        path:"/contact",
        element:<Contact/> 
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart", 
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
