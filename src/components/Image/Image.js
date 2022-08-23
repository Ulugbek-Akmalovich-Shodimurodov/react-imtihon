import React from 'react'

export const Image = ({src, className}) => {
  return (
    <img className={`page__img ${className}`} src={src} alt="" />
  )
}
