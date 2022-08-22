import React from 'react'
import "./SignPages.scss";
import SignUpImg from "../../assets/img/signup.png";
import { Button } from '../../components/Btn/Button';
import { Input } from '../../components/Input/Input';
import { SignText } from '../../components/signText/SignText';
import { SignTitle } from '../../components/SignTitle/SignTitle';
import { Image } from '../../components/Image/Image';


export const Signup = () => {
  return (
    <div className='sign__page'>
        <div className="sign__left">
            <Image src={SignUpImg}/>
        </div>
        <div className="sign__right">
            <SignTitle>Sign up</SignTitle>
            <SignText>Already have an account?</SignText>
            <form className='sign__controller' >
                <Input className='first__name' type="text" placeholder='First name'/>
                <Input className='last__name' type="text" placeholder='Last name'/>
                <Input className='phone__namber' type="number" placeholder='Phone number'/>
                <Input className='user__email' type="email" placeholder='Email'/>
                <Input className="user__password" type="password" placeholder="Password"></Input>
                <Button>Next step</Button>
            </form>
        </div>
    </div>
  )
}
