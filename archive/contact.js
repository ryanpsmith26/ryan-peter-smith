import React from 'react';

import styles from './contact.module.css';

const Contact = () => {
	return (
		<div id="story">
			<h1 className={styles.sectionHeader}>-- Contact --</h1>
			<div className={styles.card} id="contact">
				<h2>Let's Connect!</h2>
				<p>Thanks for checking out the site!</p>
				<p>Please use links below to get in touch!</p>
			</div>
		</div>
	);
};

export default Contact;
