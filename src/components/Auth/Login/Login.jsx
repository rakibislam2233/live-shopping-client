"use client";
import loginImage from "@/assest/auth/login.png";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Form,Checkbox } from "antd";
import CustomInput from "@/utils/CustomInput";
import CustomButton from "@/utils/CustomButton";

const Login = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="w-full p-5">
          <Form
            layout="vertical"
            onFinish={onFinish}
            className="space-y-5"
          >
            {/* Header Section */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Welcome Back</h1>
              <h1>Please enter your details</h1>
            </div>

            {/* Email Input */}
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

            {/* Password Input */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <CustomInput
                isPassword
                icon={HiOutlineLockClosed}
                type="password"
                placeholder="Enter your password"
              />
            </Form.Item>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center">
              <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                <Checkbox>Remember Me</Checkbox>
              </Form.Item>
              <Link href="/forgot-password" className="underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <CustomButton  border className="w-full">LOGIN</CustomButton>
            </Form.Item>

            {/* Register Link */}
            <div className="mt-5 text-center">
              <span>Don't have an account? </span>
              <Link href="/register" className="underline text-[#c90739]">
                Register
              </Link>
            </div>
          </Form>
        </div>

        {/* Image Section */}
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="loginImage" fill className="absolute" />
        </div>
      </div>
    </section>
  );
};

export default Login;
