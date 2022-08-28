import React from 'react'
import "./MyAccount.scss"
import { Helper } from '../../Components/Helper/Helper'
import { Button } from '../../Components/Btn/Button'
import userImgIcon from "../../assets//img/img_plus_icon.png"
import UserImg from "../../assets/img/project_search.png"

export const MyAccount = () => {
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
            <h2 className='profile_name'>My profile</h2>
            <form className='profile__controller' >

                <label className='label' htmlFor="first_name">First Name</label>
                <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder='First name' />
                <Helper>Please enter your first name.</Helper>

                <label className='label' htmlFor="first_name">Last Name</label>
                <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder='First name' />
                <Helper>Please enter your last name.</Helper>

                <div className='number_email'>
                    <div className='line_input'>
                        <label className='label' htmlFor="first_name">Phone</label>
                        <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder='First name' />
                        <Helper>Please enter your phone number.</Helper>
                    </div>

                    <div className='line_input'>
                        <label className='label' htmlFor="first_name">Email</label>
                        <input className="controller__item settings-page__input" HtmlId='first_name' type='text' placeholder='First name' />
                        <Helper>Please enter your email address.</Helper>
                    </div>
                </div>

                <hr className='line' />

                <Button className="profile-page__btn">Save Changes</Button>
            </form>
        </div>
    </div>
  )
}
