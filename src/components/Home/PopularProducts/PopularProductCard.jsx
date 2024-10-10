import Image from "next/image";
import Link from "next/link";

const PopularProductCard = ({ product }) => {
  return (
    <Link href="/product/12345">
      <div
        key={product.id}
        className="w-full bg-[#E7EBF1] space-y-3 p-4 rounded-2xl cursor-pointer group transform transition-all duration-500 hover:translate-y-5 relative"
      >
        <h1 className="text-lg font-semibold">${product.price}</h1>
        <div className="w-full h-[240px] rounded-2xl relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
          />
          <div className="w-full absolute bottom-0 bg-white px-2 py-3 rounded-xl flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-500 transition-all">
            <h1 className="text-gray-800">{product.name}</h1>
            <button className="w-full bg-[#C90739] text-white px-8 py-1 rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
        <h1 className="group-hover:hidden transition-all">{product.name}</h1>
      </div>
    </Link>
  );
};

export default PopularProductCard;
