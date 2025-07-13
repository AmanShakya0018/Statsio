import HeroSection from "./herosection";
import FAQ from "./faq";
import Navbar from "./navbar-shrink";
import Footer from "./footer";
import FeaturesBlock from "../features/features-block";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesBlock />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
