import React,{useState} from 'react'
import Profile from './components/Profile'
import UserInfo from './components/UserInfo'

import Info from './Info/information.json'
import { InformationContext } from './contexts/informationContext'
import Swipe from './components/Swipe'
import icon from "./assets/burger-bar.png"

const App = () => {
  const [sid, setSid] = useState(() => Math.floor(Math.random() * 10) + 1);


  const nextSid = () => {
    setSid((prev) => (prev < 10 ? prev + 1 : 1));
  };

  const prevSid = () => {
    setSid((prev) => (prev > 1 ? prev - 1 : 10));
  };

 

  return (
    <div className='bg-slate-900 w-full min-h-screen h-full'>
      <InformationContext.Provider value={Info}>
        <Profile sid={sid} />
        <UserInfo sid={sid} />
        <Swipe name=">" align="right-0" onClick={nextSid}/>
        <Swipe name="<" align="left-0" onClick={prevSid} />

        <nav>
          <img 
            src={icon} 
            alt="more"
            className='absolute top-0 right-2 w-10 h-10 cursor-pointer'
          />
        </nav>
      </InformationContext.Provider>
    </div>
  );
};

export default App;