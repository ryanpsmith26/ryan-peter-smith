import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './nav-menu.module.css';

const NavMenu = () => {
	return (
		<React.Fragment>
			<div className={styles.hideFullMenu}>
				<ul>
					<li>
						<div className={styles.menuBtn}>
							<Link to="/#story">My Story</Link>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<Link to="/">Projects</Link>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<Link to="/">Experience</Link>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<Link to="/#footer">Contact</Link>
						</div>
					</li>
				</ul>
			</div>
			<div className={styles.hideMenuIcon}>
				<FontAwesomeIcon icon={faBars} className={styles.menuIcon} size="2x" />
			</div>
		</React.Fragment>
	);
};

export default NavMenu;
