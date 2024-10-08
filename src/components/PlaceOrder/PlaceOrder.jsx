import Image from "next/image";
import Container from "../Shared/Container/Container";
import placeOrder from "@/assest/order/order.png";
import tick from "@/assest/order/tick.png";
const PlaceOrder = () => {
  return (
    <section className="px-5 md:px-0">
      <Container className=" h-full min-h-screen flex flex-col justify-center items-center py-28 gap-10">
        <div className="w-full flex justify-center items-center gap-5">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0D3676]">
            Congratulation
          </h1>
          <Image width={70} height={70} src={tick} alt="image" />
        </div>
        <Image width={400} height={300} src={placeOrder} alt=""/> 
        <div className="border-2 border-[#c90739] p-0.5 rounded-lg">
                <button className="w-full  bg-[#c90739] px-12 py-3 text-white rounded-md">
                Continue Shopping
                </button>
              </div>
      </Container>
    </section>
  );
};

export default PlaceOrder;
