import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroArea from '../components/hero-area';
import AboutCard from '../components/about-card';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroArea />
		<AboutCard />
	</Layout>
);

export default IndexPage;
