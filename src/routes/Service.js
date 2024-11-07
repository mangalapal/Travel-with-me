import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Service() {
  return (
    <>
      <Navbar />
      <HeroSection
        cName="hero-mid"
        heroImg="../assets/15.jpg"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
