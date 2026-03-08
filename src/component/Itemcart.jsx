import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Itemcart() {
    const [data, setData] = useState({
        user: '',
        email: '',
        phone: '',
        pin: '',
        state: '',
        city: ''
    })
    const [error, setError]=useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {

        setData({...data, [e.target.name]: e.target.value });
    };
    
    const validate = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!data.user || !data.email || !data.phone || !data.city || !data.state|| !data.pin)
      return "All fields are required";

    if (!emailRegex.test(data.email))
      return "Invalid email";

    if (!phoneRegex.test(data.phone))
      return "Phone must be 10 digits";

    return "";
  };

    const handlesubmit = (e) => {
        e.preventDefault();


        const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    }

    return (
        <>
          <form
  onSubmit={handlesubmit}
  className="max-w-md mx-auto p-6 border rounded-lg space-y-4"
>
  <h2 className="text-xl font-bold">Shipping Address</h2>

  <input
    type="text"
    name="user"
    placeholder="Full Name"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  />

  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  />

  <input
    type="text"
    name="pin"
    placeholder="PIN Code"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  />

  <input
    type="text"
    name="city"
    placeholder="City"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  />

  <select
    name="state"
    className="w-full border p-2 rounded"
    onChange={handleChange}
  >
    <option>Select State</option>
    <option>UP</option>
    <option>Bihar</option>
    <option>MP</option>
  </select>

  {error && <p className="text-red-500">{error}</p>}
  

  <button className="bg-green-600 text-white px-4 py-2 rounded w-full" onClick={()=>navigate("/Payment")} >
    Continue to Payment
  </button>
</form>
        </>
    )
}

export default Itemcart