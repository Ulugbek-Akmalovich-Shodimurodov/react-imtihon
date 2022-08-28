import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Container } from '../../Components/container/Container'
import "./MyProfile.scss"
import {MyAccount} from "../MyAccount/MyAccount"
import {Security} from "../Security/Security"
import {Settings} from "../Settings/Settings"

export const MyProfile = () => {
  return (
    <Container>
    <nav className='my-profile__nav'>
        <ul className='my-profile__list'>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='my-account'>
                    <span>1</span>
                My Account
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='security'>
                    <span>2</span>
                Security
                </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "isActiveCategories my-profile__link" : "my-profile__link" } to='make-payment'>
                    <span>3</span>
                Make Payment
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
