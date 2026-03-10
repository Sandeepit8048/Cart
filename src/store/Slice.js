import { createSlice } from "@reduxjs/toolkit";



export function addcount(){
    // console.log(addcart.length)

    
} 


const initialState={
    items:[]
}



const addtocart= createSlice({
    name:'cart',
    initialState,

    reducers:{
        addcart:(state, action)=>{
            //  state.value +=1;
             state.items.push(action.payload)
                      
              
               console.log(action.payload)
            }
        }
})

export  const {addcart} = addtocart.actions
export default addtocart.reducer
