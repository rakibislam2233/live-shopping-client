"use client";
import CustomButton from "@/utils/CustomButton";
import Link from "next/link";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductDetailsInformation = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["#57C6F7", "#2ECC71", "#F39C12", "#1C1C1C"]; // example color codes

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full  border-gray-300">
      <div className="border p-4 rounded-xl">
        {/* Price and Title */}
        <h1 className="text-2xl font-bold">$250.00</h1>
        <h2 className="text-xl font-semibold my-2">
          Comfort Sofa Set 6X6 Full Packaged
        </h2>
        <p>
          Availability :{" "}
          <span className="text-green-600 font-semibold">In Stock</span>
        </p>

        {/* Product Description */}
        <p className="text-gray-600 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptate, dolorum expedita odio itaque enim necessitatibus.
          Reprehenderit odio dicta tempora maxime. Nostrum unde, optio adipisci
          laboriosam qui pariatur saepe minus. Repellendus aut fugit distinctio
          cum placeat itaque voluptate voluptatum quam corporis. Perferendis
          esse repellat dicta dolores assumenda voluptatum numquam fugiat
          temporibus. Illum accusantium fugiat pariatur, porro ducimus deleniti
          doloremque cumque quo voluptates aliquid possimus dolorem sapiente
          unde et facilis id sint, commodi a aspernatur rem incidunt! Impedit
          officiis, voluptates modi maiores et nisi reprehenderit quia. Autem
          magni temporibus laudantium rem. Nisi, quo. Praesentium laboriosam nam
          error ea! Repudiandae, aperiam doloribus. believable...
        </p>
        <hr />
        {/* Color Selection */}
        <div className="my-4">
          <h3 className="text-lg font-semibold">Color</h3>
          <div className="flex space-x-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  selectedColor === color
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="my-4">
          <h3 className="text-lg font-semibold">Quantity</h3>
          <div className="flex mt-2">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="px-4 py-3 border-l border-t border-b rounded-l border-[#929292]"
            >
              <FiMinus className="size-3" />
            </button>
            <h1 className="border flex justify-center items-center px-5 py-2 text-sm border-[#929292]">
              {quantity}
            </h1>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="px-4 py-3 border-r border-t border-b rounded-r border-[#929292] bg-[#0D3676]"
            >
              <FiPlus className="size-3 text-white" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <CustomButton border className="w-full">
            Buy Now
          </CustomButton>
          <div>
            <Link href="/cart">
              <CustomButton className="w-full">Add to Cart</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInformation;
