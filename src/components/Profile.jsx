import React from 'react'
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import kid from "../assets/kid.png"
import man from "../assets/man.png"
import people from "../assets/people.png"
import woman from "../assets/woman.png"

import { useContext } from 'react';
import { InformationContext } from '../contexts/informationContext';

const Profile = ({sid}) => {
    const data = useContext(InformationContext);
    const user= data.find(student => student.sid==sid);
    var icon;

    switch (user.icon){
      case "M":
        icon = boy
        break;
      case "F":
        icon = girl
        break;
      case "K":
        icon = kid
        break;
      case "Ma":
        icon = man
        break;
      case "P":
        icon = people
        break;
      case "W":
        icon = woman
        break;  
    }
  return (
    <section className="w-full h-2/5 flex bg-slate-900 text-green-600 ">
      <img className='text-[16rem] mx-auto mb-10 [text-shadow:0_0_5px_#facc15,0_0_5px_#eab308,0_0_5px_#ca8a04]' src={icon} />
    </section>
  )
}

export default Profile
