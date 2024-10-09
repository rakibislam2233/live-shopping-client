"use client";
import { Breadcrumb } from "antd";
import Container from "../Shared/Container/Container";
import ProductDetailsImages from "./ProductDetailsImages";
import ProductDetailsInformation from "./ProductDetailsInformation";

const ProductDetails = ({ productId }) => {
  console.log(productId);
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 my-10">
        <ProductDetailsImages/>
        <ProductDetailsInformation/>
       </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
