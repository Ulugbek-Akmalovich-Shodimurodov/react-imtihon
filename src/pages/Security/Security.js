import "./Security.scss"
import React from 'react'
import { Helper } from "../../Components/Helper/Helper"
import { Button } from "../../Components/Btn/Button"

export const Security = () => {
  return (
    <div className="security_page">
        <div >
            <h2 className='profile_name'>Change Or Recover Your Password:</h2>
            <form className='profile__controller' >

                <label className='label' htmlFor="email">Email</label>
                <input className="controller__item page__input" HtmlId='email' type='text' placeholder='Email' />
                <Helper>Please enter your email address.</Helper>

                <label className='label' htmlFor="password">Current password</label>
                <input className="controller__item page__input" HtmlId='password' type='password' placeholder='Password' />
                <Helper>Please enter your password.</Helper>

                <div className='numbr_email'>
                    <div className='line_input'>
                        <label className='label' htmlFor="new_password1">Phone</label>
                        <input className="controller__item page__input" HtmlId='new_password1' type='password' placeholder='New password' />
                        <Helper>Please enter your new password.</Helper>
                    </div>

                    <div className='line_input'>
                        <label className='label' htmlFor="new_password2">Email</label>
                        <input className="controller__item page__input" HtmlId='new_password2' type='password' placeholder='New password' />
                        <Helper>Please enter your new password.</Helper>
                    </div>
                </div>

                <hr className='security_line' />

                <Button className="page__btn">Save Changes</Button>
            </form>
            </div>
        </div>
  )
}
