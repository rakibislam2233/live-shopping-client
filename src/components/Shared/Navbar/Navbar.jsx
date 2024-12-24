"use client"
import { useState } from "react";
import Image from "next/image";
import Container from "../Container/Container";
import logo from "@/assest/logo/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import CustomButton from "@/utils/CustomButton";
import { Drawer } from "antd";

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
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#e4ebeb] to-[#edeaea]">
      {/* Main container for large screens */}
      <Container className="hidden md:flex items-center justify-between gap-5 py-4">
        <Link href="/">
          <div className="w-[160px] h-[100px] relative">
            <Image fill src={logo} alt="logo" className="" />
          </div>
        </Link>

        {/* Navigation links */}
        <ul className="h-[48px] flex justify-center items-center bg-[#F5F7F7] px-16 rounded-full gap-10">
          {nav.map(({ path, title }) => (
            <ActiveLink key={path} destination={path} title={title} />
          ))}
        </ul>

        {/* Search, Live Stream, and Login */}
        <div className="flex justify-center items-center gap-5">
          <div className="mt-5">
            <div className="flex items-center">
              <IoIosSearch size={22} />
              <input
                type="text"
                name="search"
                id="search"
                className="w-full px-3 bg-transparent outline-none"
                placeholder="What are you looking for?"
              />
            </div>
            <div className="w-full h-[1px] bg-[#90A3C0] my-2" />
          </div>
          <div>
            <CustomButton border>
              <GoDeviceCameraVideo className="size-5" />
              <span>LIVE STREAM</span>
            </CustomButton>
          </div>
          <div>
            <Link href="/login" className="w-full">
              <CustomButton border>Login</CustomButton>
            </Link>
          </div>
        </div>
      </Container>

      {/* Mobile Navbar */}
      <Container className="flex md:hidden items-center justify-between px-2 py-4">
        <Link href="/">
          <div className="w-[120px] h-[60px] relative">
            <Image fill src={logo} alt="logo" className="" />
          </div>
        </Link>

        {/* Hamburger Menu for Drawer */}
       <div className="bg-[#C90739] text-white p-3 rounded-md">
       <HiOutlineMenu size={28} onClick={showDrawer} className="cursor-pointer" />
       </div>

        {/* Drawer for Mobile Navigation */}
        <Drawer title="Menu" placement="right" onClose={closeDrawer} open={drawerVisible}>
          <ul className="space-y-4">
            {nav.map(({ path, title }) => (
              <li key={path} className="text-lg">
                <Link href={path} onClick={closeDrawer}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <div className="mb-4">
              <CustomButton border>
                <GoDeviceCameraVideo className="size-5" />
                <span>LIVE STREAM</span>
              </CustomButton>
            </div>
            <Link href="/login" className="w-full">
              <CustomButton border>Login</CustomButton>
            </Link>
          </div>
        </Drawer>
      </Container>
    </section>
  );
};

export default Navbar;
