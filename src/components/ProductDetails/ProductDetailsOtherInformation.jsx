import { useState } from "react";
import { Tabs } from "antd";
import product3 from "@/assest/product/product3.png";
import {
  TruckOutlined,
  ReloadOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";
const ProductDetailsOtherInformation = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 my-16">
      {/* Left Column - Description and Additional Information */}
      <div>
        <Tabs defaultActiveKey="description" onChange={handleTabChange}>
          <Tabs.TabPane tab="Description" key="description">
            <p className="text-gray-600 my-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of the text. All the Lorem Ipsum generators
              on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet.
            </p>

            {/* Features */}
            <div className="border rounded-md space-y-4">
              <div className="flex items-center space-x-3 p-4">
                <TruckOutlined style={{ fontSize: "24px" }} />
                <div>
                  <h4 className="font-semibold">Free Delivery</h4>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center space-x-3 p-4">
                <ReloadOutlined style={{ fontSize: "24px" }} />
                <div>
                  <h4 className="font-semibold">Return Delivery</h4>
                  <p>Free 30 Days Delivery Returns.</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center space-x-3 p-4">
                <CheckCircleOutlined style={{ fontSize: "24px" }} />
                <div>
                  <h4 className="font-semibold">Best Product Quality</h4>
                  <p>Customer Service Product</p>
                </div>
              </div>
              <hr />
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Additional Information" key="additional-info">
            {/* Dimension Information */}
            <div className="space-y-4 mb-6">
              {[
                { label: "Height", inches: "34.5", cm: "34.5" },
                { label: "Width", inches: "34.5", cm: "34X12" },
                { label: "Depth", inches: "34.5", cm: "34X17" },
                { label: "Internal", inches: "34.5", cm: "34X49" },
              ].map((dimension, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  <div className="font-semibold">{dimension.label}:</div>
                  <div className="bg-gray-100 p-2 rounded-md">
                    Inches({dimension.inches})
                  </div>
                  <div className="bg-gray-100 p-2 rounded-md">
                    Cm({dimension.cm})
                  </div>
                </div>
              ))}
            </div>

            {/* Material and Build Section */}
            <p className="text-gray-600 my-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of the text. All the Lorem Ipsum generators
              on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet.
            </p>

            <h3 className="font-semibold my-2">Material and Build</h3>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of the text. All the Lorem Ipsum generators
              on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet.
            </p>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* Right Column - Product Image */}
      <div className="w-full h-[500px] rounded-xl relative">
        <Image
          src={product3}
          alt="product1"
          fill
          className="w-full h-full object-fill absolute"
        />
      </div>
    </section>
  );
};

export default ProductDetailsOtherInformation;
