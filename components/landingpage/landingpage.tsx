import HeroSection from "./herosection";
import FAQ from "./faq";
import Navbar from "./navbar-shrink";
import Footer from "./footer";
import FeaturesBlock from "../features/features-block";
import CtaSection from "./ctasection";

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
