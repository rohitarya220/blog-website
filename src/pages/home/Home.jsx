import React, { useEffect } from 'react'
import Layout from '../../componants/layout/Layout'
import HeroSection from '../../componants/heroSection/HeroSection'
import BlogPostCard from '../../componants/blogPostCard/BlogPostCard'


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
    
    </Layout>
  )
}

export default Home