import React from 'react';
import { PublicHeader } from './Components/PublicHeader/PublicHeader';
import { PublicNav } from './Components/PublicNav/PublicNav';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import "./Components/PublicNav/publicnav.scss"

export const Public = () => {
	return (
		<div className='public'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<PublicHeader>
								<PublicNav />
							</PublicHeader>
							<h1 className='title'>Saytimizga Xush kelibsiz</h1>
						</>
					}
				/>
				<Route path='/signup' element={<SignUp />} />
				<Route path='/signin' element={<Login />} />
			</Routes>
		</div>
	);
};
