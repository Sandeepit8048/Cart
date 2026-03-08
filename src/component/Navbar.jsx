<<<<<<< HEAD
import React from 'react'
import Addtocart from './Addtocart'
import Product from './Product'
import { Link} from 'react-router-dom'


 
function Navbar() {
    
  
  
  return (
    <>
        <ul className='  bg-gray-300  text-2xl font-medium'>
          <ol className='flex justify-around '>
            <li>
              <Link to="/" >Home </Link>
            </li>
            <li><Link to="/Product" > Product</Link></li>
            {/* <li><Link to="/Addtocart" className='bg-red-500 boarder rounded shadow' >Add-cart:{0}</Link></li> */}
           <li> <Addtocart/> </li>
           {/* <li><Link to="/Paymentslip">PaymentShilpping</Link> </li> */}
           {/* <li><Link to="/Shipping">Shilpping</Link> </li> */}
           <li><Link to="/Productdetail">Cart</Link> </li>
            


 
          </ol>
         </ul>

          
        
    </>
  )
}

export default Navbar
=======
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">EcoCheckout</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Cart</Link>
        <Link to="/shipping" className="hover:text-gray-200">Shipping</Link>
        <Link to="/payment" className="hover:text-gray-200">Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
