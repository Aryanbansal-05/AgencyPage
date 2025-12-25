import { useState } from 'react';
import Navbar from './Landingpage/Navbar';
import Hero from './Landingpage/Hero';
import Services from './Landingpage/Services';
import Portfolio from './Landingpage/Portfolio';
import Testimonials from './Landingpage/Testimonials';
import Contact from './Landingpage/Contact';
import Footer from './Landingpage/Footer';
import SiteNotice from './Landingpage/Sitenotice';
function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Services />
    <Portfolio/>
    <Testimonials />
    <Contact />
    <Footer />
    <SiteNotice/>
    </>
  )
}

export default App;
