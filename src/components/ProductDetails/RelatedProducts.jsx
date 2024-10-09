import product1 from "@/assest/product/product1.png";
import product2 from "@/assest/product/product2.png";
import product3 from "@/assest/product/product3.png";
import product4 from "@/assest/product/product4.png";
import product5 from "@/assest/product/product5.png";
import product6 from "@/assest/product/product6.png";
import PopularProductCard from "../Home/PopularProducts/PopularProductCard";
const RelatedProducts = () => {
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
  return (
    <section className="w-full">
      <div className="flex gap-3">
        <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-[#D43961] font-semibold">
            Related Products
          </h1>
          <h1 className="text-xl md:text-5xl font-semibold">
            Products Related to This item
          </h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 my-5">
          {products.map((product) => (
            <PopularProductCard key={product.id} product={product} />
          ))}
        </div>
    </section>
  );
};

export default RelatedProducts;