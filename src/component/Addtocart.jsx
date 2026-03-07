import React from 'react'
import { useSelector } from 'react-redux'

function Addtocart() {
    const selector= useSelector((state)=>state.cart.items)
    console.log(selector.length);
  return (
    <div>
        <ul>
        <ol>
        <li>Itme:{selector.length}</li>
        </ol>

        </ul>
    </div>
  )
}

export default Addtocart