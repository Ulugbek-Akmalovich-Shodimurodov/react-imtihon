import React from 'react'
import "./AddBook.scss"
import { Button } from '../../Components/Btn/Button'
import { Image } from "../../Components/Image/Image"
import BookImg  from "../../assets/img/book_img.png"
import { Container } from '../../Components/container/Container'
import { useTranslation } from 'react-i18next';

export const AddBook = () => {

  const {t} = useTranslation();

  return (
    <Container>
    <div className='add-book_page'>
      <div className="add-book_page__left">
        <div className="image_preview">
        <Image className="add-book_img" src={BookImg} />
        </div>
        <h3 className='add-title'>Book Title</h3>
        <label className='add-book_img__src' htmlFor="tittle">{t("btn_rasm")}</label>
          <input className="controller__item add-book_page_img__input" Id='tittle' type='file' />
      </div>
      <div className='add-book_page_body'>
        <h1>{t("kitob_qushish")}</h1>
        <form className='add-book_control'>
          <input className="controller__item settings-page__input"  type='text' placeholder={t("k_nomi")} />

          <input className="controller__item settings-page__input"  type='number' placeholder={t("varaqlar")} />

          <input className="controller__item settings-page__input"  type='number' placeholder={t("ch_yili")} />

          <input className="controller__item settings-page__input"  type='text' placeholder={t("narxi")} />

          <select className='settings-page__input controller__item page__input' name="country" id="">
          <option className='select_option_item' value="1">{t("temuriylar_davri")}</option>
          <option className='select_option_item' value="2">{t("jadid_adabiyoti")}</option>
          <option className='select_option_item' value="3">{t('sovet_davri')}</option>
          <option className='select_option_item' value="4">{t("mustaqillik_davri")}</option>
        </select>

          <input className="controller__item settings-page__input"  type='text' placeholder={t("muallif")} />

          <textarea name="message" rows="5" cols="10" className="add-book_page__input" HtmlId='Price' type='' placeholder={t("k_malumot")} />

          <Button className="add-btn">{t("yaratish")}</Button>
        </form>
      </div>
    </div>
    </Container>
  )
}
