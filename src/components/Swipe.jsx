import React from 'react'
import SwipeButton from './SwipeButton'
const Swipe = ({name,align,onClick}) => {
  return (
    <aside>
      <SwipeButton name={name} position="absolute top-1/2" align={align} color="red" onClick={onClick}/>
    </aside>
  )
}

export default Swipe
