import CustomButton from "@/utils/CustomButton";
import Link from "next/link";
import React from "react";
import {
  PiArrowBendUpLeftLight,
  PiArrowBendUpRightLight,
} from "react-icons/pi";

const PopularProductsHeader = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-[#D43961] font-semibold">
              Best Quality
            </h1>
            <h1 className="text-xl md:text-5xl font-semibold">
              Get your Fashion Style
            </h1>
          </div>
        </div>
        <div>
          <Link href="/product">
            <CustomButton border>View All Product</CustomButton>
          </Link>
        </div>
      </div>
      <div className="border-b border-[#C6D0DF] my-6"></div>
    </section>
  );
};

export default PopularProductsHeader;
