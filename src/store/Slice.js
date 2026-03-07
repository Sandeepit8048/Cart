import { createSlice } from "@reduxjs/toolkit"



const initialState = {
   items: localStorage.getItem('cart') ?JSON.parse(localStorage.getItem('cart')):[]

}






const addtocart = createSlice  ({
    name: 'cart',
    initialState,
    reducers:{
   
        addItem:(state, action )=>{
            state.items.push(action.payload)

            localStorage.setItem("cart", JSON.stringify(state.items))
        }, 
        removeItem: (state, action)=>{
           const removecart = state.items.filter(item => item.id !== action.payload.id);

           state.items=removecart;

           localStorage.setItem('cart', JSON.stringify(removeItem))



        }, 

     

    }
})              

export const{addItem, removeItem,resetall}= addtocart.actions
export default addtocart.reducer;