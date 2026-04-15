import React from 'react'

const Register = () => {
  return (
    <form className='h-full w-4/5 min-w-4/5 max-w-4/5 '>
      <label>
        Full Name :
      </label>
      <input type="text" name="name"/>
      <label>
        Email :
      </label>
      <input type="email" name="email"/> 
      <label>
        Age :
      </label>
      <input type="number" name="age" />
      <label>
        City :
      </label>
      <input type="text" name="city" />
      <label>
        Skills :
      </label>
      <input type="text" name="skills" placeholder="Dancing,Singing,..." />
      <label>
        Interest :
      </label>
      <input type="text" name="interest" placeholder="Coding" />
      <label>
        Descrition :
      </label>
      <textarea name="description" />
    </form>
  )
}

export default Register
