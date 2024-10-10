import Image from "next/image";
import Link from "next/link";

const PopularCategoryCard = ({ category }) => {
  return (
    <Link href={`/product?category=${category?.title}`}>
      <div
        key={category.title}
        className="w-full flex flex-col items-center justify-center gap-2 bg-[#E7EBF1] hover:bg-[#D43961]  space-y-2 p-5 rounded-2xl group duration-500 transition-all cursor-pointer "
      >
        <div className="w-full h-[240px]  relative">
          <Image
            src={category.image}
            alt={category.title}
            className="rounded-md"
            fill
          />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-white">
          {category.title}
        </h3>
      </div>
    </Link>
  );
};

export default PopularCategoryCard;
