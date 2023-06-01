import React from 'react'
import HeroSection from './components/HeroSection'
import WhyChooseUsSection from './components/WhyChooseUs'
import MeetTheOwnerSection from './components/MeetTheOwnerSection'
import TestimonialsSection from './components/TestimonialsSection'
import InstagramBannerSection from './components/InstagramBannerSection'
import ContactSection from  './components/ContactSection'
import Locations from './components/Locations'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <InstagramBannerSection />
      <MeetTheOwnerSection />
      <TestimonialsSection />
      <Locations />
      <ContactSection />
      <Footer />
    </div>
  )
}
