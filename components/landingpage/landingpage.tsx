// import FAQ from './faq'
// import FeaturesSection from './featuressection'
// import HeroSection from './herosection'
// import Footer from './footer'
// import Navbar from './navbar'
import HeroSection from './hero-section'
import { NavbarDemo } from './navbar-resizeable'


const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarDemo />
      <HeroSection />
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-red-900'>
        <p>hi</p>
      </div>
      {/* <HeroSection />
      <FeaturesSection />
      <FAQ />
      <Footer /> */}
    </>
  )
}

export default LandingPage