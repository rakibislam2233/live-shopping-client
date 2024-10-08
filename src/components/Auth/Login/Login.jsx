import loginImage from "@/assest/auth/login.png";
import Image from "next/image";

const Login = () => {
  return (
    <section className="w-full h-screen px-5 md:px-0 flex justify-center items-center">
      <div className="w-full  max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
        <div className="w-full p-5">
          <form action="">
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold">Welcome Back</h1>
              <h1>Please enter your details</h1>
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
            <div className="mt-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
             <h1 className="underline">Forgot password?</h1>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-[#c90739] px-12 py-3 text-white rounded-md"
              >
                LOGIN
              </button>
            </div>
            <div className="mt-5 text-center">
              <span>Don't have an account? </span>
              <a href="/register" className="underline text-[#c90739]">Register</a>
            </div>
          </form>
        </div>
        <div className="w-full h-[500px] relative">
          <Image src={loginImage} alt="loginImage" fill className="absolute" />
        </div>
      </div>
    </section>
  );
};

export default Login;
