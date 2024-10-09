import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import personImage from "@/assest/about/member2.png";
import background from "@/assest/banner/background.png";
import member1 from "@/assest/about/member1.png";
import member2 from "@/assest/about/member3.png";
import member3 from "@/assest/about/member4.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import FQA from "../Home/FQA/FQA";
import DeliveryInfo from "../Home/DeliveryInfo/DeliveryInfo";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full h-full md:h-[88vh] bg-gradient-to-r from-[#e4ebeb] to-[#edeaea] overflow-hidden px-5">
        <Container className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {/* Left side - Text and Button */}
          <div className="mt-0 md:mt-40">
            <div className="flex gap-3">
              <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-5xl font-semibold">About Us</h1>
              </div>
            </div>
            <h1 className="text-lg mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
              as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, 
            </h1>
          </div>

          {/* Right side - Person Image and Stars */}
          <div className="relative flex justify-center items-center">
            {/* Background Image */}
            <Image
              src={background}
              alt="Background Image"
              className="w-auto h-auto max-w-xs md:max-w-lg " // Set max-width for smaller background
              priority
            />

            {/* Person Image (Positioned on top of background image) */}
            <Image
              src={personImage}
              alt="Person"
              className="absolute w-auto h-auto max-w-xs md:max-w-md top-0 bottom-0"
              priority
            />
          </div>
        </Container>
      </section>
      <div className="w-full  max-w-[1100px] mx-auto flex gap-10 my-32">
        <div className="w-full bg-gray-100 rounded-xl">
          <div className="w-full h-96 relative -mt-16">
            <Image
              src={member1}
              alt="member1"
              fill
              className="absolute w-full h-full object-fill"
            />
          </div>
          <div className="flex justify-between items-end p-5 bg-[#0C316B] text-white rounded-b-xl">
            <div>
              <h1>Rakib Islam</h1>
              <h1>Full Stack Developer</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FiFacebook />
              <FiLinkedin />
              <FiInstagram />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full h-[450px] relative -mt-16">
            <Image src={member2} alt="member1" fill className="absolute" />
          </div>
          <div className="flex justify-between items-end p-5 bg-[#0C316B] text-white rounded-b-xl">
            <div>
              <h1>Rakib Islam</h1>
              <h1>Full Stack Developer</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FiFacebook />
              <FiLinkedin />
              <FiInstagram />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-96 relative -mt-16">
            <Image src={member3} alt="member1" fill className="absolute" />
          </div>
          <div className="flex justify-between items-end p-5 bg-[#0C316B] text-white rounded-b-xl">
            <div>
              <h1>Rakib Islam</h1>
              <h1>Full Stack Developer</h1>
            </div>
            <div className="flex gap-2 items-center">
              <FiFacebook />
              <FiLinkedin />
              <FiInstagram />
            </div>
          </div>
        </div>
      </div>
      <FQA/>
      <DeliveryInfo/>
    </>
  );
};

export default AboutUs;
