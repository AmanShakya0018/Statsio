import FeaturesSection from "./featuressection";
import HeroSection from "./hero-section";
import FAQ from "./faq";
import Navbar from "./navbar-shrink";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
