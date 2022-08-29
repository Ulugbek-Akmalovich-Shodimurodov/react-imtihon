import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Container } from '../../Components/container/Container'
import "./MyProfile.scss"
import {MyAccount} from "../MyAccount/MyAccount"
import {Security} from "../Security/Security"
import {Settings} from "../Settings/Settings"
import { useTranslation } from 'react-i18next';

export const MyProfile = () => {
    const {t} = useTranslation();
  return (
    <Container>
    <nav className='my-profile__nav'>
        <ul className='my-profile__list'>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='my-account'>
                    <span>1</span>
                {t("mening_accountim")}
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='security'>
                    <span>2</span>
                {t("maxfiy")}
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='make-payment'>
                    <span>3</span>
                {t("sozlamalar")}
                </NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route index element={<MyAccount/>} />
        <Route path='/my-account' element={<MyAccount/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/make-payment' element={<Settings/>} />
    </Routes>
    </Container>
  )
}
