import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

// steps we do while performing reduc toolkit

//1-- Install @reduxjs/toolkit and react-redux
//2-- Build  our store
//3-- connect our store to our app
//4-- Create a  (cart) slice 
//5-- dispatch(action)
//6-- selector

