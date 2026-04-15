import React from 'react'

const Button = ({name,color="green"}) => {
    const colorClasses = {
    green: "border-green-400 text-green-400",
    red: "border-red-400 text-red-400",
    blue: "border-blue-400 text-blue-400",
  };
  return (
    <button className={`px-4 py-2 mx-2 border-2 rounded-2xl text-xl ${colorClasses[color]} transform hover:scale-125 hover:bg-red-300 hover:text-slate-950  transition duration-300`}>
      {name}
    </button>
  )
}

export default Button
