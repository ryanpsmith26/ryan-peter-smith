import React from 'react';

const Footer = () => {
	return (
		<footer style={styles.footer} id="footer">
			<p style={styles.footerText}>RPS Designs</p>
		</footer>
	);
};

export default Footer;

const styles = {
	footer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		minHeight: 150,
		marginTop: `2rem`,
		backgroundColor: '#bfbfbf'
	},
	footerText: {
		opacity: 0.3,
		color: '#fff'
	}
};
