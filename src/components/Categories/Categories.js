
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Categories.scss"
import { useTranslation } from 'react-i18next';

export const Categories = () => {
    const {t} = useTranslation();
  return (
    <>
    <ul className='categories-list d-flex   justify-content-around p-2 bg-secondary nav_list'>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/temuriylar">
            {t("temuriylar_davri")}
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/jadid">
            {t("jadid_adabiyoti")}  
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/sovet">
            {t("sovet_davri")} 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/mustaqillik">
            {t("mustaqillik_davri")}
            </NavLink>
        </li>
    </ul>

    
    </>


  )
}
