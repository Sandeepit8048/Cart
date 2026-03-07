import { useState } from 'react'

import './App.css'
// import Home from './component/Home'
import Product from './component/Product'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addtocart from './component/Addtocart'



function App() {


  return (
    <>

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
         <Route path='/Product' element={<Product/>}/>
         <Route path='/' element={<Navbar/>}/>
         <Route path='/Addtocart' element={<Addtocart/>}/>
      </Routes>
      
   



          
      
    </>
  )
}

export default App
