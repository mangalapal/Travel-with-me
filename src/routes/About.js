import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import AboutUs from '../components/About';

function About() {
  return (
    <>
      <Navbar />
      <HeroSection
        cName="hero-mid"
        heroImg="../assets/night.jpg"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
