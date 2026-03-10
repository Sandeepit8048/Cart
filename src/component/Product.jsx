import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store/Slice'
import { fetchproduct } from '../store/Productslice'
// import {datacount} from './Cart'

function Product() {
  const [store, setStore] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproduct())
  }, [dispatch])

  const selector = useSelector((state) => state.productslice.items)

  console.log(selector.length)



  const cartselector = useSelector((state) => state.cart.value)

  //  console.log(cartselector.length);



  return (
    <>
      <div className="sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-6 p-6">

        {selector.map((item) => (
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

              <button className='bg-green-300 p-2 mt-4' onClick={() => dispatch(addcart(item))}>Add-to-cart</button>
              {/* <button className='bg-green-300 p-2 mt-4' onClick={()=>{dispatch(removeItem(item))}} >Remove-item</button> */}


            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Product