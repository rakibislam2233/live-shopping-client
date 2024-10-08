import dynamic from "next/dynamic";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SubNavbar from "@/components/Shared/Navbar/SubNavbar";

// Dynamically import the NotFound component
const NotFound = dynamic(() => import("@/components/NotFound/NotFound"), {
  ssr: false, // Optional: Set to `false` if you want to disable server-side rendering for this component
});

const Page = () => {
  return (
    <>
      <SubNavbar />
      <Navbar />
      <NotFound />
      <Footer />
    </>
  );
};

export default Page;
