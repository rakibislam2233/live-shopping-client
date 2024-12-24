'use client';
import FilterSection from "@/components/Product/FilterSection/FilterSection";
import ProductContent from "@/components/Product/ProductContent/ProductContent";
import Container from "@/components/Shared/Container/Container";
import { Breadcrumb } from "antd";

const page = () => {
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 my-10">
          <FilterSection />
          <ProductContent />
        </div>
      </Container>
    </section>
  );
};

export default page;
