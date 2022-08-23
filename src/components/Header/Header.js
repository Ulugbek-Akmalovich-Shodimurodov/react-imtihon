import React from 'react'
import { Link } from 'react-router-link'
import { Image } from '../Image/Image'
import UserImg from "../../assets/img/user_icon.png"
import "./Header.scss"
import Logo from "../../assets/img/logo.png"

export const Header = () => {
  return (
    <>
        <ul className=' d-flex justify-content-around p-2 bg-secondary nav_list '>
        <li className=''>
            <Link className='link' to="/home">
                <Image className="logo" src={Logo} />
            </Link>
        </li>
        <li className='list__item'>
            <Link className='link' to="/home">
                Home
            </Link>
        </li>
        <li className='list__item'>
            <Link className='link' to="/books">
                Books
            </Link>
        </li>
        <li className=''>
        <div class="btn-group">
            <span className="">
                <Image className="nav-user__icon" src={UserImg}/>
            </span>
            <button type="button" className="drop-down__btn btn  btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                <li><Link className="drop-down__link">Add Author</Link></li>
                <li><Link className="drop-down__link">Add Books</Link></li>
                <hr className='drop-down__line' />
                <li><Link className="drop-down__link">Long Out</Link></li>
            </ul>
        </div>
        </li>
    </ul>
    <hr className='header_line' />
    </>
  )
}
