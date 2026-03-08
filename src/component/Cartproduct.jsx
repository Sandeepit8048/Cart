import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cartproduct() {

  const navigate = useNavigate();

  const cart = useSelector((state) => state.productslice.items);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button
        onClick={() => navigate("/Itemcart")}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cartproduct;