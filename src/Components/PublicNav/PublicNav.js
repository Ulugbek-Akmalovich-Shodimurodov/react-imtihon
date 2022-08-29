import React from 'react';
import { Link } from 'react-router-dom';
import "./publicnav.scss"
import { useTranslation } from 'react-i18next';
export const PublicNav = () => {

	const {t} = useTranslation();

	return (
		<nav className='header__nav'>
			<Link to='/signin'>
				<button className='header__in'>{t("kirish")}</button>
			</Link>
			<Link to="/signup">
				<button className='header__out'>{t("ruyxatdan_utish")}</button>
			</Link>
		</nav>
	);
};
