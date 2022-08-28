import React from 'react'
import "./Input.scss"

export const Input = ({type, placeholder, className, HtmlId}) => {
  const elInpValue = document.querySelector('.controller__item')
  return (
    <input ref={elInpValue.value} className= {`controller__item  ${className}` } id={HtmlId} type={type} placeholder={placeholder}/>
  )
}
