import React from "react";
import PopularProductsHeader from "./PopularProductsHeader";
import Container from "@/components/Shared/Container/Container";
import product1 from "@/assest/product/product1.png";
import product2 from "@/assest/product/product2.png";
import product3 from "@/assest/product/product3.png";
import product4 from "@/assest/product/product4.png";
import product5 from "@/assest/product/product5.png";
import product6 from "@/assest/product/product6.png";
import Image from "next/image";

const PopularProducts = () => {
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
    }
  ];

  return (
    <div className="w-full mt-24">
      <Container className="px-5 md:px-0">
        <PopularProductsHeader />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 my-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full bg-[#E7EBF1] space-y-3 p-4 rounded-2xl cursor-pointer group transform transition-all duration-500 hover:translate-y-3 relative"
            >
              {/* Price */}
              <h1 className="text-lg font-semibold">${product.price}</h1>

              {/* Product Image */}
              <div className="w-full h-[240px] rounded-2xl relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                />
                {/* Add to Cart Button - Initially Hidden */}
                <div className="w-full absolute bottom-0 bg-white px-2 py-3 rounded-xl flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transition-all">
                  <h1 className="text-gray-800">{product.name}</h1>
                  <button className="w-full bg-[#C90739] text-white px-8 py-1 rounded-xl">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Name - Hide on Hover */}
              <h1 className="font-medium group-hover:hidden transition-all">
                {product.name}
              </h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularProducts;
