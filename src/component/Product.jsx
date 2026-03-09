import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store/Slice'
function Product() {
    const [store , setStore] =useState([])

      useEffect(()=>{
         async function datafetch(){
            const res = await fetch('http://localhost:3000/cartItems')
             const data = await res.json();

             setStore(data);
         }
         datafetch();
        },[])
        
        console.log(store);

        const dispatch = useDispatch();

        // const cartselector = useSelector((state)=> state.cart.addcart)

        

  return (
    <>
    <div className="sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-6 p-6">

      {store.map((item) => (
        <div key={item.id} className="sm:border p-4 rounded shadow">

          <img 
            src={item.image} 
            alt={item.title} 
            className="h-32 mx-auto object-contain"
          />
          <br />
          <hr />
          <div className="mt-4">
            <div><b>Id:</b> {item.product_id}</div>
            <div><b>Category:</b> {item.product_name}</div>
            <div><b>Price:</b> ${item.product_price}</div>
            <div><b>Title:</b> {item.quantity}</div>
          </div>
          <div className='mt-4 gap-1 grid '>
     
          <button className='bg-green-300 p-2 mt-4' onClick={()=>{dispatch(addcart(item))}}>Add-to-cart</button>       
            {/* <button className='bg-green-300 p-2 mt-4' onClick={()=>{dispatch(removeItem(item))}} >Remove-item</button> */}
            

          </div>
       </div>
          ))}

       </div>  
           </>
  )
}

export default Product