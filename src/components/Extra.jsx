import React,{useState} from 'react'
import close from '../assets/close.png'
import Login from './Login'
import Register from './Register'
const Extra = ({onClick}) => {
    const [loginPage,setLoginPage]=useState(false);
    const [registerPage,setRegisterPage]=useState(false);
    const handleLogin = ()=>{
        setLoginPage(prev=>!prev)
    }
    const removeLogin =()=>{
        setLoginPage(false);
    }
    const handleRegister=()=>{
      setRegisterPage(prev=>!prev)
    }
    const removeRegister=()=>{
      setRegisterPage(false)
    }
  return (
    <nav className='absolute top-0 right-0 w-screen h-screen bg-slate-100 text-gray-950'>
        <img src={close} 
        alt="Close" 
        className="absolute top-2 left-0 w-10 h-10"
        onClick={onClick}
        />
      <ul className='flex flex-col list-none gap-3 mt-28 pl-10 text-3xl'>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 "
        onClick={handleLogin}
        >Login</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 "
        onClick={handleRegister}>Register</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">About Us</li>
        <li className="border-2 border-amber-400 w-4/5 rounded-md text-center h-16 ">User Information</li>
      </ul>
      {loginPage && <Login onClick={removeLogin}/>}
      {registerPage && <Register onClick={removeRegister}/>}
    </nav>
  )
}

export default Extra
