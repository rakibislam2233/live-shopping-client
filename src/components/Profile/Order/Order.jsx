"use client";
import React, { useState } from "react";
import { Table, Tag, Space, Breadcrumb, Modal, Button } from "antd";
import Container from "@/components/Shared/Container/Container";
import { PiEyeBold } from "react-icons/pi";

// Sample data for table
const dataSource = [
  {
    key: "1",
    orderNo: "#1458118",
    totalProducts: 3,
    price: "$750",
    date: "20-Dec-2024, 3:00 PM",
    status: "Processing",
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
  },
  {
    key: "2",
    orderNo: "#1458118",
    totalProducts: 3,
    price: "$750",
    date: "20-Dec-2024, 3:00 PM",
    status: "Delivered",
    customer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "098-765-4321",
    },
  },
  // Add more orders as needed...
];

// Define table columns
const columns = (onView) => [
  {
    title: "Order No",
    dataIndex: "orderNo",
    key: "orderNo",
    responsive: ["md"], // only show on medium or larger screens
  },
  {
    title: "Total Products",
    dataIndex: "totalProducts",
    key: "totalProducts",
    responsive: ["md"], // only show on medium or larger screens
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      if (status === "Processing") color = "bg-[#F7CD39]";
      if (status === "Delivered") color = "bg-[#5181F8]";
      if (status === "Cancelled") color = "bg-[#C90739]";
      return (
        <button className={`px-5 py-2 ${color} rounded-lg text-white`}>
          {status.toUpperCase()}
        </button>
      );
    },
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <button onClick={() => onView(record)}>
          <PiEyeBold className="text-[#606060]" size={24} />
        </button>
      </Space>
    ),
  },
];

const Order = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const showModal = (order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6 text-gray-400">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
          <Breadcrumb.Item>Order</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-2xl font-semibold my-8">Order History</h1>

        {/* Ant Design Table with responsive scroll */}
        <Table
          dataSource={dataSource}
          columns={columns(showModal)}
          pagination={false}
          scroll={{ x: "max-content" }} // enable horizontal scrolling
        />

        {/* Modal for showing order details */}
        <Modal
          title="Order Details"
          open={isModalVisible}
          onOk={handleOk}
          centered
          onCancel={handleCancel}
        >
          {selectedOrder && (
            <div>
              <p>
                <strong>Order No:</strong> {selectedOrder.orderNo}
              </p>
              <p>
                <strong>Total Products:</strong> {selectedOrder.totalProducts}
              </p>
              <p>
                <strong>Price:</strong> {selectedOrder.price}
              </p>
              <p>
                <strong>Date:</strong> {selectedOrder.date}
              </p>
              <p>
                <strong>Status:</strong> {selectedOrder.status}
              </p>
              <h3>Customer Information</h3>
              <p>
                <strong>Name:</strong> {selectedOrder.customer.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedOrder.customer.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedOrder.customer.phone}
              </p>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default Order;
