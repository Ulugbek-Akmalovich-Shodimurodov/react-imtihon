import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './signup.scss';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';



export const SignUp = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const { setToken} = useAuth()
	const handleSubmit = (evt) => {
    evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/register', {
        "first_name": firstName.current.value,
        "last_name": lastName.current.value,
        "phone": phone.current.value,
        "email": email.current.value,
        "password": password.current.value
      })
			.then(function (response) {
        setToken(response.data);
				console.log(response.data);
				navigate("/")
			})
			.catch(function (error) {
				console.log(error);
			});
			
	};
	return (
		<div className='signup'>
			<div className='container'>
				<div className='signup__inner'>
					<h2 className='signup__title'>{t("ruyxatdan_utish")}</h2>
					<p className='signup__desc'>
						{t("account")}{' '}
						<Link className='signup__link' to='/signin'>
							{t("kirish")}
						</Link>
					</p>
					<form onSubmit={handleSubmit}>
						<input ref={firstName} type='text' className='input' placeholder='First name' />
						<input ref={lastName} type='text' className='input' placeholder='Last name' />
						<input ref={phone} type='text' maxLength={9} className='input' placeholder='Phone' />
						<input ref={email} type='email' className='input' placeholder='Email' />
						<input ref={password} type='password' className='input' placeholder='Password' />
						<button className='signup__btn' type='submit'>
							{t("keyingi")}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
