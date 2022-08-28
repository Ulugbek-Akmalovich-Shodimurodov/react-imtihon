
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Categories.scss"

export const Categories = () => {
  return (
    <>
    <ul className='categories-list d-flex   justify-content-around p-2 bg-secondary nav_list'>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/temuriylar">
            Temuriylar davri 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/jadid">
            Jadid adabiyoti 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/sovet">
            Sovet davri 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/mustaqillik">
            Mustaqillik davri
            </NavLink>
        </li>
    </ul>

    
    </>


  )
}
