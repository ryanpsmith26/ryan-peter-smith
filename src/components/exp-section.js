import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { StaticImage } from 'gatsby-plugin-image'

// also see _styles below for timeline props
import * as styles from './exp-section.module.css'

const ExperienceSection = () => {
    return (
        <div className={styles.timelineSectionDiv} id="experience">
            <h1 className={styles.sectionHeader}>-- Experience --</h1>
            <VerticalTimeline>
                {/* CLICKTRIPZ --------------------------------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="July 2022 - Present"
                    icon={
                        <StaticImage
                            src="../images/clicktripz.jpg"
                            className={styles.iconImg}
                            alt="Clicktripz"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                >
                    <a
                        href="https://www.clicktripz.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Clicktripz
                        </h3>
                    </a>
                    <h4 className="vertical-timeline-element-subtitle">
                        Manhattan Beach, CA (Remote)
                    </h4>
                    <p style={styles_.description}>
                        "Travel technology company that builds innovative
                        software solutions to serve the needs of suppliers,
                        publishers, advertisers and travelers."
                    </p>
                    <p>Senior Software Engineer</p>
                </VerticalTimelineElement>
                {/* AGNOSTACK --------------------------------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="December 2020 - July 2022"
                    icon={
                        <StaticImage
                            src="../images/agnoStack.png"
                            className={styles.iconImg}
                            alt="Agnostack"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                >
                    <a
                        href="https://agnostack.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3 className="vertical-timeline-element-title">
                            agnoStack
                        </h3>
                    </a>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chicago, IL (Remote)
                    </h4>
                    <p style={styles_.description}>
                        "Platform agnostic omni-channel e-commerce solution."
                    </p>
                    <p>Full Stack Engineer</p>
                </VerticalTimelineElement>
                {/* FULLSTACK -------------------------------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="August 2020 - October 2020"
                    icon={
                        <StaticImage
                            src="../images/fsa-icon.png"
                            className={styles.iconImg}
                            alt="Fullstack Academy"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                >
                    <h3 className="vertical-timeline-element-title">
                        Fullstack Academy of Code
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        New York, NY (Remote)
                    </h4>
                    <p>
                        Certificate in Full Stack Web Development,{' '}
                        <strong>Software Engineering</strong>
                    </p>
                </VerticalTimelineElement>
                {/* ACME SMOKED FISH ----------------------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="August 2017 - July 2020"
                    icon={
                        <StaticImage
                            src="../images/acme-a.jpg"
                            className={styles.iconImg}
                            alt="Acme Smoked Fish"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                >
                    <div>
                        <div>
                            <h3 className="vertical-timeline-element-title">
                                Acme Smoked Fish Corp.
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Brooklyn, NY
                            </h4>
                            <p>Plant Engineer</p>
                            <a
                                href="https://drive.google.com/file/d/11gUI3s0iBRkWkc5GZKaUOcLbCCHtwNtc/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Letter of Recommendation
                            </a>
                        </div>
                    </div>
                </VerticalTimelineElement>
                {/* Emtec Consulting Engineers ---------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="November 2015 - July 2017"
                    icon={
                        <StaticImage
                            src="../images/emtec-new.jpeg"
                            className={styles.iconImg}
                            alt="Emtec Consulting Engineers"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                >
                    <h3 className="vertical-timeline-element-title">
                        Emtec Consulting Engineers
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Ronkonkoma, NY
                    </h4>
                    <p>Mechanical Inspector</p>
                </VerticalTimelineElement>
                {/* STONY BROOK --------------------------------------------------------- */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={styles_.card}
                    contentArrowStyle={styles_.cardArrow}
                    date="2011-2015"
                    icon={
                        <StaticImage
                            src="../images/sbu-sq-white.jpg"
                            className={styles.iconImgSBU}
                            alt="Stony Brook University"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                    iconStyle={styles_.icon}
                >
                    <h3 className="vertical-timeline-element-title">
                        Stony Brook University
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Stony Brook, NY
                    </h4>
                    <p>
                        Bachelor of Engineering Degree,{' '}
                        <strong>Mechanical Engineering</strong>
                    </p>
                </VerticalTimelineElement>
                {/* RPS ICON ------------------------------------------- */}
                <VerticalTimelineElement
                    icon={
                        <StaticImage
                            src="../images/coaster.jpg"
                            className={styles.iconImg}
                            alt="RPS"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    }
                    iconStyle={styles_.icon}
                />
            </VerticalTimeline>
        </div>
    )
}

export default ExperienceSection

const styles_ = {
    card: {
        background: '#d9d9d9',
        fontFamily: 'Saira',
        borderRadius: '20px',
    },
    cardArrow: {
        borderRight: '7px solid  #d9d9d9',
    },
    icon: {
        background: '#fff',
    },
    description: {
        fontStyle: 'italic',
    },
}
