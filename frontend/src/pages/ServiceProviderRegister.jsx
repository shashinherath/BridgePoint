import React, { useState } from "react";
import Logo2 from '../assets/logo/Logo2.png'
import background from '../assets/images/background.jpg'

const ServiceProviderRegister = () => {
const [isServiceProvider, setIsServiceProvider] = useState(true);
  return (
    <div className="flex h-screen bg-gray-900">
    <div className="flex-1 overflow-y-auto bg-white p-8">
      <div className="text-center mb-6">
        <img src={Logo2} alt="Bridge Point Logo"  className="mx-auto w-32"/>
         <p className="text-center text-gray-700 text-lg md:text-xl px-3">
          Join BridgePoint as a seller and connect with a thriving community eager for your services. Register today and expand your opportunities!
        </p>
      </div>

      <div className="flex justify-center items-center mt-4">
      <span className="mr-2 text-black-700">Service Provider</span>
      <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" checked={isServiceProvider} onChange={() => setIsServiceProvider(!isServiceProvider)}/>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer bg-blue-400">
                <div className={`w-5 h-5 bg-blue-700 rounded-full transition-all transform ${isServiceProvider ? 'translate-x-5' : ''}`}></div>
              </div>
            </label>
            <span className="ml-2 text-black-700">Student</span>
          </div>
          <h2 className="text-center text-lg font-semibold mt-6">
          {isServiceProvider ? 'Service Provider' : 'Student'} Registration Form
          </h2>
          <form className="space-y-4">
          <label className="text-gray-600 text-lg font-medium">Company Name</label>
        <input type="text " className="block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>
        
        <label className="block text-gray-600 text-lg font-medium">Address</label>
        <input type="text" className=" w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>
        <label className="block text-[18px] text-gray-400">Street Address</label>
        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>


<div className="grid grid-cols-2 gap-4">
  <div>
<label className="block text-[18px] text-gray-400">Street Address Line 2</label>

        <input type="text"  placeholder="City" className="mt-2 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>
          </div>
          <div>
        
          <label className=" mt-8 block text-sm font-medium"></label>
          <input type="text" placeholder="State / Province" className="block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
           <div>

          
        <input type="text" placeholder="Postal/Zip Code" className="mt-7 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          
          <div>
          <label className="text-gray-600 text-lg font-medium">email</label>
          <input type="text" placeholder="myname@example.com" className=" block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>
          </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
  <div>
  <label className="text-gray-600 text-lg font-medium">Mobile Number</label>

        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 "/>
          </div>
          <div>
          <div className="mb-4">
          <label className="text-gray-600 text-lg font-medium">Provided Service</label>
          <select id="service"  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500">
       
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
  <label className="text-gray-600 text-lg font-medium">Password</label>

        <input type="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          <div>
          <label className="text-gray-600 text-lg font-medium">Confirm Password</label>

          <input type="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"/>
       
          </div>
          </div>

         <button type="submit" className="w-full mt-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
          Register
        </button>
      </form>
  
    </div>
 <img src={background}  className="hidden md:block md:w-1/2 bg-cover bg-center"/>
  </div>
  )
}

export default ServiceProviderRegister
