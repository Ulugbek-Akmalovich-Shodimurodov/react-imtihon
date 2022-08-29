import React from 'react'
import { Image } from '../Image/Image'
import "./Search.scss"
import SearchIcon from "../../assets/img/search_icon.png"
import { useTranslation } from 'react-i18next';

export const Search = () => {
  const {t} = useTranslation();
  return (
    <div className='search__components'>
        <h3 className='search_title'>{t("qidiruv")}</h3>
    <form className='search_control'>
        <input className='search_inp' type="search" placeholder={t("qdiruv_placeholder")}/>
        <button className='search__btn' type='submit'>
            <Image src={SearchIcon} className='search-btn__icon'></Image>
            <span className='search-btn__text'>{t("qidiruv")}</span>
        </button>
    </form>
    </div>
  )
}
