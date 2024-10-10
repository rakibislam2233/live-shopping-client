"use client";
import { Breadcrumb, Input, Button } from "antd";
import { SendOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Container from "../Shared/Container/Container";
import { useState } from "react";
import product1 from "@/assest/product/product1.png";
import product2 from "@/assest/product/product2.png";
import product3 from "@/assest/product/product3.png";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Recommended from "./Recommended";
import PastLive from "./PastLive";

const LiveStream = () => {
  const [messages, setMessages] = useState([
    "This is such an exciting match, can’t wait for more!",
    "What a nail-biting moment! Everyone’s on the edge here!",
    "Incredible performance from the team",
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Live Stream</Breadcrumb.Item>
        </Breadcrumb>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative w-full bg-black h-[500px] rounded-lg shadow-lg overflow-hidden">
              <Button
                type="primary"
                className="absolute top-2 left-2 bg-red-500"
                icon={<VideoCameraOutlined />}
              >
                LIVE STREAM
              </Button>
              <video
                className="w-full h-full"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                poster="https://via.placeholder.com/800x450"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 items-center mt-8">
              {[
                {
                  title: "Woman Pant",
                  des: "Incredible performance from ",
                  price: 150,
                  img: product1,
                },
                {
                  title: "White Sofa",
                  des: "Incredible performance from ",
                  price: 150,
                  img: product2,
                },
                {
                  title: "Master Sofa",
                  des: "Incredible performance from",
                  price: 150,
                  img: product3,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-950 rounded-lg p-4 bg-[#E7EBF1] flex gap-4 items-center shadow-md "
                >
                  <div className="w-full h-[120px] relative">
                    <Image
                      fill
                      src={product.img}
                      alt={product.title}
                      className="w-full object-cover absolute rounded-xl"
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <h4 className="font-semibold">{product.title}</h4>
                    <p className="text-gray-700 text-sm">{product.des}</p>
                    <p className="text-gray-600 font-semibold">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat Section */}
          <div className="w-full h-full">
            <div className="bg-[#E7EBF1] rounded-lg shadow-lg px-4 py-6 h-full">
              <div className="flex flex-col space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div key={index} className="flex space-x-2 items-start">
                    <div className=" size-12 bg-[#0D3676] rounded-full flex items-center justify-center text-white">
                      <FaUserCircle className="size-4" />
                    </div>
                    <div className="bg-white p-2 rounded-md shadow-md text-sm">
                      {msg}
                    </div>
                  </div>
                ))}
              </div>
              {/* Input Field */}
              <div className="mt-4">
                <Input
                  placeholder="Send Messages"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onPressEnter={handleSendMessage}
                  addonAfter={
                    <Button
                      icon={<SendOutlined />}
                      onClick={handleSendMessage}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Recommended />
      <PastLive />
    </section>
  );
};

export default LiveStream;
