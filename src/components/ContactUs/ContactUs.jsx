"use client";
import { Breadcrumb, Form, Input, Button } from "antd";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Container from "../Shared/Container/Container";

const ContactUs = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6 text-gray-400">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb>

        {/* Contact Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left Section */}
          <div className="md:col-span-5 bg-[#E7EBF1] p-10 rounded-2xl">
            <div className="mb-16 flex gap-5">
              <div className="bg-[#D43961] p-2 rounded-full size-14 flex justify-center items-center">
                <IoMdCall className="text-white" size={20} />
              </div>
              <div className="mt-2">
                <h1 className="text-gray-800  text-xl font-semibold">
                  Call To Us
                </h1>
                <div className="space-y-4 mt-7">
                  <p className="text-gray-500 text-lg">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-gray-800 font-medium ">
                    Phone: +156343-453233
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-[#929292] my-5"></div>
            <div className="mb-6 flex gap-5">
              <div className="bg-[#D43961] p-2 rounded-full size-14 flex justify-center items-center">
                <IoMdMail className="text-white" size={20} />
              </div>
              <div className="mt-2">
                <h1 className="text-gray-800  text-xl font-semibold">
                  Send us email
                </h1>
                <div className="space-y-4 mt-7">
                  <p className="text-gray-500 text-lg">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-gray-800 font-medium ">
                    Email: rakib2020.tkg@gmail.com
                  </p>
                  <p className="text-gray-800 font-medium">
                    Email: Support@Website.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:col-span-7 bg-white p-6 rounded-md shadow-md">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* First Name */}
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Name"
                  className="w-full px-3 py-2"
                />
              </Form.Item>

              {/* Last Name */}
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Name"
                       className="w-full px-3 py-2"
                />
              </Form.Item>

              {/* Email */}
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
                  prefix={<MailOutlined className="text-gray-400" />}
                  placeholder="Enter Email"
                      className="w-full px-3 py-2"
                />
              </Form.Item>

              {/* Phone Number */}
              <Form.Item
                name="phone"
                label="Your Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="text-gray-400" />}
                  placeholder="Number"
                       className="w-full px-3 py-2"
                />
              </Form.Item>

              {/* Message */}
              <Form.Item
                name="message"
                label="Your Message"
                className="md:col-span-2"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea
                  placeholder="Write Now..."
                  rows={5}
                      className="w-full px-3 py-2"
                />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item className="md:col-span-2 flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-red-500 text-white"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
