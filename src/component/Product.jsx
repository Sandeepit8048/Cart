import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/Slice'
function Product() {
    const [store , setStore] =useState([])

      useEffect(()=>{
         async function datafetch(){
            const res = await fetch('https://fakestoreapi.com/products')
             const data = await res.json();

             setStore(data);
         }
         datafetch();
        },[])
        
        console.log(store);

        const dispatch = useDispatch();

        const cartselector = useSelector((state)=> state.cart.items)

        

  return (
    <>

        <Navbar/>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6">

      {store.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">

          <img 
            src={item.image} 
            alt={item.title} 
            className="h-32 mx-auto object-contain"
          />
          <br />
          <hr />
          <div className="mt-4">
            <div><b>Id:</b> {item.id}</div>
            <div><b>Category:</b> {item.category}</div>
            <div><b>Price:</b> ${item.price}</div>
            <div><b>Title:</b> {item.title}</div>
          </div>
          <div className='mt-4 gap-1 grid '>
              {
             cartselector.find(cartitem => cartitem.id === item.id)?
            <button className='bg-green-300 p-2 mt-4' onClick={()=>{dispatch(removeItem(item))}} >Remove-item</button>
            :
            <button className='bg-green-300 p-2 mt-4' onClick={()=>{dispatch(addItem(item))}}>Add-to-cart</button>       
              }

          </div>
       </div>
          ))}

       </div>  
           </>
  )
}

export default Product