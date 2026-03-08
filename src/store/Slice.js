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
