import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shipping() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name || !form.email || !form.phone || !form.city || !form.state)
      return "All fields are required";

    if (!emailRegex.test(form.email))
      return "Invalid email";

    if (!phoneRegex.test(form.phone))
      return "Phone must be 10 digits";

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    navigate("/Paymentslip", { state: form });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} className="input"/>
      <input name="email" placeholder="Email" onChange={handleChange} className="input"/>
      <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input"/>
      <input name="pincode" placeholder="PIN Code" onChange={handleChange} className="input"/>
      <input name="city" placeholder="City" onChange={handleChange} className="input"/>
      <input name="state" placeholder="State" onChange={handleChange} className="input"/>

      {error && <p className="text-red-500">{error}</p>}

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Continue
      </button>
    </form>
  );
}

export default Shipping;