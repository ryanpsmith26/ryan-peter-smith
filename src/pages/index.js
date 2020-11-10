import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FeaturedImg from '../components/featured-img';
import StoryTechCard from '../components/story-tech-card';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<FeaturedImg />
		<StoryTechCard />
	</Layout>
);

export default IndexPage;
