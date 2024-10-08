import Container from "@/components/Shared/Container/Container";
import { RxArrowTopRight } from "react-icons/rx";
import TopCollectionsHeader from "./TopCollectionsHeader";
import collection1 from "@/assest/collection/collection1.png";
import collection2 from "@/assest/collection/collection2.png";
import collection3 from "@/assest/collection/collection3.png";
import collection4 from "@/assest/collection/collection1.png";
import Image from "next/image";
const TopCollections = () => {
  const collections = [
    {
      id: 1,
      image: collection2,
    },
    {
      id: 2,
      image: collection1,
    },
    {
      id: 3,
      image: collection3,
    },
    {
      id: 4,
      image: collection4,
    },
  ];
  return (
    <section className="w-full h-full md:h-[700px] mt-24 ">
      <Container className="px-5 md:px-0">
        <TopCollectionsHeader />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          {
            collections.map((collection) => (
            <div key={collection.id} className="w-full h-full group">
               <div className="relative w-full h-96 group-hover:h-[500px] transition-all duration-500 cursor-pointer rounded-2xl">
                <Image
                  className="w-full h-full object-cover rounded-2xl absolute"
                  src={collection.image}
                  alt="collection"
                  fill
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 duration-500 transition-all size-12 bg-white rounded-full flex justify-center items-center">
                  <RxArrowTopRight size={24} className="text-[#0D3676]"/>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default TopCollections;
