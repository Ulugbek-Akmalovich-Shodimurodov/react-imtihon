import { Button } from '../../components/Btn/Button'
import React from 'react'
import { Image } from "../../components/Image/Image.js"
import { Input } from '../../components/Input/Input'
import { SignText } from '../../components/signText/SignText'
import { SignTitle } from '../../components/SignTitle/SignTitle'
import SignInImg from "../../assets/img/Login_page_img.svg"
import "../SignUp/SignPages.scss"
export const SignIn = () => {
  return (
    <div className='sign__page'>
        <div className="sign__left">
            <Image src={SignInImg}/>
        </div>
        <div className="sign__right">
            <SignTitle>Sign in</SignTitle>
            <SignText>Do not you have an account?</SignText>
            <form className='sign__controller' >
                <Input className='user__email' type="email" placeholder='Email'/>
                <Input className="user__password" type="password" placeholder="Password"></Input>
                <Button>Next step</Button>
            </form>
        </div>
    </div>
  )
}
