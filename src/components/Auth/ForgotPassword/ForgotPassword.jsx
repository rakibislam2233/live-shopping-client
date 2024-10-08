import loginImage from "@/assest/auth/login.png";
import Image from "next/image";
const ForgotPassword = () => {
  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="loginImage" fill className="absolute" />
        </div>
        <div className="w-full p-5">
          <form action="">
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Forgot Password</h1>
              <h1>Please enter your Email to reset your password.</h1>
            </div>
            <div className="mt-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full px-3 py-2 rounded-lg border"
              />
            </div>
            <div className="mt-5">
              <div className="w-full border-2 border-[#c90739] p-0.5 rounded-lg">
                <button className="w-full bg-[#c90739] px-8 py-3 text-white rounded-md">
                  Get OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
