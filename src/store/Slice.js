<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit"



const initialState = {
   items: []

     
}






const addtocart = createSlice  ({
    name: 'cart',
    initialState,
    reducers:{
   
        addItem:(state, action )=>{
            state.items.push(action.payload)

            // localStorage.setItem("cart", JSON.stringify(state.items))
        }, 
        removeItem: (state, action)=>{
           const removecart = state.items.filter(item => item.id !== action.payload.id);

           state.items=removecart;

        //    localStorage.setItem('cart', JSON.stringify(removeItem))

        }, 
  
     

    }
})              

export const{addItem, removeItem,resetall}= addtocart.actions
export default addtocart.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}

const addtocart= createSlice({
    name:'item',
    initialState,

    reducers:{
        addcart:(state)=>{
             state.value +=1;

             
            }
        }
})

export  const {addcart} = addtocart.actions
export default addtocart.reducer
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
