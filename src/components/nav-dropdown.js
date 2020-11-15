import React from 'react';
import NavbarDropdown from 'react-navbar-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';

import styles from './nav-dropdown.module.css';

const NavDropdown = () => {
	return (
		<NavbarDropdown>
			<NavbarDropdown.Toggle>
				<NavbarDropdown.Open>
					<FontAwesomeIcon icon={faBars} className={styles.menuIcon} fixedWidth size="2x" />
				</NavbarDropdown.Open>
				<NavbarDropdown.Close>
					<FontAwesomeIcon icon={faTimes} className={styles.menuIcon} fixedWidth size="2x" />
				</NavbarDropdown.Close>
			</NavbarDropdown.Toggle>
			<NavbarDropdown.CSSTransitionMenu className={styles.dropdownMenu} timeout={200}>
				<NavbarDropdown.Item className={styles.dropdownMenuItem} onClick={() => scrollTo('#story')}>
					<p className={styles.menuBtn}>My Story</p>
				</NavbarDropdown.Item>
				<NavbarDropdown.Item className={styles.dropdownMenuItem} onClick={() => scrollTo('#experience')}>
					<p className={styles.menuBtn}>Experience</p>
				</NavbarDropdown.Item>
				<NavbarDropdown.Item className={styles.dropdownMenuItem} onClick={() => scrollTo('#projects')}>
					<p className={styles.menuBtn}>Projects</p>
				</NavbarDropdown.Item>
				<NavbarDropdown.Item className={styles.dropdownMenuItem} onClick={() => scrollTo('#footer')}>
					<p className={styles.menuBtn}>Contact</p>
				</NavbarDropdown.Item>
			</NavbarDropdown.CSSTransitionMenu>
		</NavbarDropdown>
	);
};

export default NavDropdown;
