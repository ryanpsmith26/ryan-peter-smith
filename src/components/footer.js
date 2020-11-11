import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styles from './footer.module.css';

const Footer = () => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer id="footer">
			<div className={styles.scrollTopBtnDiv}>
				<button type="button" onClick={scrollTop} className={styles.scrollTopBtn}>
					<FontAwesomeIcon icon={faAngleUp} />
				</button>
			</div>
			<div className={styles.footerDiv}>
				<p className={styles.footerText}>RPS Designs</p>
			</div>
		</footer>
	);
};

export default Footer;
