import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Cart() {

  const selector = useSelector((state)=> state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Cart Items: {selector.length}
      </h2>

      {selector.map((item)=>(
        <div key={item.id} className="border p-4 mb-4 rounded shadow">

          <img
            src={item.image}
            alt={item.product_name}
            className="h-24"
          />

          <div><b>ID:</b> {item.product_id}</div>
          <div><b>Name:</b> {item.product_name}</div>
          <div><b>Price:</b> ${item.product_price}</div>
          <div><b>Quantity:</b> {item.quantity}</div>

        </div>
      ))}

      <button
        className="bg-green-600 text-white px-6 py-2 rounded mt-4"
        onClick={()=>navigate("/Cartproduct")}
      >
        Proceed to Checkout
      </button>

    </div>
  );
}

export default Cart;