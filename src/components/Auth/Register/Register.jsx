import loginImage from "@/assest/auth/login.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
    <div className="w-full  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
      <div className="w-full h-[500px] relative">
        <Image src={loginImage} alt="loginImage" fill className="absolute" />
      </div>
      <div className="w-full p-5">
        <form action="">
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-semibold">Create an Account</h1>
            <h1>Hello there, Let’s start your journey with us.</h1>
          </div>
          <div className="mt-5">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 rounded-lg border"
            />
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 rounded-lg border"
            />
          </div>
          <div className="mt-5">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">I accept the Terms of Service and Privacy Policy.</label>
          </div>
          </div>
          <div className="mt-5">
          <div className="w-full border-2 border-[#c90739] p-0.5 rounded-lg">
            <button className="w-full bg-[#c90739] px-8 py-3 text-white rounded-md">
              Sign Up
            </button>
          </div>
          </div>
          <div className="mt-5">
           <button className="w-full px-8 py-3 border rounded-md flex justify-center items-center gap-1"><FcGoogle size={24}/> <span>Login With Google</span></button>
          </div>
          <div className="mt-5 text-center">
            <span>Already have an account? </span>
            <a href="/login" className="underline text-[#c90739]">Log In</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Register