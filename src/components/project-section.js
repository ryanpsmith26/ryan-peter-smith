import React from 'react';
import YouTube from 'react-youtube';

import styles from './project-section.module.css';

const ProjectSection = () => {
	return (
		<div id="projects">
			<h1 className={styles.sectionHeader}>-- Projects --</h1>
			<div className={styles.card} id="projects">
				{/* COOK'D ---------------------------------------------- */}
				<div className={styles.singleProject}>
					{/* <img /> */}
					<h2>
						<a href="https://expo.io/@cooked-capstone/projects/cooked" target="_blank" rel="external">
							Cook'd Recipe Sharing App
						</a>
					</h2>
					<p>
						Cook'd is cross-platform social media mobile application designed for creating, exploring and
						sharing recipes.
					</p>
					<p>
						This was my capstone project at Fullstack Academy, built with a team of three others. The
						capstone project was our first opportunity to build out an application from start to finish with
						the freedom to explore new technologies.
					</p>
					<p>
						My team and I decided that we wanted to learn about mobile development, and chose{' '}
						<strong>React Native</strong> and <strong>Expo</strong> for the project. Being that we only had
						two and half weeks to complete the app, and we were all knowledgeable in React, React Native
						plus Expo provided the shortest learning curve to get the job done.
					</p>
					<p>
						There were a slew of challenges and design decisions along the way. Early on, we had to decide
						what our backend would look like, and where it would live. We explored tools like Firebase, but
						quickly realized that a non-relational DBMS would be unwise given the nature of our data. We
						decided we wanted full control and so we wrote our own backend with <strong>Express</strong> and{' '}
						<strong>PostgreSQL RDBMS</strong>, in a separate repo and hosted it on <strong>Heroku.</strong>
					</p>
					<p>
						Beyond just getting the project off the ground, all while teaching ourselves mobile development,
						some additional challenges we faced were how to grab images from a user's device and where to
						host them. We landed on using <strong>Cloudinary</strong> to host the image files. This way we
						could simply store the uri provided by Cloudinary, in our own backend.
					</p>
					<p>
						Check out the{' '}
						<a href="https://github.com/Do-Jest-While-True" target="_blank" rel="external">
							GitHub org
						</a>{' '}
						to view the source code.
					</p>
					{/* COOK'D DEMO EMBEDDED VIDEO */}
					<div
						style={{
							position: 'relative',
							paddingBottom: '56.25%' /* 16:9 */,
							paddingTop: 25,
							height: 0
						}}
					>
						<YouTube videoId={'2qv1BzJ4XH4'} className={`${styles.youtubeVideo}`} />
					</div>
				</div>
				{/* PRECISION MARBLE --------------------------------- */}
				<div className={styles.singleProject}>
					<h2>
						<a href="https://precision-marble.com/" target="_blank" rel="external">
							Precision Marble & Granite
						</a>
					</h2>

					<p>
						This project is a landing page for a marble and stone contracting company, Precision Marble &
						Granite LLC.
					</p>
					<p>
						I built this website from scratch when I was just getting my start in web development. I had
						little experience, but was working through an online course in responsive web design which
						taught me mobile-first responsive design with <strong>HTML, CSS Flexbox</strong> and{' '}
						<strong>CSS Grid</strong>. I originally built the site utilizing just flexbox. After completing
						the online course, I refactored the site to include grid, to get more practice. This project
						also helped me get my start with VSC using <strong>Git</strong> and <strong>GitHub</strong>, as
						well as deployment with <strong>Netlify</strong>.
					</p>
					<p>
						With my bootcamp experience behind me, I plan to rebuild this site with React and Gatsby. The
						goal is to a provide an even better user experience as well as improve performance, especially
						with image loading, as the company and site grow.
					</p>
					<p>
						Check out the{' '}
						<a href="https://github.com/ryanpsmith26/precision-marble" target="_blank" rel="external">
							GitHub repo
						</a>{' '}
						to view the source code.
					</p>
				</div>
				{/* ROBOTICS INC ------------------------------------- */}
				<div className={styles.singleProject}>
					<h2>
						<a href="https://robotics-inc.herokuapp.com/" target="_blank" rel="external">
							Robotics Inc.
						</a>
					</h2>
					<p>
						Robotics Inc. is a CRUD web app built over the course of one week while attending Fullstack
						Academy. This was a solo project assigned to students immediately after we had finished learning
						all the full stack technologies in the FSA curriculum. Tech used includes{' '}
						<strong>React, Redux, Express, Sequelize</strong> and <strong>PostgreSQL.</strong> This my first
						full stack web app built from start to finish.
					</p>
					<p>
						This project really helped me solidify all of the concepts, at every level of the stack, that I
						had learned in the prior six weeks or so.
					</p>
					<p>
						Check out the{' '}
						<a href="https://github.com/ryanpsmith26/Robotics-Inc" target="_blank" rel="external">
							GitHub repo
						</a>{' '}
						to view the source code.
					</p>
				</div>
				{/* GRACE SHOPPER ----------------------------------- */}
				<div className={styles.singleProject}>
					<h2>
						<a href="https://cereal-grace-shopper.herokuapp.com/" target="_blank" rel="external">
							Grace Shopper
						</a>
					</h2>
					<p>
						Grace Shopper is another web app built as a part of the Fullstack Academy curriculum. The was a
						group project where we were assigned to build a mock e-commerce site in the FSA tech stack. In
						this project, we further solidified our knowledge in{' '}
						<strong>React, Redux, Express, Sequelize</strong> and <strong>PostgreSQL.</strong> This was my
						first <u>group</u> project built from start to finish. The project helped to further solidify
						knowledge in this stack, but also presented some new challeneges.
					</p>
					<p>
						One interesting challenge was getting items in a guest user's cart to persist across sessions.
						To achieve this feature, I took advantage of the npm package{' '}
						<code className={styles.code}>local-storage</code>
						to store data on the client side.
					</p>
					<p>
						Additionally, I gained exposure managing a project as a team with{' '}
						<strong>GitHub Organizations, Projects, Issues, Pull Requests, etc.</strong>
					</p>
					<p>
						Check out the{' '}
						<a
							href="https://github.com/Rice-Krispy-Grace-Shopper/Grace-Shopper"
							target="_blank"
							rel="external"
						>
							GitHub repo
						</a>{' '}
						to view the source code.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
