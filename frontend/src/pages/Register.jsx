import React, { useState } from 'react';
import Logo2 from '../assets/logo/Logo2.png'
import background from '../assets/images/background.jpg'


const Register = () => {
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  return (
  <div className="flex h-screen">
    {/* Left Section */}
    <div className="w-1/2 bg-white flex flex-col justify-center items-center">
      <img src={Logo2} alt="Bridge Point Logo" className="w-32 mb-4" />
      <p className="text-center text-gray-700 text-lg md:text-xl px-3">
      Unlock your potential at BridgePoint A vibrant community of growth and endless opportunities!
      </p>
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
          <form className="mt-4">
          <div className="grid grid-cols-2 gap-4">
          
          <div>
          <label className="text-gray-600 text-base font-medium">Full Name</label>
            <input type="text"  placeholder="First Name" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />    
          </div>
          <div>
            <input type="text" placeholder="Last Name" className="mt-7 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>   
          </div>

         
          <div>
          <label className="text-gray-600 text-base font-medium">Mobile Number</label>
            <input type="tel" placeholder="+94" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>
          </div>

        
          <div>
          <label className="text-gray-600 text-base font-medium">email</label>
            <input type="email" placeholder="ex: ict21067@std.uwu.ac.lk" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>
          </div>

         
          <div>
          <label className="text-gray-600 text-base font-medium">Password</label>
            <input type="password" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>
          </div>

         
          <div>
          <label className="text-gray-600 text-base font-medium">Confirm Password</label>
            <input type="password" className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"/>
          </div>
        </div>

        
        <div className="flex flex-col mt-4">
  <div className="flex justify-between items-center">
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Upload Student Verification
      </label>
      <span className="text-sm text-black-200">Student ID or other document</span>
    </div>
    <div className="relative">
      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
      <div className="flex items-center justify-center px-6 py-2 mr-28 border border-gray-500 rounded-lg bg-gray-100 text-gray-800 cursor-pointer">
        <span>upload</span>
      </div>
    </div>
  </div>
</div>

   
        <button type="submit" className="w-full mt-6 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
          Register
        </button>
      </form>
          
        </div>
        <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        <img src={background} alt="background image" className="h-full w-full object-cover opacity-70"/>
</div>
</div>

       )
       
}

export default Register
