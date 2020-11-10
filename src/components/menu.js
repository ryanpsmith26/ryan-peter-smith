import React from 'react';
import { Link } from 'gatsby';

import './layout.css';

const Menu = () => {
	return (
		<div>
			<ul style={styles.menuUL}>
				<li style={styles.menuLI}>
					<div className="menuBtn">
						<Link to="/#story">My Story</Link>
					</div>
				</li>
				<li style={styles.menuLI}>
					<div className="menuBtn">
						<Link to="/projects">Projects</Link>
					</div>
				</li>
				<li style={styles.menuLI}>
					<div className="menuBtn">
						<Link to="/experience">Experience</Link>
					</div>
				</li>
				<li style={styles.menuLI}>
					<div className="menuBtn">
						<Link to="/#footer">Contact</Link>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Menu;

const styles = {
	menuUL: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: `flex-end`,
		width: '100%'
	},
	menuLI: {
		listStyle: 'none'
	}
};
