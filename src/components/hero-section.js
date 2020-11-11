import React from 'react';
import Typewriter from 'typewriter-effect';

import styles from './hero-section.module.css';

const HeroSection = () => {
	return (
		<React.Fragment>
			<img
				src={require('../images/outlier-wash-crop.jpeg')}
				className={styles.heroImg}
				alt="dev gazing out window"
			/>
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
		</React.Fragment>
	);
};

export default HeroSection;
