import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// also see _styles below for timeline props
import styles from './exp-section.module.css';

const ExperienceSection = () => {
	return (
		<div className={styles.timelineSectionDiv} id="experience">
			<h1 className={styles.sectionHeader}>-- Experience --</h1>
			<VerticalTimeline>
				{/* FULLSTACK -------------------------------------------------------------- */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="August 2020 - October 2020"
					icon={<img src={require('../images/fsa-icon.png')} className={styles.iconImg} />}
				>
					<h3 className="vertical-timeline-element-title">Fullstack Academy of Code</h3>
					<h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
					<p>
						Certificate in Full Stack Web Development, <strong>Software Engineering</strong>
					</p>
				</VerticalTimelineElement>
				{/* ACME SMOKED FISH ----------------------------------------------------- */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="August 2017 - July 2020"
					icon={<img src={require('../images/acme-a.jpg')} className={styles.iconImg} />}
				>
					<div className={styles.cardDiv}>
						<div>
							<h3 className="vertical-timeline-element-title">Acme Smoked Fish Corp.</h3>
							<h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
							<p>Plant Engineer | Maintenance Manager</p>
						</div>
					</div>
				</VerticalTimelineElement>
				{/* Emtec Consulting Engineers ---------------------------------------- */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="November 2015 - July 2017"
					icon={<img src={require('../images/emtec-new.jpeg')} className={styles.iconImg} />}
				>
					<h3 className="vertical-timeline-element-title">Emtec Consulting Engineers</h3>
					<h4 className="vertical-timeline-element-subtitle">Ronkonkoma, NY</h4>
					<p>Mechanical Inspector</p>
				</VerticalTimelineElement>
				{/* STONY BROOK --------------------------------------------------------- */}
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="2011-2015"
					icon={<img src={require('../images/sbu-sq-white.jpg')} className={styles.iconImgSBU} />}
					iconStyle={styles_.icon}
				>
					<h3 className="vertical-timeline-element-title">Stony Brook University</h3>
					<h4 className="vertical-timeline-element-subtitle">Stony Brook, NY</h4>
					<p>
						Bachelor of Engineering Degree in <strong>Mechanical Engineering</strong>
					</p>
				</VerticalTimelineElement>
				{/* RPS ICON ------------------------------------------- */}
				<VerticalTimelineElement
					icon={<img src={require('../images/coaster.jpg')} className={styles.iconImg} />}
					iconStyle={styles_.icon}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default ExperienceSection;

const styles_ = {
	card: {
		background: '#d9d9d9',
		fontFamily: 'Saira',
		borderRadius: '20px'
	},
	cardArrow: {
		borderRight: '7px solid  #d9d9d9'
	},
	icon: {
		background: '#fff'
	}
};
