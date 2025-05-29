import FeaturesSection from './featuressection'
import Footer from './footer'
import HeroSection from './hero-section'
import NavbarResizeable from './navbar-resizeable'
import FAQ from './faq'


const LandingPage = () => {
  return (
    <>
      <NavbarResizeable />
      <HeroSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default LandingPage