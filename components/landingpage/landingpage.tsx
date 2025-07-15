import HeroSection from "./herosection";
import FAQ from "./faq";
import Navbar from "./navbar-shrink";
import Footer from "./footer";
import CtaSection from "./ctasection";
import FeaturesBlock from "../features/features-block";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesBlock />
      <FAQ />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
