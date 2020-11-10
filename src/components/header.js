import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Menu from './Menu';

const logo = require('../images/RPS/1.png');

const Header = ({ siteTitle }) => (
	<header style={styles.header}>
		<div style={styles.headerDiv}>
			<div style={styles.logoDiv}>
				<Link to="/" style={styles.headerLogoLink}>
					<img src={logo} alt="logo" style={styles.logo} />
				</Link>
			</div>
			<div style={styles.menuDiv}>
				<Menu />
			</div>
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

const styles = {
	header: {
		background: 'none'
		// marginBottom: `1.45rem`,
		// minHeight: 150
	},
	headerDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `2em`
		// border: '2px solid red'
	},
	logoDiv: {
		// margin: `0 auto`
	},
	logo: {
		width: 200,
		borderRadius: '5px',
		boxShadow:
			'0 2px 2px rgba(0, 0, 0, 0.125), 0 15px 15px rgba(0, 0, 0, 0.135), 0 30px 30px rgba(0, 0, 0, 0.145), 0 45px 45px rgba(0, 0, 0, 0.155)'
	},
	menuDiv: {
		alignSelf: 'center'
		// flexBasis: `400px`
		// border: `2px solid red`
	}
};
