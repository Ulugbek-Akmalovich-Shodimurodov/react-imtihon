

import React from 'react'
import "./carusel.scss"
import { Image } from '../Image/Image'
import CaruselImg from "../../assets/img/Carusel_img.png"
import { useTranslation } from 'react-i18next';

export const Carusel = () => {
    const {t} = useTranslation();
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators carusel__line">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="line__item active text-bg-light" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="line__item text-bg-light" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="line__item text-bg-light" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <Image src={CaruselImg} className="d-block w-100  h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h2 className='direction__title'>{t("temuriylar")}</h2>
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
        <Image src={CaruselImg} className="d-block w-100 h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5 className='direction__title'>{t("sovet_davri_ad")}</h5>
        </div>
        </div>
        <div className="carousel-item">
        <Image src={CaruselImg} className="d-block w-100 h-50" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5 className='direction__title'>{t("mustaqillik_davri_ad")}</h5>
        </div>
        </div>
    </div>
</div>
  )
}
