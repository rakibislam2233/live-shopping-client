'use client'
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/Shared/Container/Container";
import collection3 from "@/assest/collection/collection3.png"; // Make sure this path is correct
import { FiMinus, FiPlus } from "react-icons/fi";

// Custom Collapse Component
const CustomCollapse = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-500 mb-4">
      <div
        className="flex justify-between items-center py-3 cursor-pointer transition duration-300"
        onClick={toggle}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="bg-[#0D3676] size-8 flex justify-center items-center rounded-full text-white">
          {isOpen ? (
            <FiMinus/>
          ) : (
            <FiPlus/>
          )}
        </button>
      </div>
      <div
        className={`transition-max-height duration-500 transition-all overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 pb-3 font-semibold">{content}</p>
      </div>
    </div>
  );
};

const FQA = () => {
  // Set activePanel to 1 by default to make the first panel open on initial load
  const [activePanel, setActivePanel] = useState(1);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const content = `
    There are many variations of passages of Lorem Ipsum available, but
    the majority have suffered alteration in some form, by injected humour, 
    or randomised words which don't look even slightly believable.
  `;

  return (
    <section className="w-full bg-[#E7EBF1] py-20 mt-20 px-5 md:px-0">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
        {/* Left Side - Text and Custom Collapse */}
        <div className="space-y-5">
          {/* Header */}
          <div className="flex gap-3 items-center">
            <div className="w-2 h-20 bg-[#D43961] rounded-r-lg"></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-[#D43961] font-semibold">
                Best Product Deal
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold">Why Choose Us</h1>
            </div>
          </div>

          {/* Description */}
          <h1 className="text-gray-700 text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable.
          </h1>

          {/* Custom Collapse Panels */}
          <CustomCollapse
            title="Best Quality"
            content={content}
            isOpen={activePanel === 1}
            toggle={() => togglePanel(1)}
          />
          <CustomCollapse
            title="Trusted by Many"
            content={content}
            isOpen={activePanel === 2}
            toggle={() => togglePanel(2)}
          />
          <CustomCollapse
            title="Sustainability Focus"
            content={content}
            isOpen={activePanel === 3}
            toggle={() => togglePanel(3)}
          />
        </div>

        {/* Right Side - Image */}
        <div>
          <div className="w-full md:w-[500px] h-[500px] relative mx-auto">
            <Image
              src={collection3}
              alt="collections image"
              layout="fill"
              className="absolute rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Custom styles for smooth animation */}
      <style jsx>{`
        .transition-max-height {
          transition: max-height 0.5s e;
        }
      `}</style>
    </section>
  );
};

export default FQA;
