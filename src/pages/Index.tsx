import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import MembershipOffer from '@/components/MembershipOffer';
import Hours from '@/components/Hours';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
      <Facilities />
      <MembershipOffer />
      <Hours />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
