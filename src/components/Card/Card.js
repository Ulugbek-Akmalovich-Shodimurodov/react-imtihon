import React from 'react'
import "./Card.scss"
import {Image} from "../Image/Image";

export const Card = ({ data}) => {
  return (
    <div className='card-list'>
        <li className="card">
            <Image src={`https://book-service-layer.herokuapp.com/book/`+data.image} className='card-img'/>
            <h5 className='card-title'>{data.title}</h5>
            <p className='book-card-text'>{data.year} yil</p>
            <p className='book-card-text'>{data.price} $</p>
        </li>
    </div>
  )
}
