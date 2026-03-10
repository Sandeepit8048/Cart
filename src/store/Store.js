import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './Slice'
import productsliceReducer from './Productslice'

const store = configureStore({    
     reducer:{
          
              cart:itemReducer,
                productslice:productsliceReducer
     }
})

export default store
