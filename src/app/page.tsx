import Navbar from '@/components/base/Navbar'
import HeroSection from '@/components/Landing/HeroSection'
import { BentoDemo } from '@/components/Landing/HowWeWork'
import WhatWeDeliver from '@/components/Landing/WhatWeDeliver'
import WhoAreWe from '@/components/Landing/WhoAreWe'
import WhyAmericoeMedico from '@/components/Landing/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div className='py-10'>
      <HeroSection />
      <WhoAreWe />
      <WhatWeDeliver />
      <BentoDemo/>
      <WhyAmericoeMedico />
    </div>
  )
}

export default page