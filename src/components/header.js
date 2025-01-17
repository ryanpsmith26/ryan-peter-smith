import React from 'react'
import PropTypes from 'prop-types'
import useScrollPosition from '@react-hook/window-scroll'
import { StaticImage } from 'gatsby-plugin-image'

import NavMenu from './nav-menu'
import * as styles from './header.module.css'

const Header = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollY = useScrollPosition(60)
    const headerVisible =
        scrollY > 375 ? styles.headerShown : styles?.headerHidden

    return (
        <header className={`${styles.header} ${headerVisible}`}>
            <div>
                <button
                    type="button"
                    onClick={scrollTop}
                    className={styles.logoBtn}
                >
                    <StaticImage
                        src="../images/logo/lightgray.png"
                        alt="RPS Logo"
                        className={styles.logoImg}
                        placeholder="blurred"
                    />
                </button>
            </div>
            <div className={styles.menuDiv}>
                <NavMenu />
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
