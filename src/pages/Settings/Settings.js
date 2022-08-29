import { Switch } from '@mui/material'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Button } from '../../Components/Btn/Button'
import { Helper } from '../../Components/Helper/Helper'
import "./Setttings.scss"
import { Container } from '../../Components/container/Container'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next';

export const Settings = () => {

  const {t} = useTranslation();

  return (
    <Container>
    <div className='settings_page'>
      
        <h2>{t("sozlamalar")}</h2>
        <form className='settings_control'>
        <label for=" language" className='label' htmlFor="email">{t("til")}</label>
        <select defaultValue={i18next.language} onChange={(evt) => {
          
          window.localStorage.getItem("value", evt.target.value)

          i18next.changeLanguage(evt.target.value)}}  className='page__input' name="language" id="language">
          <option className='select_option_item' value="uz">O'zbek</option>
          <option className='select_option_item' value="en">Ingliz</option>
          <option className='select_option_item' value="ru">Rus</option>
        </select>
        <Helper>{t("email_kirit")}</Helper>  
        </form>
        <div className="theme">
        <span>{t("mavzu")}</span>
        <div className=''>
        <Switch className='settings_switch' {...isLabelWithInternallyDisabledControl} defaultChecked={false} />
        </div>
        </div> 
        <hr className='settings_line'/>
        <Button className="settings-page__btn" type='submit'>{t("save_ch")}</Button>
      
    </div>
    </Container>
  )
}
