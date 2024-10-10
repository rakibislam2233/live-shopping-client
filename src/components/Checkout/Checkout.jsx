import Image from "next/image";
import Container from "../Shared/Container/Container";
import DeliveryInfoCard from "./DeliveryInfoCard";
import visa from "@/assest/cardInfo/visa.png";
import master from "@/assest/cardInfo/mastercard.png";
import paypal from "@/assest/cardInfo/paypal.png";
import google from "@/assest/cardInfo/google.png";
import CustomButton from "@/utils/CustomButton";
import Link from "next/link";
const Checkout = () => {
  const product = {
    key: "1",
    image:
      "https://i.ibb.co.com/JyJKRf1/LG-Insta-View-Door-in-Door-Refrigerator-2.webp",
    name: "Product 1",
    price: "250",
    quantity: 50,
    subtotal: "85000",
  };
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-400">
          <span>Home</span> / <span>Checkout</span>
        </div>
        <div className="border shadow rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* delivery address information */}
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-semibold">
                  Select delivery address
                </h1>
              </div>
              <Link href="/add-address">
                <CustomButton border>Add New Address</CustomButton>
              </Link>
            </div>
            <div className="flex flex-col gap-5 my-10">
              <DeliveryInfoCard />
              <DeliveryInfoCard />
              <DeliveryInfoCard />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="w-full max-w-xl  p-5 space-y-4">
              {/* add to card details */}
              <div className="flex justify-between items-center">
                <div className="flex  items-center gap-2">
                  <Image
                    width={70}
                    height={70}
                    className="rounded"
                    src={product.image}
                    alt={product.name}
                  />
                  <h1>{product.name}</h1> (2)
                </div>
                <h1 className="font-semibold">${product.price}</h1>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex  items-center gap-2">
                  <Image
                    width={70}
                    height={70}
                    className="rounded"
                    src={product.image}
                    alt={product.name}
                  />
                  <h1>{product.name}</h1> (2)
                </div>
                <h1 className="font-semibold">${product.price}</h1>
              </div>
              <div className="border-b border-gray-400"></div>
              {/* total,sub total,shipping fee information */}
              <div className="flex justify-between items-center gap-5">
                <h1 className="text-gray-600">Subtotal:</h1>
                <h1 className="font-semibold">${product.subtotal}</h1>
              </div>
              <div className="border-b border-gray-400"></div>
              <div className="flex justify-between items-center gap-5">
                <h1 className="text-gray-600">Shipping:</h1>
                <h1 className="font-semibold">${product.subtotal}</h1>
              </div>
              <div className="border-b border-gray-400"></div>
              <div className="flex justify-between items-center gap-5">
                <h1 className="text-gray-600">Total:</h1>
                <h1 className="font-semibold">${product.subtotal}</h1>
              </div>
              {/* Bank information */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full ring-2 ring-[#0D3676]"></div>
                  <h1 className="font-semibold">Bank</h1>
                </div>
                <Image width={50} height={40} src={visa} alt="visa" />
                <Image width={40} height={40} src={paypal} alt="visa" />
                <Image width={50} height={40} src={master} alt="visa" />
                <Image width={50} height={40} src={google} alt="visa" />
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="size-4 rounded-full ring-2 ring-[#0D3676]"></div>
                <h1 className="font-semibold">Cash On Delivery</h1>
              </div>
              <CustomButton border className="w-full">
                Pay and Place Order
              </CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
