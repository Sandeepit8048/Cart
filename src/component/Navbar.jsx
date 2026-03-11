import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const selector = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-green-600 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <h1 className="font-bold text-xl text-center sm:text-left">
          EcoCheckout
        </h1>

        <div className="flex justify-center gap-6 text-sm sm:text-base">
          <Link to="/cart" className="hover:text-gray-200">
            Cart ({selector.length})
          </Link>

          <Link to="/shipping" className="hover:text-gray-200">
            Shipping
          </Link>

          <Link to="/payment" className="hover:text-gray-200">
            Payment
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;