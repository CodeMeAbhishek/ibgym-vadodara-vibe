import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/gym-hero.jpg';
import equipmentImage from '@/assets/gym-equipment.jpg';
import groupFitnessImage from '@/assets/group-fitness.jpg';
import crossfitImage from '@/assets/crossfit-area.jpg';

const images = [
  {
    src: heroImage,
    alt: 'IB Gym Main Area - 8000 sq ft Premium Space',
    title: 'Premium Training Space'
  },
  {
    src: equipmentImage,
    alt: 'Elite Equipment Zone',
    title: 'State-of-the-Art Equipment'
  },
  {
    src: groupFitnessImage,
    alt: 'Group Fitness Classes - Yoga & Zumba',
    title: 'Free Group Classes'
  },
  {
    src: crossfitImage,
    alt: 'CrossFit Training Area',
    title: 'CrossFit Zone'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Our <span className="gradient-text">Premium Facilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a virtual tour of our 8000 sq ft facility with the latest equipment and training zones
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Container */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-foreground font-bold text-xl md:text-2xl mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/20 backdrop-blur-sm border border-border/30 rounded-full p-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/20 backdrop-blur-sm border border-border/30 rounded-full p-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-neon scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-primary shadow-neon scale-105' 
                    : 'border-border/30 hover:border-primary/50'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  index === currentIndex ? 'bg-primary/20' : 'bg-background/40'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;