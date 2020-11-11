import React from 'react';

const Tech = () => {
	return (
		<div className={styles.tech}>
			<h2 className={styles.techHeader}>Tech Stack</h2>
			<div className={styles.techList}>
				<div className={styles.techItems}>
					<p>JavaScript</p>
				</div>
				<div className={styles.techItems}>
					<p>React</p>
				</div>
				<div className={styles.techItems}>
					<p>Redux</p>
				</div>
				<div className={styles.techItems}>
					<p>Node.js</p>
				</div>
				<div className={styles.techItems}>
					<p>Express</p>
				</div>
				<div className={styles.techItems}>
					<p>Sequelize ORM</p>
				</div>
				<div className={styles.techItems}>
					<p>PostgreSQL</p>
				</div>
				<div className={styles.techItems}>
					<p>HTML5</p>
				</div>
				<div className={styles.techItems}>
					<p>CSS3</p>
				</div>
				<div className={styles.techItems}>
					<p>ES6</p>
				</div>
				<div className={styles.techItems}>
					<p>Heroku</p>
				</div>
				<div className={styles.techItems}>
					<p>Netlify</p>
				</div>
				<div className={styles.techItems}>
					<p>Git</p>
				</div>
				<div className={styles.techItems}>
					<p>GitHub</p>
				</div>
			</div>
		</div>
	);
};

export default Tech;
