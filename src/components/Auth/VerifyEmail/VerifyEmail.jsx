"use client";
import { useState } from "react";
import loginImage from "@/assest/auth/login.png";
import Image from "next/image";
import OtpInput from "react-otp-input";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your OTP verification logic here
    console.log("Entered OTP:", otp);
    // You can call an API or perform other actions with the OTP
  };

  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="w-full p-5">
          <form onSubmit={handleSubmit}>
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Verify Email</h1>
              <h1>Please check your email and enter the OTP code</h1>
            </div>

            {/* OTP Input */}
            <div className="mt-5 flex justify-center">
              <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0 1rem",
                    fontSize: "1.5rem",
                    borderBottom: "1px solid #4E4E4E",
                  }}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-[#c90739] px-12 py-3 text-white rounded-md"
              >
                Verify OTP
              </button>
            </div>
            {/* Resend Section */}
            <div className="mt-5 flex justify-between items-center">
              <span className="text-gray-600">Didn’t receive code? </span>
              <a href="#" className="underline text-[#c90739]">
                Resend
              </a>
            </div>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="loginImage" fill className="absolute" />
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
