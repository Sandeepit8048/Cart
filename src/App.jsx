<<<<<<< HEAD
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
=======
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Itemcart from "./component/Itemcart";
import Payment from "./component/Payment";
import Cartproduct from "./component/Cartproduct";

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Itemcart" element={<Itemcart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Cartproduct" element={<Cartproduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
