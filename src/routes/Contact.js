import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection
        cName="hero-mid"
        heroImg="../assets/2.jpg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
