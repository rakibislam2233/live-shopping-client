import Container from "@/components/Shared/Container/Container";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import Image from "next/image";
import personImage from "@/assest/banner/banner.png";
import background from "@/assest/banner/background.png";
import star1 from "@/assest/banner/star1.png";
import star2 from "@/assest/banner/star2.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-full md:h-[88vh] bg-gradient-to-r from-[#e4ebeb] to-[#edeaea] overflow-hidden px-5">
      <Container className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {/* Left side - Text and Button */}
        <div className="mt-0 md:mt-40">
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-lg font-semibold text-gray-800">
              Shop with Confidence, Buy with Convenience—Live and Interactive.
            </h1>
            <h2 className="text-3xl md:text-6xl font-semibold text-gray-900">
              Live Shopping at Its Best
            </h2>
            <h1 className="text-3xl md:text-6xl font-semibold text-gray-900">
              {" "}
              Discover, Shop, Enjoy!
            </h1>
            <button className="px-6 py-3 bg-[#c90739] text-white rounded-full flex justify-between items-center gap-2 hover:bg-[#a5062e] transition duration-300">
              <span>View Collection</span>
              <div className="p-1.5 bg-white rounded-full">
                <PiArrowBendUpRightLight className="size-5 text-[#c90739]" />
              </div>
            </button>
          </div>
        </div>

        {/* Right side - Person Image and Stars */}
        <div className="relative flex justify-center items-center">
          {/* Background Image */}
          <Image
            src={background}
            alt="Background Image"
            className="w-auto h-auto max-w-xs md:max-w-lg" // Set max-width for smaller background
            priority
          />

          {/* Person Image (Positioned on top of background image) */}
          <Image
            src={personImage}
            alt="Person"
            className="absolute w-auto h-auto max-w-xs md:max-w-md top-0"
            priority
          />

          {/* Star 1 - Positioned near the person image */}
          <Image
            src={star1}
            alt="Star decoration"
            className="absolute top-[-20px] right-0 w-16 h-16"
            priority
          />

          {/* Star 2 - Positioned at the bottom left */}
          <Image
            src={star2}
            alt="Star decoration"
            className="absolute -bottom-5 md:-bottom-52 left-0 w-16 h-16"
            priority
          />
          <h1 c></h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
