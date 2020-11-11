import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import useScrollPosition from '@react-hook/window-scroll';

import NavMenu from './nav-menu';
import styles from './header.module.css';

const Header = ({ siteTitle }) => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollY = useScrollPosition(60);
	const headerVisible = scrollY > 375 ? styles.headerShown : styles.headerHidden;

	return (
		<header className={`${styles.header} ${headerVisible}`}>
			<div>
				<button type="button" onClick={scrollTop} className={styles.logoBtn}>
					<img
						src={require('../images/logo/lightgray.png')}
						alt="logo"
						className={styles.logoImg}
						alt="logo"
					/>
				</button>
			</div>
			<div className={styles.menuDiv}>
				<NavMenu />
			</div>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
