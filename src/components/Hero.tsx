import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/gym-hero.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="gradient-text">IB GYM</span>
            <br />
            <span className="text-foreground">VADODARA</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Largest area gym in Sama – 8000 sq ft with elite equipment & premium training facilities
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>8000 sq ft Premium Space</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-secondary" />
              <span>Free Zumba, Yoga, CrossFit</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span>Extended Hours 6 AM - 10 PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('membership')}
              className="animate-pulse-neon"
            >
              Join Now - Special Discount
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          {/* Discount Banner */}
          <div className="mt-8 inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 animate-float">
            <span className="text-2xl">🔥</span>
            <span className="text-primary font-semibold">Limited Time: First 100 Members Get Special Rates!</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;