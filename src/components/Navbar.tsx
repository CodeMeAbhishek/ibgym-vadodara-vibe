import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="font-montserrat font-bold text-xl text-foreground">IB Gym</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('facilities')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facilities
            </button>
            <button 
              onClick={() => scrollToSection('hours')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Hours
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection('membership')}>
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border/20 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('facilities')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Facilities
              </button>
              <button 
                onClick={() => scrollToSection('hours')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Hours
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full" onClick={() => scrollToSection('membership')}>
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;