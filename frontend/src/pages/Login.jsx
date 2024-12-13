import React from "react";
import Logo2 from "../assets/logo/Logo2.png";
import background from "../assets/images/Background.jpg";

function App() {
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

        <form>
          <div className="mb-4 mt-4">
            <label className="text-gray-600 text-base font-medium">
              Username
            </label>
            <input
              type="text"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Remember me</label>
          </div>

          <button className="w-full p-3 bg-orange-600 text-white text-base font-bold rounded-lg hover:bg-orange-700">
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
