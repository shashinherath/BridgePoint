import React, { useState } from "react";
import axios from "axios";
import Logo2 from "../assets/logo/Logo2.png";
import background from "../assets/images/Background.jpg";

const Register = () => {
  const backendUrl = "http://localhost:5000";
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: "",
    companyname: "",
    address: "",
    city: "",
    state: "",
    providedservice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isServiceProvider) {
        await registerServiceProvider(formData);
      } else {
        await registerStudent(formData);
      }
      alert("Registration successful!");
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  const registerStudent = async (studentData) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/registerstudent`,
        studentData
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const registerServiceProvider = async (serviceProviderData) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/registerserviceprovider`,
        serviceProviderData
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:w-1/2 lg:flex-none lg:px-20 xl:px-24 overflow-y-auto">
        <div className="flex justify-center">
          <img src={Logo2} alt="Bridge Point Logo" className="w-52 mb-4" />
        </div>
        <p className="text-center text-gray-700 text-lg md:text-xl px-3">
          {isServiceProvider
            ? "Join BridgePoint as a seller and connect with a thriving community eager for your services. Register today and expand your opportunities!"
            : "Unlock your potential at BridgePoint - A vibrant community of growth and endless opportunities!"}
        </p>
        <div className="flex justify-center items-center mt-4">
          <span className="mr-2 text-orange-900 text-base font-medium">
            Student
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isServiceProvider}
              onChange={() => setIsServiceProvider(!isServiceProvider)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer">
              <div
                className={`w-6 h-6 bg-orange-600 rounded-full transition-all transform ${
                  isServiceProvider ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
          <span className="ml-2 text-orange-900 text-base font-medium">
            Service Provider
          </span>
        </div>
        <h2 className="text-center text-lg font-semibold mt-6">
          {isServiceProvider ? "Service Provider" : "Student"} Registration Form
        </h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          {!isServiceProvider ? (
            // Student Registration Form
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 text-base font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="mt-7 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobilenumber"
                  placeholder="+94"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: ict21067@std.uwu.ac.lk"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          ) : (
            // Service Provider Registration Form
            <>
              <div className="mb-4">
                <label className="text-gray-600 text-base font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-base font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      placeholder="State / Province"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-600 text-base font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="myname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-base font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobilenumber"
                    placeholder="+94"
                    value={formData.mobilenumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <label className="text-gray-600 text-base font-medium">
                      Provided Service
                    </label>
                    <select
                      id="service"
                      name="providedservice"
                      value={formData.providedservice}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option>Please Select</option>
                      <option>Food</option>
                      <option>Accommodation</option>
                      <option>Rides</option>
                      <option>Guide</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-base font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-base font-medium">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-orange-600 text-white text-base font-bold p-3 px-4 rounded-lg hover:bg-orange-700"
          >
            Register
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="relative hidden w-0 lg:w-1/2 lg:block flex-1">
        <img
          src={background}
          alt="background image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
