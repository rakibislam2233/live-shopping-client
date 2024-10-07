import React from "react";
import PopularCategoryHeader from "./PopularCategoryHeader";
import Container from "@/components/Shared/Container/Container";
import category1 from "@/assest/category/category1.png";
import category2 from "@/assest/category/category2.png";
import category3 from "@/assest/category/category3.png";
import category4 from "@/assest/category/category4.png";
import category5 from "@/assest/category/category5.png";
import category6 from "@/assest/category/category6.png";
import Image from "next/image";
const PopularCategory = () => {
  const images = [
    {
      title: "Apparel",
      image: category1,
    },
    {
      title: "Bedding",
      image: category2,
    },
    {
      title: "Electronics",
      image: category3,
    },
    {
      title: "Furniture",
      image: category4,
    },
    {
      title: "Kitchen Product",
      image: category5,
    },
    {
      title: "Bathroom Products",
      image: category6,
    },
  ];
  return (
    <div className="w-full mt-24">
      <Container className="px-5 md:px-0">
        <PopularCategoryHeader />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {images.map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-col items-center justify-center gap-2 bg-[#E7EBF1] hover:bg-[#D43961]  space-y-2 p-5 rounded-2xl group duration-500 transition-all cursor-pointer "
            >
              <div className="w-full h-[240px]  relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-md"
                  fill
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularCategory;
