import React from 'react';
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
							<button onClick={() => scrollTo('#tech')}>Tech</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#experience')}>Experience</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#projects')}>Projects</button>
						</div>
					</li>
					<li>
						<div className={styles.menuBtn}>
							<button onClick={() => scrollTo('#footer')}>Contact</button>
						</div>
					</li>
				</ul>
			</div>
			{/* TODO: fix dropdown */}
			<div className={styles.hideMenuIcon} />
		</React.Fragment>
	);
};

export default NavMenu;
