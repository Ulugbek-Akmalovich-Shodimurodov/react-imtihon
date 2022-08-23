import React from 'react'
import { Image } from '../Image/Image'
import "./Search.scss"
import SearchIcon from "../../assets/img/search_icon.png"

export const Search = () => {
  return (
    <div className='search__components'>
        <h3 className='search_title'>Search</h3>
    <form className='search_control'>
        <input className='search_inp' type="search" placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
        <button className='search__btn' type='submit'>
            <Image src={SearchIcon} className='search-btn__icon'></Image>
            <span className='search-btn__text'>Izlash</span>
        </button>
    </form>
    </div>
  )
}
