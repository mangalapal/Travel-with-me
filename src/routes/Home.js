import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection
        cName="hero"
        heroImg="../assets/4.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttontext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
