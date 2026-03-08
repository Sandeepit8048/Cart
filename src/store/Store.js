import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './Slice'
import productsliceReducer from './Productslice'

const store = configureStore({    
     reducer:{
          
              item:itemReducer,
                productslice:productsliceReducer
     }
})

export default store
