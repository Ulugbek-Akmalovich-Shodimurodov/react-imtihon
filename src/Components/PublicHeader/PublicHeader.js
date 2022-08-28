import React from 'react';
import { Link } from 'react-router-dom';
import Badiiyat from '../../assets/Images/Badiiyat.svg';
import './Publicheader.scss';

export const PublicHeader = ({ children }) => {
	return (
		<div className='container'>
			<div className='header'>
				<Link to='/'>
					<img src={Badiiyat} alt='site logo' />
				</Link>
				{children}
			</div>
		</div>
	);
};
