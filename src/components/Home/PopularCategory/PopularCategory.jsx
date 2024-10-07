import React from "react";
import PopularCategoryHeader from "./PopularCategoryHeader";
import Container from "@/components/Shared/Container/Container";
import category1 from "@/assest/category/category1.png";
import category2 from "@/assest/category/category2.png";
import category3 from "@/assest/category/category3.png";
import category4 from "@/assest/category/category4.png";
import category5 from "@/assest/category/category5.png";
import category6 from "@/assest/category/category6.png";
import PopularCategoryCard from "./PopularCategoryCard";
const PopularCategory = () => {
  const categories = [
    {
      id:1,
      title: "Apparel",
      image: category1,
    },
    {
      id:2,
      title: "Bedding",
      image: category2,
    },
    {
      id:3,
      title: "Electronics",
      image: category3,
    },
    {
      id:4,
      title: "Furniture",
      image: category4,
    },
    {
      id:5,
      title: "Kitchen Product",
      image: category5,
    },
    {
      id:6,
      title: "Bathroom Products",
      image: category6,
    },
  ];
  return (
    <div className="w-full mt-24">
      <Container className="px-5 md:px-0">
        <PopularCategoryHeader />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((category) => <PopularCategoryCard key={category.id} category={category}/>)}
        </div>
      </Container>
    </div>
  );
};

export default PopularCategory;
