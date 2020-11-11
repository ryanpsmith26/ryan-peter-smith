import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import NavMenu from './nav-menu';
import styles from './header.module.css';

const logo = require('../images/RPS/1.png');

const Header = ({ siteTitle }) => (
	<header>
		<div className={styles.logoDiv}>
			<Link to="/" className={styles.headerLogoLink}>
				<img src={logo} alt="logo" className={styles.logoImg} />
			</Link>
		</div>
		<div className={styles.menuDiv}>
			<NavMenu />
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
