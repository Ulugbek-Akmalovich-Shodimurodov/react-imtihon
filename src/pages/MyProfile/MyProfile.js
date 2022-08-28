import React from 'react'
import { Link } from 'react-router-dom'

export const MyProfile = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>
                My Account
                </Link>
            </li>
            <li>
                <Link to='/'>
                Security
                </Link>
            </li>
            <li>
                <Link to='/'>
                Make Payment
                </Link>
            </li>
        </ul>
    </nav>
  )
}
