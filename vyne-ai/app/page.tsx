import Divider from "./_components/Divider";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Features from "./_components/LandingPage/Features/Features";
import SvgPath from "./_components/SvgPath";
import Working from "./_components/Working";

const page = () => {
  return (
    <div className="space-y-30">
      <Hero />
      <Working/>
      <Features />
      <Footer/>
    </div>
  );
};

export default page;
