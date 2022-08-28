import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Image } from '../Image/Image'
import UserImg from "../../assets/img/user_icon.png"
import "./Header.scss"
import Logo from "../../assets/img/logo.png"
import { Container } from '../container/Container'

export const Header = () => {


    const publicnavigate = useNavigate();
    const handleLinkClick = ()=>{
        publicnavigate('/public')

    }

  return (
    <Container className='header'>
        <header>
        <ul className=' nav-nav_list d-flex position-sticky  top-0 w-100 justify-content-around p-2 bg-secondary nav_list '>
        <li className=''>
            <Link to="/home"  >
                <Image className="logo" src={Logo} />
            </Link>
        </li>
        <li className='list__item'>
            <NavLink className={({isActive}) => isActive ? "isActive link" : "link"} to="/home"  >
                Home
            </NavLink>
        </li>
        <li className='list__item'>
            <NavLink className={({isActive}) => isActive ? "isActive" : "link"} to="/books" >
                Books
            </NavLink>
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
                <li className="drop-down__link"><Link to='/my-profile' >My Pprofile</Link></li>
                <li className="drop-down__link"><Link to='/add-outhor' >Add Author</Link></li>
                <li className="drop-down__link"><Link to='/add-book' >Add Books</Link></li>
                <hr className='drop-down__line' />
                <li onClick={handleLinkClick} className="drop-down__link"><Link to='/public'   >Long Out</Link></li>
            </ul>
        </div>
        </li>
    </ul>
    <hr className='header_line' />
    </header>
    </Container>
  )
}
