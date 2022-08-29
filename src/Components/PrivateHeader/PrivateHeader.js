import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.min"
import { Link, NavLink } from 'react-router-dom'
import { Image } from '../Image/Image'
import UserImg from "../../assets/img/user_icon.png"
import "./PrivateHeader.scss"
import Logo from "../../assets/img/logo.png"
import { Container } from '../container/Container'
import { useTranslation } from 'react-i18next';

export const PrivateHeader = () => {

    const {t} = useTranslation();


  return (
    <Container className='privateheader'>
        <header>
        <ul className=' nav-nav_list d-flex position-sticky  top-0 w-100 justify-content-around p-2 bg-secondary nav_list '>
        <li className=''>
            <Link to="/home"  >
                <Image className="logo" src={Logo} />
            </Link>
        </li>
        <li className='list__item'>
            <NavLink className={({isActive}) => isActive ? "isActive link" : "link"} to="/home"  >
                {t("bosh")}
            </NavLink>
        </li>
        <li className='list__item'>
            <NavLink className={({isActive}) => isActive ? "isActive" : "link"} to="/books" >
                {t("kitoblar")}
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
            <ul className=" dropdown-menu">
                <li className="drop-down__link"><Link to='/my-profile' >{t("mening_prof")}</Link></li>
                <li className="drop-down__link"><Link to='/add-outhor' >{t("muallif_q")}</Link></li>
                <li className="drop-down__link"><Link to='/add-book' >{t("kitob_qushish")}</Link></li>
                <hr className='drop-down__line' />
                <li className="drop-down__link"><Link to='/signin'   >{t("chiqish")}</Link></li>
            </ul>
        </div>
        </li>
    </ul>
    <hr className='header_line' />
    </header>
    </Container>
  )
}
