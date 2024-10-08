import Product from '@/components/Product/Product'
import React from 'react'

export const metadata ={
    title: 'Product - Live Shopping',
    description: 'View the details of a product',
    keywords: ['product', 'details']  // List of keywords for SEO optimization
}

const page = () => {
  return <Product/>
}

export default page