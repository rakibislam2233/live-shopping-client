import {
  PiArrowBendUpLeftLight,
  PiArrowBendUpRightLight,
} from "react-icons/pi";
import Container from "../Shared/Container/Container";
import live1 from "@/assest/live/live1.png";
import live2 from "@/assest/live/live2.png";
import live3 from "@/assest/live/live3.png";
import Image from "next/image";
const Recommended = () => {
  const lives = [
    {
      id: 1,
      image: live1,
    },
    {
      id: 2,
      image: live2,
    },
    {
      id: 3,
      image: live3,
    },
  ];
  return (
    <section className="w-full my-16 bg-[#E7EBF1] py-16">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-[#D43961] font-semibold">
                Live Streams
              </h1>
              <h1 className="text-xl md:text-5xl font-semibold">
                Recommended for you.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="size-11 flex justify-center items-center  bg-[#FAE6EB] text-[#C90739] rounded-full">
              <PiArrowBendUpLeftLight size={24} />
            </button>
            <button className="size-11 flex justify-center items-center  bg-[#C90739] text-white rounded-full">
              <PiArrowBendUpRightLight size={24} />
            </button>
          </div>
        </div>
        <div className="border-b border-[#C6D0DF] my-6"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {lives.map((live) => (
              <div key={live.id} className="w-full h-56 relative">
                <Image fill src={live.image} alt="Live Stream" className="w-full h-full absolute object-cover rounded-lg" />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Recommended;
