import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addcart,addcount } from "../store/Slice";

function Navbar() {
   const selector = useSelector((state)=>state.cart.items)
  return (
    <nav className="bg-green-600 text-white sm:px-6 sm:py-4 sm:flex sm:justify-between">
      <h1 className="font-bold text-lg">EcoCheckout</h1>

      <div className="sm:flex sm:gap-6 ">
        <Link to="/Cart" className="hover:text-gray-200">Cart:{selector.length}</Link>
        <Link to="/shipping" className="hover:text-gray-200">Shipping</Link>
        <Link to="/payment" className="hover:text-gray-200">Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;