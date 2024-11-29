import React from 'react'
import Logo from '../assets/logo/Logo.png'
import background from '../assets/images/background.jpg'

function App() {
  return (
    <div className="flex h-screen">
    {/* Left Section */}
    <div className="w-1/2 bg-white flex flex-col justify-center items-center">
      <img src={Logo} alt="Bridge Point Logo" className="w-32 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Welcome to BridgePoint</h1>
      <p className="text-center text-red-600 mb-6">
        Log in with your provided credentials to unlock a world of community connections and endless opportunities with BridgePoint!
      </p>

      <form className="w-2/3">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Username</label>
          <input type="text" className="w-full p-3 border rounded-lg focus:ring-orange-500" placeholder="Enter your username"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input type="password" className="w-full p-3 border rounded-lg focus:ring-orange-500" placeholder="Enter your password"/>
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Remember me</label>
        </div>

        <button className="w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          Log in
        </button>
      </form>
    </div>

    {/* Right Section */}
    <div className="w-1/2 bg-gray-800 flex justify-center items-center">
      <img src={background}  alt="Abstract Tech Background" className="h-full w-full object-cover opacity-70"/>
    </div>
  </div>
  )
}

export default App
