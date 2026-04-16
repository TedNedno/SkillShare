import React from 'react'
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

import { useContext } from 'react';
import { InformationContext } from '../contexts/informationContext';

const Profile = ({sid}) => {
    const data = useContext(InformationContext);
    const user= data.find(student => student.sid==sid);
  return (
    <section className="w-full h-2/5 flex bg-slate-900 text-green-600 ">
      <img className='text-[16rem] mx-auto mb-10 [text-shadow:0_0_5px_#facc15,0_0_5px_#eab308,0_0_5px_#ca8a04]' src={user.icon=="M"?boy:girl} />
    </section>
  )
}

export default Profile
