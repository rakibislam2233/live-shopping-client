"use client";
import loginImage from "@/assest/auth/login.png";
import CustomButton from "@/utils/CustomButton";
import CustomInput from "@/utils/CustomInput";
import { Form } from "antd";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="loginImage" fill className="absolute" />
        </div>
        <div className="w-full p-5">
          <Form layout="vertical" onFinish={onFinish}>
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Forgot Password</h1>
              <h1>Please enter your Email to reset your password.</h1>
            </div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address!",
                  type: "email",
                },
              ]}
            >
              <CustomInput
                icon={HiOutlineMail}
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Item>
            <Form.Item>
              <CustomButton  border className="w-full"> Get OTP</CustomButton>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
