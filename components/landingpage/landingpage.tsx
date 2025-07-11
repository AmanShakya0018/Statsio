import Navbar from "./navbar-shrink";
import HeroSection from "./herosection";
// import FeaturesSection from "./featuressection";
// import FAQ from "./faq";
// import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      {/* <FeaturesSection />
      <FAQ />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
