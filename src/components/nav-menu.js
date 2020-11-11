import React from 'react';
import { Link } from 'gatsby';

import styles from './nav-menu.module.css';

const NavMenu = () => {
	return (
		<div>
			<ul>
				<li>
					<div className={styles.menuBtn}>
						<Link to="/#story">My Story</Link>
					</div>
				</li>
				<li>
					<div className={styles.menuBtn}>
						<Link to="/projects">Projects</Link>
					</div>
				</li>
				<li>
					<div className={styles.menuBtn}>
						<Link to="/experience">Experience</Link>
					</div>
				</li>
				<li>
					<div className={styles.menuBtn}>
						<Link to="/#footer">Contact</Link>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default NavMenu;
