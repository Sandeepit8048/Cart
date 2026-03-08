import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">EcoCheckout</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Cart</Link>
        <Link to="/shipping" className="hover:text-gray-200">Shipping</Link>
        <Link to="/payment" className="hover:text-gray-200">Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;