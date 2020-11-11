import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
				<a href="mailto: ryanpsmith01@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a href="https://www.linkedin.com/in/ryan-peter-smith/" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/ryanpsmith26" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://twitter.com/ryanpsmith26" target="_blank">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
