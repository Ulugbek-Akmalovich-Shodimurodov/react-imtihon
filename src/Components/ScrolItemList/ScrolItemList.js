import React from 'react'
import "./ScrolItemList.scss"

export const ScrolItemList = ({children}) => {
  return (
    <ul className='items-wrapper'>
        {children}
    </ul>
  )
}
