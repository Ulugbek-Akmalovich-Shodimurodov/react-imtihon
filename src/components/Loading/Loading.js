import React from 'react'
import "./Loading.css"

export const Loading = () => {
  return (
    <div className="loading_comp">
        <div className='center'>
            <div className='ring'></div>
            <span className='loading__text'>Loading...</span>
        </div>
    </div>
  )
}
