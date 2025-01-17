import React from 'react'
import Typewriter from 'typewriter-effect'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './hero-section.module.css'

const HeroSection = () => {
    return (
        <section className={styles.heroImg}>
            <StaticImage
                src="../images/outlier-wash-crop.jpeg"
                alt="Hero image"
                className={styles.heroImg}
                placeholder="blurred"
                layout="fullWidth"
                quality={90}
            />
            <div className={styles.heroTextDiv}>
                <h1>Ryan P. Smith</h1>
                <Typewriter
                    options={{
                        strings: [
                            'Software Engineer',
                            'Maker',
                            'Home Brewer',
                            'Cook',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </section>
    )
}

export default HeroSection
