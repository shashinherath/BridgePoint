import React from "react";
import Logo2 from "../assets/logo/Logo2.png";
import background from "../assets/images/Background.jpg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/login`,
        formData
      );

      const data = response.data;
      localStorage.setItem("userType", data.user.user_type);
      localStorage.setItem("providedservice", data.user.providedservice);
      localStorage.setItem("token", data.token);

      if (data.user.user_type === "student") {
        navigate("/");
      } else if (data.user.user_type === "serviceprovider") {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-start py-4 px-4 sm:px-6 lg:w-1/2 lg:flex-none lg:px-20 xl:px-24">
        <div className="flex justify-center">
          <img src={Logo2} alt="Bridge Point Logo" className="w-52" />
        </div>
        <h1 className="text-center text-4xl font-bold mb-2">
          Welcome to BridgePoint
        </h1>
        <p className="text-center text-gray-700 text-lg md:text-xl px-3">
          Log in with your provided credentials to unlock a world of community
          connections and endless opportunities with BridgePoint!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-4">
            <label className="text-gray-600 text-base font-medium">
              Username
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-600 text-base font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Remember me</label>
          </div>

          <button
            className="w-full p-3 bg-orange-600 text-white text-base font-bold rounded-lg hover:bg-orange-700"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="relative hidden w-0 lg:w-1/2 lg:block flex-1">
        <img
          src={background}
          alt="Abstract Tech Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default App;
