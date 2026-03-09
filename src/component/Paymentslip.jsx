import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Paymentslip() {

  const location = useLocation();
  const navigate = useNavigate();
  const address = location.state;

  if (!address) {
    return (
      <div className="text-center p-6">
        <h2>No Address Found</h2>
        <button
          onClick={() => navigate("/Itemcart")}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto border rounded">
      <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>

      <h3 className="font-semibold">Shipping Address</h3>
      <p>{address.user}</p>
      <p>{address.email}</p>
      <p>{address.phone}</p>
      <p>{address.city}, {address.state}</p>
      <p>PIN: {address.pin}</p>

      <hr className="my-4"/>

      <h3 className="font-semibold">Order Summary</h3>
      <p>Subtotal: ₹1000</p>
      <p>Shipping: ₹50</p>
      <p className="font-bold">Total: ₹1050</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
        Place Order
      </button>
    </div>
  );
}

export default Paymentslip;