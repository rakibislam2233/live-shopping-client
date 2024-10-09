'use client'

import { Breadcrumb } from "antd"
import Container from "../Shared/Container/Container"
import FilterSection from "./FilterSection/FilterSection"
import ProductContent from "./ProductContent/ProductContent"

const Product = () => {
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 my-10"> 
          <FilterSection/>
          <ProductContent/>
        </div>
      </Container>
      </section>
  )
}

export default Product