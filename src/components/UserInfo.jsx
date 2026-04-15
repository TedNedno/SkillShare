import React from 'react'
import { useContext } from 'react';
import { InformationContext } from '../contexts/informationContext';
import Button from './Button';

const UserInfo = ({sid}) => {
    const data = useContext(InformationContext);
    const user= data.find(student => student.sid==sid);
   
  return (
    <main className='w-full max-h-3/5 absolute bottom-0 bg-slate-900 flex flex-col px-2 text-slate-200'>
      <article className="my-1 text-5xl text-center">{user.Name},{user.age}</article>
      <article className="my-1 text-3xl">{user.description}</article>
      <article className=" text-xl">Skills I Know</article>
      <section>
        {
            user.skills.map((item,index)=>(
                <Button name={item} key={index} />
            ))
        
        }
      </section>
      <article className='text-xl'>Skills I am interested to learn</article>
      <section>
        <Button name={user.interest} />
      </section>
    </main>
  )
}

export default UserInfo
