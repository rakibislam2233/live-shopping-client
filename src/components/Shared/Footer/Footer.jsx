import logo from "@/assest/logo/logo.png";
import Container from "../Container/Container";
import { MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import { FiFacebook, FiLinkedin, FiVoicemail } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#3D5E91] px-5 md:px-0">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-16 ">
        <div className="space-y-4 text-center md:text-start">
          <div className="w-[160px] h-[100px] relative mx-auto md:mx-0">
            <Image fill src={logo} alt="logo" />
          </div>
          <h1 className="text-lg text-white">
            Gone are the days of struggling to get your CV to potential
            employers. Create a Pro-file, share your Pro-file, rack up the
            reviews
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-5">
            <div className="bg-white size-12 rounded-full flex justify-center items-center">
              <FiFacebook className="text-[#0D3676]" size={22} />
            </div>
            <div className="bg-white size-12 rounded-full flex justify-center items-center">
              <FiLinkedin className="text-[#0D3676]" size={22} />
            </div>

            <div className="bg-white size-12 rounded-full flex justify-center items-center">
              <PiWhatsappLogo className="text-[#0D3676]" size={22} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white text-center md:text-start">
            Account
          </h1>
          <ul className="flex flex-col text-center md:text-start gap-4 mt-5">
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Login/Register
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white text-center md:text-start">Quick Link</h1>
          <ul className="flex flex-col gap-4 mt-5 text-center md:text-start">
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Terms of Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#0D3676]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-white text-center md:text-start">Contact</h1>
          <ul className="flex flex-col gap-4 mt-5 text-center md:text-start">
            <li className="flex justify-center md:justify-start items-center gap-2 text-white">
              <MdOutlineEmail size={20} />
              <span className="ml-2">info@example.com</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 text-white">
              <MdLocalPhone size={20} />
              <span className="ml-2">+8801319101179</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 text-white">
              <MdLocationOn size={20} />
              <span className="ml-2">Dhaka Bangladesh</span>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
