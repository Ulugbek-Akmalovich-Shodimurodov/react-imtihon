import React from 'react'
import "./AddBook.scss"
import { Button } from '../../Components/Btn/Button'
import { Image } from "../../Components/Image/Image"
import BookImg  from "../../assets/img/book_img.png"
import { Container } from '../../Components/container/Container'

export const AddBook = () => {


  return (
    <Container>
    <div className='add-book_page'>
      <div className="add-book_page__left">
        <div className="image_preview">
        <Image className="add-book_img" src={BookImg} />
        </div>
        <h3 className='add-title'>Book Title</h3>
        <label className='add-book_img__src' htmlFor="tittle">Upload cover</label>
          <input className="controller__item add-book_page_img__input" Id='tittle' type='file' />
      </div>
      <div className='add-book_page_body'>
        <h1>Add book</h1>
        <form className='add-book_control'>
          <input className="controller__item settings-page__input"  type='text' placeholder='Title' />

          <input className="controller__item settings-page__input"  type='number' placeholder='Pages' />

          <input className="controller__item settings-page__input"  type='number' placeholder='Year' />

          <input className="controller__item settings-page__input"  type='text' placeholder='Price' />

          <select className='settings-page__input controller__item page__input' name="country" id="">
          <option className='select_option_item' value="1">Temuriylar davri </option>
          <option className='select_option_item' value="2">Jadid adabiyoti </option>
          <option className='select_option_item' value="3">Sovet davri </option>
          <option className='select_option_item' value="4">Mustaqillik davri</option>
        </select>

          <input className="controller__item settings-page__input"  type='text' placeholder='Author' />

          <textarea name="message" rows="5" cols="10" className="add-book_page__input" HtmlId='Price' type='' placeholder='Book Data' />

          <Button className="add-btn">Create</Button>
        </form>
      </div>
    </div>
    </Container>
  )
}
