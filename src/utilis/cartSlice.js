import { createSlice } from "@reduxjs/toolkit"

const cartSlice =createSlice( 
    {

        name:'cart',
        initialState:{
            items:[]
        },
        reducers : {
            addItems:(state,action)=>{
                state.items.push(action.payload);
                
            }, 
            removeItem:(state,action)=>{
                // state.items.pop();
                // console.log(state.items)
                let p;
                state.items.forEach(function(currentValue, index){
                      if(action.payload.id===currentValue.id){
                        p=index;
                      }
                })
            state.items.splice(p, 1);
                
           
            },
            
            clearCart:(state,action)=>{
                state.items.length=0;
            }, 
        },
    
    }
)

export const { addItems,removeItems,clearCart}=cartSlice.actions;
console.log(cartSlice.actions);
console.log(cartSlice.reducer);
const cartReducer = cartSlice.reducer
export default  cartReducer; 