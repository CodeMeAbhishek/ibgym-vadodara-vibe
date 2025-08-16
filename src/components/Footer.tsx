import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I want to join IB Gym and get more information about membership.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="font-montserrat font-bold text-xl text-foreground">IB Gym</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vadodara's largest gym in Sama with 8000 sq ft of premium facilities, 
              elite equipment, and free group classes.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={openWhatsApp} className="hover:text-accent">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Facilities
              </button>
              <button 
                onClick={() => scrollToSection('membership')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Membership
              </button>
              <button 
                onClick={() => scrollToSection('hours')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Operating Hours
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  4th Floor, Shukan Hub, Sama-Savli Rd, New Sama, Vadodara
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <p className="text-muted-foreground text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <p className="text-muted-foreground text-sm">info@ibgym.in</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Mon - Sat</p>
                  <p className="text-muted-foreground text-xs">6 AM - 12 PM, 3 PM - 10 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Sunday</p>
                  <p className="text-muted-foreground text-xs">8 AM - 12 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8 border-t border-border/30 border-b border-border/30 mb-8">
          <h3 className="font-montserrat font-bold text-xl md:text-2xl mb-4">
            Start Your <span className="gradient-text">Fitness Journey</span> with IB Gym Today
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Sama's largest gym and be among the first 100 members to get exclusive lifetime discounts. 
            Your transformation starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={openWhatsApp}
              className="animate-pulse-neon"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Now via WhatsApp
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Visit Our Gym
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <p>&copy; 2024 IB Gym Vadodara. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">Proudly serving Sama, Vadodara</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs">8000 sq ft of premium fitness</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;