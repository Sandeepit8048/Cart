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

 
          </ol>
         </ul>

          
        
    </>
  )
}

export default Navbar