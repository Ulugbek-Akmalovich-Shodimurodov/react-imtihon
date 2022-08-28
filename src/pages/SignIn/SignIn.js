import { Button } from '../../components/Btn/Button'
import { useRef } from 'react'
import { Image } from "../../components/Image/Image.js"
import { SignText } from '../../components/signText/SignText'
import { SignTitle } from '../../components/SignTitle/SignTitle'
import SignInImg from "../../assets/img/Login_page_img.svg"
import "../SignUp/SignPages.scss"
import { Container } from '../../components/container/Container'
import axios from 'axios'
import { useAuth } from "../../Hooks/useAuth";

export const SignIn = () => {

  const elEmail = useRef();
  const elPassword = useRef();
  const { setToken } = useAuth();

  const handleFormSubmit = (evt)=>{
    evt.preventDefault();

  
    axios.post('https://book-service-layer.herokuapp.com/user/login', {
          email : elEmail.current.value ,
          password : elPassword.current.value,
        })
    .then(function (response) {
      console.log(response);
      if(response.data){
        setToken(response.data)
    }
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(elEmail.current.value);
    console.log(elPassword.current.value);
  }

  return (
  <Container>
    <div className='sign__page'>
          <div className="sign__left">
              <Image src={SignInImg}/>
          </div>
          <div className="sign__right">
              <SignTitle>Sign in</SignTitle>
              <SignText>Do not you have an account?</SignText>
              <form onSubmit={handleFormSubmit} className='sign__controller' >
                  <input ref={elEmail} className=' controller__item user__email' type="email" placeholder='Email'/>
                  <input ref={elPassword} className="controller__item user__password" type="password" placeholder="Password" />
                  <Button type="submit">Next step</Button>
              </form>
          </div>
    </div>
  </Container>
  )
}
