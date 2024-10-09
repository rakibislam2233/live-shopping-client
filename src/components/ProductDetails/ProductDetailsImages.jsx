'use client'
import product from "@/assest/product/product6.png";
import product1 from "@/assest/product/product1.png";
import product2 from "@/assest/product/product2.png";
import product3 from "@/assest/product/product3.png";
import Image from "next/image";

const ProductDetailsImages = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[500px] relative">
        <Image
          src={product}
          fill
          alt="product"
          className="absolute object-fill rounded-xl"
        />
      </div>
      <div className="flex justify-around gap-10 mt-8">
          <div className="w-full h-[190px] bg-gray-100 rounded-xl relative">
            <Image
              src={product1}
              alt="product1"
              fill
              className="w-full h-full object-fill absolute"
            />
          </div>
          <div className="w-full h-[190px] bg-gray-100 rounded-xl relative">
            <Image
              src={product2}
              alt="product2"
              fill
              className="w-full h-full object-fill absolute"
            />
          </div>
          <div className="w-full h-[190px] bg-gray-100 rounded-xl relative">
            <Image
              src={product3}
              alt="product3"
              fill
              className="w-full h-full object-fill absolute"
            />
          </div>
        </div>
    </section>
  );
};

export default ProductDetailsImages;
