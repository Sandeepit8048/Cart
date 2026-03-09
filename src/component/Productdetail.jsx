import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {addcart, addtocart} from '../store/Slice'

function Productdetail({cart = []}) {
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 50;
  const total = subtotal + shipping;
  
  // const dispatch = useDispatch()
//    dispatch(addtocart)
  return ( 
    <div className="p-6 max-w-md mx-auto border rounded">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <hr className="my-2"/>

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
        onClick={() => navigate("/Shipping")}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Productdetail;