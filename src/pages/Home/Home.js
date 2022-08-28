import { Carusel } from '../../Components/Carusel/Carusel'
import { Search } from '../../Components/Search/Search'
import "./Home.scss"
import { Container } from '../../Components/container/Container'
import { Routes, Route, NavLink} from "react-router-dom"
import { Temuriylar } from "../Temuriylar/Temuriylar"
import { Jadidlar } from '../Jadidlar/Jadidlar'
import { Sovet } from '../Sovet/Sovet'
import { Mustaqillik } from '../Mustaqillik/Mustaqillik'
 
export const Home = () => {

  
  return (
    <Container>
      <div className='home__page'>
      <Carusel/>
    <Search/>
<h3 className='home_page_text'>Asosiy kategoriyalar</h3>
    <ul className='categories-list d-flex   justify-content-around p-2 bg-secondary nav_list'>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" }  to="temuriylar">
            Temuriylar davri 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="jadid">
            Jadid adabiyoti 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="sovet">
            Sovet davri 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="mustaqillik">
            Mustaqillik davri
            </NavLink>
        </li>
    </ul>
    
  <Routes>
    <Route index element={<Temuriylar/>}/>
    <Route path='/temuriylar' element={<Temuriylar/>}/>
    <Route path='/jadid' element={<Jadidlar/>}/>
    <Route path='/sovet' element={<Sovet/>}/>
    <Route path='/mustaqillik' element={<Mustaqillik/>}/>
</Routes>
</div>
</Container>
  )
}
