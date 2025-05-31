import FeaturesSection from './featuressection'
import Footer from './footer'
import HeroSection from './hero-section'
import FAQ from './faq'
import Navbar from './navbar-shrink'


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