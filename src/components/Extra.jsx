import React from 'react'
import close from '../assets/close.png'
const Extra = ({onClick}) => {
  return (
    <nav className='absolute top-0 right-0 w-screen h-screen bg-slate-100 text-gray-950'>
        <img src={close} 
        alt="Close" 
        className="absolute top-2 left-0 w-10 h-10"
        onClick={onClick}
        />
      <ul className='flex flex-col list-none gap-3 mt-28 pl-10 text-3xl'>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">Login</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">Register</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">About Us</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">User Information</li>
      </ul>
    </nav>
  )
}

export default Extra
