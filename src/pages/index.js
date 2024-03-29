import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/hero-section';
import StorySection from '../components/story-section';
import TechSection from '../components/tech-section';
import ExperienceSection from '../components/exp-section';
import ProjectSection from '../components/project-section';

const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" />
		<HeroSection />
		<StorySection />
		<ExperienceSection />
		<TechSection />
		{/* <ProjectSection /> */}
	</Layout>
);

export default IndexPage;
