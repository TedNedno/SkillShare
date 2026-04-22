import React from 'react'
import close from '../assets/close.png'

const Register = ({onClick}) => {
    
  return (
    <div className="min-h-screen w-screen fixed top-0 left-0 bg-gray-50 flex items-center justify-center">
        <img src={close} 
                alt="Close" 
                className="absolute top-2 left-0 w-10 h-10"
                onClick={onClick}
        />
  <form className="h-160 overflow-y-auto w-full max-w-sm p-5 bg-white rounded-xl shadow space-y-4">
    
    <h1 className="text-xl font-semibold text-gray-900 text-center">Register</h1>

    <div>
      <label className="text-sm text-gray-700 mb-1 block">Full Name</label>
      <input type="text" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>

    <div>
      <label className="text-sm text-gray-700 mb-1 block">Email</label>
      <input type="email" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>

   <div>
      <label className="text-sm text-gray-700 mb-1 block">City</label>
      <input type="text" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <div>
      <label className="text-sm text-gray-700 mb-1 block">Password</label>
      <input type="Password" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <div>
      <label className="text-sm text-gray-700 mb-1 block">Age</label>
      <input type="number" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <div>
      <label className="text-sm text-gray-700 mb-1 block">Skills</label>
      <input type="text" placeholder="Skill1,Skill2,Skill3..." className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <div>
      <label className="text-sm text-gray-700 mb-1 block">Interest</label>
      <input type="text" className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <div>
      <label className="text-sm text-gray-700 mb-1 block">Description</label>
      <textarea className="w-full h-12 px-4 text-base border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
    </div>
    <button className="w-full h-12 bg-blue-500 text-white text-base font-medium rounded-lg active:scale-95 transition">
      Submit
    </button>

  </form>
</div>
  )
}

export default Register
