import React from 'react';
import Typewriter from 'typewriter-effect';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import styles from './hero-section.module.css';

const HeroSection = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					desktop: file(relativePath: { eq: "outlier-wash-crop.jpeg" }) {
						childImageSharp {
							fluid(quality: 90, maxWidth: 1920) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			`}
			render={(data) => {
				const imageData = data.desktop.childImageSharp.fluid;
				return (
					<BackgroundImage
						Tag="section"
						className={styles.heroImg}
						fluid={imageData}
						backgroundColor={`#333`}
					>
						<div className={styles.heroTextDiv}>
						<h1>Ryan P. Smith</h1>
							<Typewriter
								options={{
									strings: [ 'Software Engineer', 'Maker', 'Home Brewer', 'Cook' ],
									autoStart: true,
									loop: true
								}}
							/>
						</div>
					</BackgroundImage>
				);
			}}
		/>
	);
};

export default HeroSection;
