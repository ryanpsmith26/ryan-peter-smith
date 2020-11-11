import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import NavMenu from './nav-menu';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<Link to="/">
				<img src={require('../images/logo/1.png')} alt="logo" className={styles.logoImg} alt="logo" />
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
