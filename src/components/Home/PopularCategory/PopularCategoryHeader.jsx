import { PiArrowBendUpLeftLight } from "react-icons/pi";
import { PiArrowBendUpRightLight } from "react-icons/pi";
const PopularCategoryHeader = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-[#D43961] font-semibold">Category</h1>
            <h1 className="text-5xl font-semibold">Browse By Category</h1>
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
    </section>
  );
};

export default PopularCategoryHeader;
