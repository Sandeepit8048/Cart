import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Itemcart from "./component/Itemcart";
import Payment from "./component/Payment";
import Cartproduct from "./component/Cartproduct";

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Itemcart" element={<Itemcart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Cartproduct" element={<Cartproduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
