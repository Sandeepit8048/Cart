import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproduct = createAsyncThunk('product', async()=>{
    const res = await fetch('https://cart-2-0353.onrender.com/cartItems');        
    const data = await res.json();
    return data;
})

const initialState = {
     items:[],
     status: undefined,
     error:null
}
 
const Productslice = createSlice({
    name:'productslice',
    initialState,
     
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.fulfilled, (states, action)=>{
             states.status='succesfull',
             states.items= action.payload
        })
    }
    
})

export default Productslice.reducer