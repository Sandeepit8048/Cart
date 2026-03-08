import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import cartReducer from './Slice'
const store = configureStore({
     reducer :{
        cart:cartReducer
     } 
})

export default store;
=======
import itemReducer from './Slice'
import productsliceReducer from './Productslice'

const store = configureStore({    
     reducer:{
          
              item:itemReducer,
                productslice:productsliceReducer
     }
})

export default store
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
