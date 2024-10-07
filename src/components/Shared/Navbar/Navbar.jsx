import Image from "next/image";
import Container from "../Container/Container";
import logo from "@/assest/logo/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";

import ActiveLink from "./ActiveLink";
const nav = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/category",
    title: "Category",
  },
  {
    path: "/about-us",
    title: "About Us",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
  },
];
const Navbar = () => {
  return (
    <section className="w-full hidden md:block bg-gradient-to-r from-[#e4ebeb] to-[#edeaea] sticky top-0">
      <Container className="flex items-center justify-between gap-5">
        <div className="w-[160px] h-[100px] relative">
          <Image fill src={logo} alt="logo" className="" />
        </div>
        <ul className="h-[48px] flex justify-center items-center bg-white px-16 rounded-full gap-10">
          {nav.map(({ path, title }) => (
            <ActiveLink key={path} destination={path} title={title} />
          ))}
        </ul>
        <div className="flex justify-center items-center gap-5">
          <div>
            <div className="flex items-center gap-1 text-white">
              <IoIosSearch className="size-5" />
              <input
                type="text"
                name="search"
                id="search"
                className="w-full px-3 bg-transparent outline-none"
                placeholder="What are you looking for?"
              />
            </div>
            <hr className="mt-1" />
          </div>
          <div className="border-2 border-[#c90739] p-0.5 rounded-lg">
            <button className="bg-[#c90739] px-5 py-3 flex justify-center items-center gap-5 text-white rounded-md">
              <GoDeviceCameraVideo className="size-5" />
              <span>LIVE STREAM</span>
            </button>
          </div>
          <div className="border-2 border-[#c90739] p-0.5 rounded-lg">
            <button className="bg-[#c90739] px-12 py-3 text-white rounded-md">
              LOGIN
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
