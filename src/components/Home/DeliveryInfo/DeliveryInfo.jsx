import Container from "@/components/Shared/Container/Container";
import delivery from "@/assest/delivery/delivery.png";
import support from "@/assest/delivery/support.png";
import money from "@/assest/delivery/money.png";
import Image from "next/image";
const DeliveryInfo = () => {
  return (
    <div className="w-full my-24">
      <Container className="px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="w-full h-56 rounded-xl border-r-4 border-l-4 border-[#0D3676] bg-[#E7EBF1] flex justify-center items-center">
          <div className="space-y-2 text-center">
            <div className="size-24 rounded-full bg-[#B4C1D5] mx-auto  flex  items-center justify-center">
              <Image
                src={delivery}
                alt="delivery image"
                width={45}
                height={45}
              />
            </div>
            <h1 className="text-2xl font-semibold">Fast Delivery</h1>
            <h1 className="text-lg">Free delivery for all orders over $50</h1>
          </div>
        </div>
        <div className="w-full h-56 rounded-xl border-r-4 border-l-4 border-[#0D3676] bg-[#E7EBF1] flex justify-center items-center">
          <div className="space-y-2 text-center">
          <div className="size-24 rounded-full bg-[#B4C1D5] mx-auto  flex  items-center justify-center">
              <Image
                src={support}
                alt="support image"
                width={45}
                height={45}
              />
            </div>
            <h1 className="text-2xl font-semibold">24/7 Customer Services</h1>
            <h1 className="text-lg">Friendly 24/7 customer support</h1>
          </div>
        </div>
        <div className="w-full h-56 rounded-xl border-r-4 border-l-4 border-[#0D3676] bg-[#E7EBF1] flex justify-center items-center">
          <div className="space-y-2 text-center">
          <div className="size-24 rounded-full bg-[#B4C1D5] mx-auto  flex  items-center justify-center">
              <Image
                src={money}
                alt="money image"
                width={45}
                height={45}
              />
            </div>
            <h1 className="text-2xl font-semibold">Money Back Guarantee</h1>
            <h1 className="text-lg">We return money within 30 days</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DeliveryInfo;
