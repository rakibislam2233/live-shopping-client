import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import SubNavbar from "@/components/Shared/Navbar/SubNavbar";
const layout = ({ children }) => {
  return (
    <main>
      <nav>
        <SubNavbar />
        <Navbar />
      </nav>
      {children}
      <Footer />
    </main>
  );
};

export default layout;