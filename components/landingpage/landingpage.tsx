import FeaturesSection from './featuressection'
import HeroSection from './hero-section'
import FAQ from './faq'
import Navbar from './navbar-shrink'
import Footer from './footer'


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default LandingPage