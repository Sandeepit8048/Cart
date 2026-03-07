import { useState } from 'react'

import './App.css'
// import Home from './component/Home'
import Product from './component/Product'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addtocart from './component/Addtocart'
import Paymentslip from './component/Paymentslip'
import Shipping from './component/Shipping'
import Productdetail from './component/Productdetail'



function App() {


  return (
    <>

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
         <Route path='/Product' element={<Product/>}/>
         <Route path='/' element={<Navbar/>}/>
         <Route path='/Addtocart' element={<Addtocart/>}/>
         <Route path='/Paymentslip' element={<Paymentslip/>} />
         <Route path='/Shipping' element={<Shipping/>}/>
         <Route path="/Productdetail" element={<Productdetail/>}/>
      </Routes>
      
   



          
      
    </>
  )
}

export default App
