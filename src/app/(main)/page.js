import DeliveryInfo from '@/components/Home/DeliveryInfo/DeliveryInfo'
import FQA from '@/components/Home/FQA/FQA'
import HeroSection from '@/components/Home/HeroSection/HeroSection'
import PopularCategory from '@/components/Home/PopularCategory/PopularCategory'
import PopularProducts from '@/components/Home/PopularProducts/PopularProducts'
import TopCollections from '@/components/Home/TopCollections/TopCollections'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
      <PopularCategory/>
      <PopularProducts/>
      <TopCollections/>
      <FQA/>
      <DeliveryInfo/>
    </>
  )
}

export default page
