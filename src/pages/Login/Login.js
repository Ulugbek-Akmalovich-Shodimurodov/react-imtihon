import React, { useRef } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth';
import { useTranslation } from 'react-i18next';

export const Login = () => {
	const {t} = useTranslation();
	const elEmail = useRef();
	const elPassword = useRef();
  const { setToken} = useAuth()
	const handleSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				console.log(response);
        setToken(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className='login'>
			<div className='container'>
				<div className='login__inner'>
					<h2 className='login__title'>{t("kirish")}</h2>
					<p className='login__desc'>
						{t("no_account")}{' '}
						<Link className='login__link' to='/signup'>
							{t("ruyxatdan_utish")}
						</Link>
					</p>
					<form onSubmit={handleSubmit}>
						<input
							ref={elEmail}
							placeholder={t("email")}
							type='email'
							className='input'
						/>
						<input
							ref={elPassword}
							placeholder={t("parol")}
							type='password'
							className='input'
						/>
						<button className='signup__btn' type='submit'>
							{t("keyingi")}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
