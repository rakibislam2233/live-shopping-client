import loginImage from "@/assest/auth/login.png";
import Image from "next/image";

const ResetPassword = () => {
  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
    <div className="w-full  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
      <div className="w-full h-[500px] relative">
        <Image src={loginImage} alt="loginImage" fill className="absolute" />
      </div>
      <div className="w-full p-5">
        <form action="">
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-semibold">Reset Password</h1>
            <h1>Your password must be 8-10 character long.</h1>
          </div>
          <div className="mt-5">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter New Password"
              required
              className="w-full px-3 py-2 rounded-lg border"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="email">Confirm Password</label>
            <input
              type="password"
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
              Reset Password
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default ResetPassword