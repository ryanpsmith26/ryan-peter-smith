import React, { useState } from 'react';

import styles from './about-card.module.css';

const AboutCard = () => {
	const [ displayLongBio, setDisplayLongBio ] = useState(false);

	return (
		<div className={styles.card} id="story">
			<div className={styles.story}>
				<div className={styles.storyHeader}>
					<img src={require('../images/headshot.png')} className={styles.headshot} alt="headshot image" />
					<h2>My Story</h2>
				</div>
				{/* LONG BIO */}
				{displayLongBio && (
					<div>
						<p>
							I was born and raised in Huntington, NY. Growing up, my Dad would always tell me that I
							would one day be an engineer. He would tell me the story of how he took me to an amusement
							park, near our hometown, to bring me on my first rollercoaster ride. He was a little
							concerned about how I would handle that first ride, small may it be. His worries vanished as
							soon as it began. "You leaned over the side of the cart and stared at the tracks in awe, the
							entire time,” he tells me. He says that I was more concerned with figuring out the mechanics
							of the ride than anything else. A decade or so later, I was admitted to the Mechanical
							Engineering program at Stony Brook University.
						</p>
						<p>
							I went on to obtain that Bachelor’s of Engineering degree in Mechanical Engineering. From
							there, I worked in various mechanical roles for about five years. I got my start as a
							Mechanical Inspector, in the field, for a consulting firm. I did that for a little under two
							years and then moved on to be a junior Plant Engineer at a seafood processing facility in
							Brooklyn. At about the ten month mark I was promoted to the position of lead Plant Engineer
							[ link to rec ] of my facility. I spent a total of three years at that company.
						</p>
						<p>
							I loved learning the mechanics of things, but something was missing. My Dad raised me to
							understand that if you enjoy what you do for work, you’ll never work a day in your life. At
							both of my companies, I was good at what I was doing and enjoyed the things that I learned.
							But I was still working.
						</p>
						<p>
							I’ve long had many passions and hobbies: [ cooking, brewing beer, roasting coffee, health
							and fitness, music, woodworking, metalworking ], the array goes on. But they were just that…
							hobbies. I didn’t see a clear path, that made sense for me, to turn those things into a
							fulfilling career.
						</p>
						<p>
							Enter coding. I started teaching myself to code at the end of 2019. I very quickly grew to
							love it. I loved what I was able to build. I loved learning new tools to make my projects
							look beautiful and professional. And above all, I loved that it was always a puzzle.
						</p>
						<p>
							{' '}
							After about a month of some tutorials and building simple projects, I was looking into the
							best path for me to make a final career change. I landed on the bootcamp route, and was soon
							admitted to Fullstack Academy’s Software Engineering Immersive. This proved to be the best
							decision I’ve ever made in my life. I enjoyed every second of it, grueling as it was at
							times. I saw some students occasionally get discouraged and beaten down by the intense
							program. But for me, it was not work. I knew what it was like to put in long hours on
							something that I didn’t deeply connect with. For me, this was not that. I woke up everyday
							excited to learn and to build new things. My love of development drove me forward, during
							this demanding program, and I know that it will continue drive me in my new career.
						</p>
					</div>
				)}
				{/* END LONG BIO */}
				<p>
					I’m immensely excited as I begin my journey as a professional Software Engineer. I’m a Full Stack
					Engineer with a passion for the front end and elegant design. I greatly enjoy working with React,
					Redux and CSS. I’m eager to dive deeper, and gain an even more fundamental knowledge, in these
					areas. I'm also proficient in the Node.js backend and PostgreSQL rDMBS. With my bootcamp at
					Fullstack Academy of Code behind me, I’m thrilled to have the time to widen my knowledge by learning
					new languages and technologies. There is not nearly enough time in the day to undertake all of the
					things that I want to learn, but I’m doing my best!
				</p>
				<button onClick={() => setDisplayLongBio(!displayLongBio)}>
					<strong>{displayLongBio ? 'Read Less...' : 'Read More...'}</strong>
				</button>
			</div>
			{true && (
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
			)}
		</div>
	);
};

export default AboutCard;
