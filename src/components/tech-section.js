import React from 'react'
import Marquee from 'react-fast-marquee'

import * as styles from './tech-section.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const TechSection = () => (
    <div id="tech">
        <h1 className={styles.sectionHeader}>-- Core Tech --</h1>
        <div className={styles.card} id="tech">
            <Marquee
                speed={75}
                gradientColor={[217, 217, 217]}
                gradientWidth={50}
            >
                <StaticImage
                    src="../images/html.svg"
                    alt="HTML5 Logo"
                    className={styles.techLogoSm}
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/css.svg"
                    alt="CSS3 Logo"
                    className={styles.techLogoSm}
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/javascript.svg"
                    alt="JavaScript Logo"
                    className={styles.techLogoMd}
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/nodejs.svg"
                    alt="Node.js Logo"
                    className={styles.techLogoXl}
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/react7.svg"
                    alt="React Logo"
                    className={styles.techLogoLg}
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/redux.svg"
                    alt="Redux Logo"
                    className={styles.techLogoMd}
                    placeholder="blurred"
                />
            </Marquee>
        </div>
    </div>
)

export default TechSection
