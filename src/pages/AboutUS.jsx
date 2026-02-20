import React from 'react'
import HeroSection from '../component/About/HeroSection'
import AboutCards from '../component/About/AboutCards'
import BannerWithCards from '../component/About/BannerWithCards'
import AboutImpactSection from '../component/About/AboutImpactSection'
import NgoGallery from '../component/About/NGOGallery'

const AboutUS = () => {
  return (
    <div>
      <HeroSection/>
      <BannerWithCards/>
      <AboutCards/>
      <AboutImpactSection/>
      <NgoGallery/>
    </div>
  )
}

export default AboutUS
