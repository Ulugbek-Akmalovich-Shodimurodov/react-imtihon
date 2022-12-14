import React from 'react'
import "./OuthorCard.scss"
import {Image} from "../Image/Image";
import { Link } from 'react-router-dom';

export const OuthorCard = ({ data}) => {
  return (
    <div className='card-list'>
        <Link to={`/single/${data.id}`}>
          <li className="card">
              <Image src={`https://book-service-layer.herokuapp.com/`+data.image} className='card-img'/>
              <h5 className='card-title'>{data.first_name + " " + data.last_name}</h5>
              <p className='card-text'>{data.date_of_birth + "-" + data.date_of_death }</p>
          </li>
        </Link>
    </div>
  )
}