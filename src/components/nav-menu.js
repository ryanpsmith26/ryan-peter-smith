import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';

import styles from './nav-menu.module.css';

const NavMenu = () => {
	return (
		<React.Fragment>
			<div className={styles.hideFullMenu}>
				<ul>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#story')}>My Story</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#projects')}>Projects</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#experience')}>Experience</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#footer')}>Contact</button>
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
