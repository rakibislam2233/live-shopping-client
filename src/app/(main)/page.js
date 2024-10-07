import HeroSection from '@/components/Home/HeroSection/HeroSection'
import PopularCategory from '@/components/Home/PopularCategory/PopularCategory'
import PopularProducts from '@/components/Home/PopularProducts/PopularProducts'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
      <PopularCategory/>
      <PopularProducts/>
    </>
  )
}

export default page
