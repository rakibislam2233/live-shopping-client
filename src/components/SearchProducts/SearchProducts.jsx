"use client";
import { Breadcrumb, Pagination } from "antd";
import { useState } from "react";
import Container from "../Shared/Container/Container";
import product1 from "@/assest/product/product1.png";
import product2 from "@/assest/product/product2.png";
import product3 from "@/assest/product/product3.png";
import product4 from "@/assest/product/product4.png";
import product5 from "@/assest/product/product5.png";
import product6 from "@/assest/product/product6.png";
import PopularProductCard from "../Home/PopularProducts/PopularProductCard";

const SearchProducts = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Winter Hoodie",
      price: 100,
    },
    {
      id: 2,
      image: product2,
      name: "Summer T-Shirt",
      price: 150,
    },
    {
      id: 3,
      image: product3,
      name: "Classic Denim Jacket",
      price: 200,
    },
    {
      id: 4,
      image: product4,
      name: "Sneakers",
      price: 120,
    },
    {
      id: 5,
      image: product5,
      name: "Casual Pants",
      price: 180,
    },
    {
      id: 6,
      image: product6,
      name: "Stylish Backpack",
      price: 220,
    },
    {
      id: 7,
      image: product1,
      name: "Winter Hoodie",
      price: 100,
    },
    {
      id: 8,
      image: product2,
      name: "Summer T-Shirt",
      price: 150,
    },
    {
      id: 9,
      image: product3,
      name: "Classic Denim Jacket",
      price: 200,
    },
    {
      id: 10,
      image: product3,
      name: "Classic Denim Jacket",
      price: 200,
    },
    {
      id: 11,
      image: product4,
      name: "Sneakers",
      price: 120,
    },
    {
      id: 12,
      image: product5,
      name: "Casual Pants",
      price: 180,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of products per page

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the products to display based on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);
  
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Search</Breadcrumb.Item>
        </Breadcrumb>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 my-5">
          {currentProducts.map((product) => (
            <PopularProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          align="center"
          total={products.length}
          onChange={onPageChange}
          showSizeChanger={false} // Disable changing page size
          className="mt-10"
        />
      </Container>
    </section>
  );
};

export default SearchProducts;
