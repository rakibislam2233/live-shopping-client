import notFound from "@/assest/404Page/404.png";
import Image from "next/image";
const NotFound = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-semibold text-center">
          Sorry, Page Not Found!
        </h1>
       <div className="flex justify-center items-center py-5">
       <button className="border-2 border-[#c90739] p-0.5 rounded-lg">
          <button className="bg-[#c90739] px-12 py-3 text-white rounded-md">
          Back to home
          </button>
        </button>
       </div>
        <Image src={notFound} alt="not-found" width={500} height={400} />
      </div>
    </section>
  );
};

export default NotFound;
