import React from 'react'
import "./Button.scss"

export const Button = ({children, className}) => {
  return (
    <button className={`btn submit_btn ${className}`} type='submit'>{children}</button>
  )
}
