import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroSection from '../components/hero-section'
import StorySection from '../components/story-section'
import TechSection from '../components/tech-section'
import ExperienceSection from '../components/exp-section'

const IndexPage = () => (
    <Layout>
        <SEO title="Portfolio" />
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        <TechSection />
    </Layout>
)

export default IndexPage
