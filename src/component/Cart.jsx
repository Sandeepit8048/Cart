import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from '../store/Slice'
import { fetchproduct } from '../store/Productslice'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productslice.items);

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);
  
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Cart Items</h2>

      {products.map((item) => (
        <div
          key={item.product_id}
          className="border rounded-lg p-4 mb-4 flex gap-4"
        >
          <img
            src={`https://${item.image}`}
            alt={item.product_name}
            className="w-24 h-24 object-cover"
          />

          <div>
            <h3 className="font-semibold">{item.product_name}</h3>
            <p>₹{item.product_price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        </div>
      ))}

      
        <button className="bg-green-600 text-white px-6 py-2 rounded mt-4" onClick={()=>{navigate("/Cartproduct")}} >
          Proceed to Checkout
        </button>
      
    </div>
  );
}

export default Cart