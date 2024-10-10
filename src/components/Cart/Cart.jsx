"use client";
import { Table } from "antd";
import { FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import Container from "../Shared/Container/Container";
import { PiArrowBendUpLeftLight } from "react-icons/pi";
import CustomButton from "@/utils/CustomButton";
import Link from "next/link";

// Table customization styles
const customStyles = {
  tableHeader: {
    backgroundColor: "#E7EBF1", // Change header background color
    padding: "16px", // Add padding
  },
  tableCell: {
    padding: "12px 16px", // Add padding to table cells
  },
};

const Cart = () => {
  // Example product data
  const products = [
    {
      key: "1",
      image:
        "https://i.ibb.co.com/JyJKRf1/LG-Insta-View-Door-in-Door-Refrigerator-2.webp",
      name: "Product 1",
      price: "250",
      quantity: 50,
      subtotal: "85000",
    },
    {
      key: "2",
      image:
        "https://i.ibb.co.com/JyJKRf1/LG-Insta-View-Door-in-Door-Refrigerator-2.webp",
      name: "Product 2",
      price: "150",
      quantity: 30,
      subtotal: "45000",
    },
  ];

  // Define columns
  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative">
            <Image
              width={80}
              height={80}
              src={record.image}
              alt="productImage"
              className="rounded"
            />
            <button
              className="absolute -top-2 -left-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full"
              onClick={() => console.log("Remove product:", record.key)}
            >
              &times;
            </button>
          </div>
          <span className="font-semibold">{record.name}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <span className="font-semibold">${record.price}</span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <div className="flex rounded overflow-hidden">
          <button className="px-4 py-3 border-l border-t border-b rounded-l border-[#929292]">
            <FiMinus className="size-3" />
          </button>
          <h1 className="border flex justify-center items-center px-5 py-2 text-sm border-[#929292]">
            {record.quantity}
          </h1>
          <button className="px-4 py-3 border-r border-t border-b rounded-r border-[#929292] bg-[#0D3676]">
            <FiPlus className="size-3 text-white" />
          </button>
        </div>
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (text, record) => (
        <span className="font-semibold">${record.subtotal}</span>
      ),
    },
  ];

  // Custom components to apply styles to the table header and body
  const customTableComponents = {
    header: {
      cell: (props) => (
        <th
          {...props}
          style={{
            ...customStyles.tableHeader,
            fontWeight: "bold", // Additional styling for header cells
          }}
        >
          {props.children}
        </th>
      ),
    },
    body: {
      cell: (props) => (
        <td
          {...props}
          style={{
            ...customStyles.tableCell, // Apply padding to body cells
          }}
        >
          {props.children}
        </td>
      ),
    },
  };

  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-400">
          <span>Home</span> / <span>Cart</span>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="shadow px-4 py-8 md:px-16 md:py-8 rounded-lg space-y-8">
          <div className="overflow-x-auto">
            <Table
              columns={columns}
              dataSource={products}
              pagination={false}
              components={customTableComponents} // Apply custom table components for styling
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Return to Shop Button */}
            <button className="w-full md:w-auto px-5 py-2 rounded-lg border flex justify-center items-center gap-3">
              <PiArrowBendUpLeftLight size={20} />
              <span>Return To Shop</span>
            </button>

            {/* Update Cart Button */}
            <button className="w-full md:w-auto px-5 py-2 bg-[#C90739] rounded-xl text-white">
              Update Cart
            </button>
          </div>

          {/* checkout section */}
          <div className="flex justify-end items-center">
            <div className="w-96 border border-[#606060] rounded-xl p-5">
              <h1 className="font-semibold">Cart Total</h1>
              <div className="my-7 space-y-3">
                <div className="flex justify-between items-center ">
                  <h1>Total Fee : </h1>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="border border-[#B3B3B3" />
                <div className="flex justify-between items-center ">
                  <h1>Shipping Fee: </h1>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="border border-[#B3B3B3" />
                <div className="flex justify-between items-center ">
                  <h1>Subtotal Fee : </h1>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>
              <div>
                <Link href="/checkout">
                  <CustomButton border className="w-full">
                    Process to Checkout
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
