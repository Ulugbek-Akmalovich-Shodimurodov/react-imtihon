import { Carusel } from '../../Components/Carusel/Carusel'
import "./Home.scss"
import { Container } from '../../Components/container/Container'
import { Routes, Route, NavLink, useNavigate} from "react-router-dom"
import { Temuriylar } from "../Temuriylar/Temuriylar"
import { Jadidlar } from '../Jadidlar/Jadidlar'
import { Sovet } from '../Sovet/Sovet'
import { Mustaqillik } from '../Mustaqillik/Mustaqillik'
import { Image } from '../../Components/Image/Image'
import "../../Components/Search/Search.scss"
import SearchIcon from "../../assets/img/search_icon.png"
import { SearchPage } from '../SearchPage/SearchPage'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
 
export const Home = () => {

  const {t} = useTranslation();

  const navigate = useNavigate()

  const [inpValOuthor, setInpValOuthor] = useState(''); 

  useEffect(()=>{
    if(inpValOuthor.trim().length){
      navigate('/home/search/' + inpValOuthor)
    } else {
      navigate('/');
    }

  }, [inpValOuthor])

  
  return (
    <Container>
      <div className='home__page'>
      <Carusel/>
    <div className='search__components'>
        <h3 className='search_title'>{t("qidiruv")}</h3>
    <form className='search_control'>
        <input onKeyUp={(e) =>{ setInpValOuthor(e.target.value)}}  className='search_inp' type="search" placeholder={t("qdiruv_placeholder")}/>
        <button className='search__btn' type='submit'>
            <Image src={SearchIcon} className='search-btn__icon'></Image>
            <span className='search-btn__text'>{t("qidiruv")} </span>
        </button>
    </form>
    </div>
<h3 className='home_page_text'>{t("bulimlar")}</h3>
    <ul className='categories-list d-flex   justify-content-around p-2 bg-secondary nav_list'>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" }  to="temuriylar">
            {t("temuriylar_davri")}
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="jadid">
            {t("jadid_adabiyoti")} 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="sovet">
            {t("sovet_davri")} 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="mustaqillik">
            {t("mustaqillik_davri")}
            </NavLink>
        </li>
    </ul>
    
  <Routes>
    <Route index element={<Temuriylar/>}/>
    <Route path='/temuriylar' element={<Temuriylar/>}/>
    <Route path='/jadid' element={<Jadidlar/>}/>
    <Route path='/sovet' element={<Sovet/>}/>
    <Route path='/mustaqillik' element={<Mustaqillik/>}/>
    <Route path='/search/:searchOuthor' element={<SearchPage/>}/>
</Routes>
</div>
</Container>
  )
}
