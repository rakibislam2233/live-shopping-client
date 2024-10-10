"use client";
import loginImage from "@/assest/auth/login.png";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Form, Checkbox } from "antd";
import CustomInput from "@/utils/CustomInput";
import CustomButton from "@/utils/CustomButton";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
const Register = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        {/* Image Section */}
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="Register Image" fill className="absolute" />
        </div>

        {/* Form Section */}
        <div className="w-full p-5">
          <Form layout="vertical" onFinish={onFinish} className="space-y-5">
            {/* Header Section */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Create an Account</h1>
              <h1>Hello there, Let’s start your journey with us.</h1>
            </div>

            {/* Name Input */}
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <CustomInput
              icon={HiUser}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Item>

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
              icon={HiOutlineLockClosed}
                isPassword
                type="password"
                placeholder="Enter your password"
              />
            </Form.Item>

            {/* Terms and Conditions */}
            <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("You must accept the Terms and Conditions"),
                },
              ]}
            >
              <Checkbox>
                I accept the Terms of Service and Privacy Policy.
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <CustomButton border className="w-full">SIGN UP</CustomButton>
            </Form.Item>

            {/* Google Login */}
            <div className="mt-5">
              <button className="w-full px-8 py-3 border rounded-md flex justify-center items-center gap-2">
                <FcGoogle size={24} /> <span>Sign Up with Google</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-5 text-center">
              <span>Already have an account? </span>
              <Link href="/login" className="underline text-[#c90739]">
                Log In
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
