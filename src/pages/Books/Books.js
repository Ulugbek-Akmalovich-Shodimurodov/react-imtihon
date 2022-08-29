import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import { Carusel } from '../../Components/Carusel/Carusel'
import { Search } from '../../Components/Search/Search'
import "./Books.scss"
import "../../Components/Categories/Categories.scss"
import { Container } from '../../Components/container/Container'
import { Route, Routes, NavLink } from 'react-router-dom'
import { BookTemuriylar } from '../BookTemuriylar/BookTemuriylar'
import { BookJadidlar } from "../BookJadidlar/BookJadidlar"
import { BookSovet } from "../BookSovet/BookSovet"
import { BookMustaqillik } from '../BookMustaqillik/BookMustaqillik'
import { useTranslation } from 'react-i18next';

export const Books = () => {

    const {t} = useTranslation();



  return (
    <Container>
      <div className='books__page'>
      <Carusel/>
    <Search/>
<h3 className='books_page_text'>{t("bulimlar")}</h3>
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
    <Route index element={<BookTemuriylar/>}/>
    <Route path='/temuriylar' element={<BookTemuriylar/>}/>
    <Route path='/jadid' element={<BookJadidlar/>}/>
    <Route path='/sovet' element={<BookSovet/>}/>
    <Route path='/mustaqillik' element={<BookMustaqillik/>}/>
</Routes>
</div>
</Container>
  )
}
