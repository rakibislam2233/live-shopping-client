import React from "react";
import {FiEdit2 } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";

const DeliveryInfoCard = () => {
  return (
    <div className="p-6 rounded-xl border flex justify-between gap-2">
    <div className="flex gap-5">
    <div className="size-4  rounded-full ring-2 ring-rose-500"></div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 -mt-2">
          <h1 className="font-semibold text-lg">Md Rakib Islam</h1>
          <button className="border border-green-500 px-5 py-1 text-sm text-green-500 rounded">
            Home
          </button>
        </div>
        <div className="space-y-2">
          <h1>Kochi - Kanyakumari Hwy, Palayam</h1>
          <h1>Thiruvananthapuram, Kerala</h1>
          <h1>695001</h1>
          <h1>
            Mobile: <span className="font-semibold"> 0471 247 0240</span>
          </h1>
        </div>
      </div>
    </div>
      <div className="flex gap-4 text-gray-400">
        <FiEdit2 size={23}/>
        <IoMdTrash size={24}/>
      </div>
    </div>
  );
};

export default DeliveryInfoCard;
