"use client";
import React, { useState } from "react";
import { Form, Input, Button, Breadcrumb, Avatar } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Container from "../Shared/Container/Container";

const Profile = () => {
  // State to track edit mode and form values
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  // Mock user data (replace with actual data from the backend)
  const userData = {
    firstName: "Labu",
    lastName: "Basahr",
    email: "labu@example.com",
    address: "123 Street, City, Country",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  // Function to handle editing state
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Initialize form fields with user data
  const onFinish = (values) => {
    console.log("Updated values:", values);
  };

  return (
    <section className="w-full px-5 md:px-0 py-10 bg-gradient-to-r from-[#e4ebeb] to-[#edeaea]">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6 text-gray-400">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>My Account</Breadcrumb.Item>
        </Breadcrumb>

        {/* Profile Form */}
        <div className="w-full max-w-3xl mx-auto px-8 py-6 rounded-lg ">
          <div className="flex items-center mb-8">
            <Avatar size={100} icon={<UserOutlined />} />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Labu Basahr</h2>
            </div>
          </div>

          <Form
            form={form}
            name="profileForm"
            layout="vertical"
            initialValues={userData}
            onFinish={onFinish}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Name"
                  className="w-full px-3 py-2"
                  readOnly={!isEditing} // Read-only if not in edit mode
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Name"
                  className="w-full px-3 py-2"
                  readOnly={!isEditing} // Read-only if not in edit mode
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter Email"
                  className="w-full px-3 py-2"
                  readOnly={!isEditing} // Read-only if not in edit mode
                />
              </Form.Item>

              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input
                  prefix={<HomeOutlined />}
                  placeholder="Type Address"
                  className="w-full px-3 py-2"
                  readOnly={!isEditing} // Read-only if not in edit mode
                />
              </Form.Item>

              {isEditing && (
                <>
                  <Form.Item
                    name="currentPassword"
                    label="Current Password"
                    className="col-span-full"
                    rules={[
                      {
                        required: isEditing,
                        message: "Please input your current password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Old Password"
                      className="w-full px-3 py-2"
                    />
                  </Form.Item>

                  <Form.Item
                    name="newPassword"
                    className="col-span-full"
                    label="New Password"
                    rules={[
                      {
                        required: isEditing,
                        message: "Please input your new password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Enter new Password"
                      className="w-full px-3 py-2"
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    className="col-span-full"
                    label="Confirm Password"
                    rules={[
                      {
                        required: isEditing,
                        message: "Please confirm your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Confirm Password"
                      className="w-full px-3 py-2"
                    />
                  </Form.Item>
                </>
              )}
            </div>

            {/* Buttons */}
            <Form.Item className="text-right mt-6">
              {isEditing ? (
                <div className="flex gap-5 justify-end">
                  <button
                    onClick={toggleEdit}
                    className="border-2 border-white p-0.5 rounded-lg"
                  >
                    <button className="bg-white px-12 py-2 text-[#c90739] rounded-md">
                      Cancel
                    </button>
                  </button>
                  <button
                    onClick={toggleEdit}
                    className="border-2 border-[#c90739] p-0.5 rounded-lg"
                  >
                    <button className="bg-[#c90739] px-12 py-2 text-white rounded-md">
                      Save Changes
                    </button>
                  </button>
                </div>
              ) : (
                <div className="flex justify-end items-center">
                  <div
                    onClick={toggleEdit}
                    className="border-2 border-[#c90739] p-0.5 rounded-lg"
                  >
                    <button className="bg-[#c90739] px-12 py-2 text-white rounded-md">
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </Form.Item>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
