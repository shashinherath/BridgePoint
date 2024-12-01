import React from 'react'
import LOGO from '../assets/logo/Logo.png'

function Register() {
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
         <div className="flex justify-center mb-0.5">
         <img src={LOGO} alt="Logo" className="w-16 h-16" />
         </div>
         <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          Registration
         </h2>
         <form className="space-y-4">
         <div>
          <label htmlFor="name" className='block text-gray-700 mb-2'>
            Name
          </label>
          <input type="text" id="name" placeholder="Enter Your Name" className='w-full p-3 border rounded-lg focus:ring-orange-500'/>
          </div>

          <div>
          <label htmlFor="name" className='block text-gray-700 mb-2'>
            Email
          </label>
          <input type="text" id="name" placeholder="example@gmail.com" className='w-full p-3 border rounded-lg focus:ring-orange-500'/>
          </div>

          <div>
          <label htmlFor="name" className='block text-gray-700 mb-2'>
            Phone Number
          </label>
          <input type="text" id="name" placeholder="Enter Your Phonenumber" className='w-full p-3 border rounded-lg focus:ring-orange-500'/>
          </div>

          <div>
          <label htmlFor="name" className='block text-gray-700 mb-2'>
        User Name
          </label>
          <input type="text" id="name" placeholder="Enter Your User Name" className='w-full p-3 border rounded-lg focus:ring-orange-500'/>
          </div>

          <div>
          <label htmlFor="name" className='block text-gray-700 mb-2'>
            Password
          </label>
          <input type="password" id="name" placeholder="Enter Your Password" className='w-full p-3 border rounded-lg focus:ring-orange-500'/>
          </div>
          <button type="submit" className='w-full p-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700'>Register Now</button>
         </form>
         
         

         </div>
    </div>
    </div>
  )
}

export default Register
