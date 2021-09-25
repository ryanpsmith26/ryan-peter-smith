import React from 'react';
import Marquee from "react-fast-marquee";

import styles from './tech-section.module.css';

const TechSection = () => (
	<div id="tech">
		<h1 className={styles.sectionHeader}>-- Technology --</h1>
		<div className={styles.card} id="tech">
			<Marquee
				speed={40}
				gradientColor={[217, 217, 217]}
				gradientWidth={75}
			>
					<img src={require('../images/html.svg')} alt="HTML5 Logo" className={styles.techLogoSm} />
					<img src={require('../images/css.svg')} alt="CSS3 Logo" className={styles.techLogoSm} />
					<img src={require('../images/javascript.svg')} alt="JavaScript Logo" className={styles.techLogoMd} />
					<img src={require('../images/nodejs.svg')} alt="Node.js Logo" className={styles.techLogoXl} />
					<img src={require('../images/react7.svg')} alt="React Logo" className={styles.techLogoLg} />
					<img src={require('../images/redux.svg')} alt="Redux Logo" className={styles.techLogoMd} />
					<img src={require('../images/styled-components.svg')} alt="styled-components Logo" className={styles.techLogoLg} />
					<img src={require('../images/postgresql.svg')} alt="PostgreSQL Logo" className={styles.techLogoMd} />
					<img src={require('../images/firebase.svg')} alt="Firebase Logo" className={styles.techLogoMd} />
					<img src={require('../images/aws-lambda-1.svg')} alt="AWS Lambdas Logo" className={styles.techLogoSm} />
					<img src={require('../images/storybook.svg')} alt="Storybook Logo" className={styles.techLogoXs} />
					<img src={require('../images/vercel.svg')} alt="Vercel Logo" className={styles.techLogoXs} />
			</Marquee>
		</div>
	</div>
);

export default TechSection;
