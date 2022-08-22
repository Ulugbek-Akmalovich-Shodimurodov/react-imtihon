import React from 'react'
import "./Input.scss"

export const Input = ({type, placeholder, className, HtmlId}) => {
  return (
    <input className= {`controller__item  ${className}` } id={HtmlId} type={type} placeholder={placeholder}/>
  )
}
