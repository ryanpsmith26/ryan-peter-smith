import React from 'react';
import Typewriter from 'typewriter-effect';

import styles from './hero-area.module.css';

new Typewriter('#typewriter', {
	strings: [ 'Mechanical Engineer', 'Software Engineer' ],
	autoStart: true
});

const HeroArea = () => {
	return (
		<React.Fragment>
			<img
				src={require('../images/outlier-wash-crop.jpeg')}
				className={styles.heroImg}
				alt="dev gazing out window"
			/>
			<div className={styles.heroText}>
				<h1>Ryan P. Smith</h1>
				<Typewriter
					options={{
						strings: [ 'Software Engineer', 'Maker', 'Home Brewer', 'Cook', 'Coffee Roaster' ],
						autoStart: true,
						loop: true
					}}
				/>
			</div>
		</React.Fragment>
	);
};

export default HeroArea;
