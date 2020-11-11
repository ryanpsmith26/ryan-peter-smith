import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSection from '../components/hero-section';
import AboutSection from '../components/story-section';

const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" />
		<HeroSection />
		<AboutSection />
	</Layout>
);

export default IndexPage;
