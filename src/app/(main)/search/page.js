import SearchProducts from '@/components/SearchProducts/SearchProducts'
import React from 'react'

const page = ({searchParams}) => {
    console.log(searchParams)
  return <SearchProducts/>
}

export default page