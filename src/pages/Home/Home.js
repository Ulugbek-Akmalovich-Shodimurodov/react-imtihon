import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import Carusel from "../../assets/img/Carusel_img.png"
import { Header } from '../../components/Header/Header'
import { Image } from '../../components/Image/Image'
import { Search } from '../../components/Search/Search'
import "./Home.scss"

export const Home = () => {
  return (<div className='home__page'>
  <Header/>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators carusel__line">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="line__item active text-bg-light" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="line__item text-bg-light" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="line__item text-bg-light" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <Image src={Carusel} className="d-block w-100  h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h2 className='direction__title'>Temuriylar davri adabiyoti</h2>
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
        <Image src={Carusel} className="d-block w-100 h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5 className='direction__title'>Sovet davri adabiyoti</h5>
        </div>
        </div>
        <div className="carousel-item">
        <Image src={Carusel} className="d-block w-100 h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5 className='direction__title'>Mustaqillik davri adabiyoti</h5>
        </div>
        </div>
    </div>
</div>
<Search/>
<h3 >Asosiy kategoriyalar</h3>
</div>
  )
}
