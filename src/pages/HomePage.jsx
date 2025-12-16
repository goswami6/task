import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ClientsMarquee from '../components/ClientsMarquee'
import WhoWeAre from '../components/WhoWeAre'
import IndustriesWeServe from '../components/IndustriesWeServe'
import WhyChooseUs from '../components/WhyChooseUs'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import Testimonials from '../components/TestimonialSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Services />
    <ClientsMarquee />
    <WhoWeAre />
    <IndustriesWeServe />
    <WhyChooseUs />
    <Portfolio />
    <TechStack />
    <Testimonials />
    <FAQSection />
    <ContactSection />
    
    </>
  )
}

export default HomePage