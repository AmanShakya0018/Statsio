// import FeaturesSection from './featuressection'
// import HeroSection from './herosection'
// import Footer from './footer'
// import Navbar from './navbar'
import HeroSection from './hero-section'
import NavbarResizeable from './navbar-resizeable'
import FAQ from './faq'


const LandingPage = () => {
  return (
    <>
      <NavbarResizeable />
      <HeroSection />
      <FAQ />
      {/* <FeaturesSection />
      <Footer /> */}
    </>
  )
}

export default LandingPage