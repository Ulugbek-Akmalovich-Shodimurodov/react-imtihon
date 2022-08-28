import React, { useRef } from 'react'
import "./SignPages.scss";
import SignUpImg from "../../assets/img/signup.png";
import { Button } from '../../components/Btn/Button';
import { SignText } from '../../components/signText/SignText';
import { SignTitle } from '../../components/SignTitle/SignTitle';
import { Image } from '../../components/Image/Image';
import { Container } from '../../components/container/Container';
import axios from 'axios'
// import FormData from 'form-data'
import { useAuth } from "../../Hooks/useAuth";


export const Signup = () => {


  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  const { token, setToken } = useAuth();
  const handleFormSubmit = (evt)=>{
    evt.preventDefault();


    // const formData = new FormData();
    // const { first_name, last_name, phone, email, password} = evt.target.elements;
    // formData.append('first_name', first_name.value);
    // formData.append('last_name', last_name.value);
    // formData.append('phone', phone.value);
    // formData.append('email', email.value);
    // formData.append('password', password.value);
    console.log(first_name.current.value);
    console.log(password.current.value);
    console.log(email.current.value);
    console.log(phone.current.value);
    console.log(last_name.current.value);

  axios.post('https://book-service-layer.herokuapp.com/user/register', {
    first_name: first_name.current.value,
    last_name: last_name.current.value,
    phone: phone.current.value,
    email: email.current.value,
    password: password.current.value,
  })
  .then((res)=> {

    if(res.data){
      setToken(res.data)
    }
    console.log(token);
  })
  // .then((err)=> console.log(err))

  }

  return (
    <Container>
        <div className='sign__page'>
        <div className="sign__left">
            <Image src={SignUpImg}/>
        </div>
        <div className="sign__right">
            <SignTitle>Sign up</SignTitle>
            <SignText>Already have an account?</SignText>

            <form onSubmit={handleFormSubmit} className=' sign__controller' >
                <input ref={first_name} name='first_name' className='controller__item first__name' type="text" placeholder='First name'/>
                <input ref={last_name} name='last_name' className='controller__item last__name' type="text" placeholder='Last name'/>
                <input ref={phone} name='phone' className='controller__item phone__namber' type="number" placeholder='Phone number'/>
                <input ref={email} name='email' className='controller__item user__email' type="email" placeholder='Email'/>
                <input ref={password} name='password' className="controller__item user__password" type="password" placeholder="Password"></input>
                <Button type='submit'>Next step</Button>
            </form>
        </div>
    </div>
  </Container>
  )
}
