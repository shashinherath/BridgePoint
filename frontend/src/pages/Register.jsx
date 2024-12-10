import React, { useState } from "react";
import Logo2 from "../assets/logo/Logo2.png";
import background from "../assets/images/Background.jpg";

const Register = () => {
  const [isServiceProvider, setIsServiceProvider] = useState(false);

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

        <form className="mt-4">
          {!isServiceProvider ? (
            // Student Registration Form
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 text-base font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mt-7 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+94"
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="ex: ict21067@std.uwu.ac.lk"
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-600 text-base font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-base font-medium">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State / Province"
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
                  placeholder="myname@example.com"
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
                    className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-base font-medium">
                    Confirm Password
                  </label>

                  <input
                    type="password"
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
