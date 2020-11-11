import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import useScrollPosition from '@react-hook/window-scroll';

import NavMenu from './nav-menu';
import styles from './header.module.css';

const Header = ({ siteTitle }) => {
	const scrollY = useScrollPosition(60);
	const headerVisible = scrollY > 375 ? styles.headerShown : styles.headerHidden;

	return (
		<header className={`${styles.header} ${headerVisible}`}>
			<div>
				<Link to="/">
					<img
						src={require('../images/logo/lightgray.png')}
						alt="logo"
						className={styles.logoImg}
						alt="logo"
					/>
				</Link>
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
