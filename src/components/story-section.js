import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import styles from './story-section.module.css';

const StorySection = () => {
	const [ displayLongBio, setDisplayLongBio ] = useState(false);
	// consider refactoring these styles
	const shortBioBtnHighlight = !displayLongBio && styles.bioBtnHighlight;
	const longBioBtnHighlight = displayLongBio && styles.bioBtnHighlight;

	return (
		<div id="story">
			<h1 className={styles.sectionHeader}>-- My Story --</h1>
			<div className={styles.card} id="story">
				<img src={require('../images/portrait.jpeg')} alt="portrait" className={styles.portraitImg} />
				<div className={styles.story}>
					{/* SWITCHING BTNS */}
					<div className={styles.bioBtnDiv}>
						<button
							type="button"
							className={`${styles.bioBtn} ${shortBioBtnHighlight}`}
							onClick={() => setDisplayLongBio(false)}
						>
							<h2>Short Bio</h2>
						</button>
						<button
							type="button"
							className={`${styles.bioBtn} ${longBioBtnHighlight}`}
							onClick={() => setDisplayLongBio(true)}
						>
							<h2>Long Bio</h2>
						</button>
					</div>
					{/* LONG BIO */}
					{displayLongBio && (
						<div>
							<p>
								I was born and raised in Huntington, NY. Growing up, my Dad would always tell me that I
								would one day be an engineer. He would tell me the story of how he took me to an
								amusement park, near our hometown, to bring me on my first rollercoaster ride. He was a
								little concerned about how I would handle that first ride, small may it be. His worries
								vanished as soon as it began. "You leaned over the side of the cart and stared at the
								tracks in awe, the entire time,” he tells me. He says that I was more concerned with
								figuring out the mechanics of the ride than anything else. A decade or so later, I was
								admitted to the Mechanical Engineering program at Stony Brook University.
							</p>
							<p>
								I went on to obtain that Bachelor of Engineering degree in Mechanical Engineering. From
								there, I worked in various mechanical roles for about five years. I first worked as a
								Mechanical Inspector, at a consulting firm, for a little under two years. I then went on
								to work as the lead{' '}
								<a
									href="https://drive.google.com/file/d/11gUI3s0iBRkWkc5GZKaUOcLbCCHtwNtc/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
								>
									Plant Engineer of a seafood processing facility in Brooklyn
								</a>{' '}
								for three.
							</p>
							<p>
								I loved learning the mechanics of things, but something was missing. My Dad raised me to
								understand that if you enjoy what you do for work, you’ll never work a day in your life.
								At both of my companies, I was good at what I was doing and enjoyed the things that I
								learned.
								<strong> But I was still working.</strong>
							</p>
							<p>
								I’ve long had many hobbies:{' '}
								<code>
									[ 'cooking', 'brewing beer', 'roasting coffee', 'health and fitness', 'music',
									'woodworking', 'metalworking' ]
								</code>, the list goes on. But they were just that… hobbies. I didn’t see a clear path,
								that made sense for me, to turn those things into a fulfilling career.
							</p>
							<p>
								<strong>Enter coding.</strong> I started teaching myself to code at the end of 2019. I
								very quickly grew to love it. I loved what I was able to build. I loved learning new
								tools to make my projects look beautiful and professional. I loved that it was always a
								puzzle. And above all, I loved learning <strong>the mechanics</strong> behind how this
								thing worked that I had used for so many years... the web.
							</p>
							<p>
								{' '}
								After about a month of some tutorials and building simple projects, I was looking into
								the best path for myself to make a final career change. I landed on the bootcamp route,
								and was soon admitted to Fullstack Academy’s Software Engineering Immersive.{' '}
								<strong>This proved to be the best decision I’ve ever made in my life.</strong> I
								enjoyed every second of it, grueling as it was at times. I saw some students
								occasionally get discouraged and beaten down by the intense program. But for me, it was
								not work. I knew what it was like to put in long hours on something that I didn’t deeply
								connect with. For me, this was not that. I woke up everyday excited to learn and to
								build new things. My love of development drove me forward, during this demanding
								program. I know that it will continue to do so in my new career.
							</p>
						</div>
					)}
					{/* END LONG BIO */}
					<p>
						I’m incredibly excited as I begin my journey as a professional Software Engineer. I’m a Full
						Stack Engineer with a love for the frontend, I also love to get my hands dirty in the backend. I
						appreciate elegant visual design, as much as I do clean code. My attention to detail is innate,
						and bleeds into everything I do. I'm constantly striving to better myself as an engineer and
						developer. Some tech that I'm highly fond of includes React, Redux, CSS and Express. I’m eager
						to dive deeper, and gain an even more fundamental knowledge, in these (and similar!) tools. I'm
						also always on the look out for opportunities to learn brand new languages and technologies. My
						goal is to be <strong>the best engineer I can possibly be</strong>, working on tools and
						products that I believe in!
					</p>
					{/* CLOSE LONG BIO BTN */}
					{displayLongBio && (
						// consider refactoring to an icon
						<button
							onClick={() => {
								scrollTo('#story');
								setTimeout(() => {
									setDisplayLongBio(false);
								}, 400);
							}}
							className={styles.closeLongBio}
						>
							&times;
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default StorySection;
