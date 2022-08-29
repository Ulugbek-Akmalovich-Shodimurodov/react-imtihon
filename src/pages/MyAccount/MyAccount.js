import React from 'react'
import "./MyAccount.scss"
import { Helper } from '../../Components/Helper/Helper'
import { Button } from '../../Components/Btn/Button'
import userImgIcon from "../../assets//img/img_plus_icon.png"
import UserImg from "../../assets/img/project_search.png"
import { useTranslation } from 'react-i18next';

export const MyAccount = () => {
    const {t} = useTranslation();
  return (
    <div className='profile__page'>
        <div className="profile__left">
            <img className='user__img' src={UserImg} alt="user" />
            <form >
                <label  htmlFor="user_icon"><img className='img_input' src={userImgIcon} alt="" /></label>
                <input id='user_icon' type="file" />
            </form>
        </div>
        <div className="user__data">
            <h2 className='profile_name'>{t("mening_prof")}</h2>
            <form className='profile__controller' >

                <label className='label' htmlFor="first_name">{t("ism")}</label>
                <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder={t("ism")} />
                <Helper>{t("ism_kirit")}</Helper>

                <label className='label' htmlFor="first_name">{t("familiya")}</label>
                <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder={t("familiya")} />
                <Helper>{t("fam_kirit")}</Helper>

                <div className='number_email'>
                    <div className='line_input'>
                        <label className='label' htmlFor="phone">{t('telefon')}</label>
                        <input className="controller__item settings-page__input" HtmlId='phone' type='text' placeholder={t('telefon')} />
                        <Helper>{t("tel_kirit")}</Helper>
                    </div>

                    <div className='line_input'>
                        <label className='label' htmlFor="emaill">{t("email")}</label>
                        <input className="controller__item settings-page__input" HtmlId='emaill' type='text' placeholder={t("email")} />
                        <Helper>{t("email_kirit")}</Helper>
                    </div>
                </div>

                <hr className='line' />

                <Button className="profile-page__btn">{t("save_ch")}</Button>
            </form>
        </div>
    </div>
  )
}
