import React, { useEffect, useState, Outlet } from 'react'
import axios from 'axios'
import { Carusel } from '../../components/Carusel/Carusel'
// import { Categories } from '../../components/Categories/Categories'
import { Search } from '../../components/Search/Search'
import "./Home.scss"
import { Container } from '../../components/container/Container'
// import { OuthorCard } from '../../components/OuthorCard/OuthorCard'
import { Routes, Route, NavLink, Link} from "react-router-dom"
import { Temuriylar } from "../Temuriylar/Temuriylar"
 
export const Home = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    axios
    .get('https://book-service-layer.herokuapp.com/author/genreId/4')
    .then( function (response){
      setData(response.data);
    }).catch(function (error){
      console.log(error);
    })
    
  }, []);

  return (
    <Container>
      <div className='home__page'>
      <Carusel/>
    <Search/>
<h3 className='home_page_text'>Asosiy kategoriyalar</h3>
    {/* <Categories/> */}
    <ul className='categories-list d-flex   justify-content-around p-2 bg-secondary nav_list'>
        <li>
            <Link className= "categories_link" to="/temuriylar">
            Temuriylar davri 
            </Link>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/jadid">
            Jadid adabiyoti 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/sovet">
            Sovet davri 
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive}) => isActive ? "isActive categories_link" : "categories_link" } to="/mustaqillik">
            Mustaqillik davri
            </NavLink>
        </li>
    </ul>
    {/* <div className='card-list'>
      {data.map((e) =>   <OuthorCard key={e.id} data={e} />)}
    </div> */}
  <Routes>
    <Route path='/temuriylar' element={<Temuriylar/>}/>
</Routes>
</div>
</Container>
  )
}
