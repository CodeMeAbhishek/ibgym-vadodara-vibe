import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Dumbbell, Award, Clock, Star } from 'lucide-react';

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: MapPin,
      title: '8000 Sq Ft Space',
      description: 'Largest gym area in Sama with spacious workout zones',
      color: 'text-primary'
    },
    {
      icon: Dumbbell,
      title: 'Elite Equipment',
      description: 'Professional-grade machines with proper mechanisms',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Free Classes',
      description: 'Complimentary Zumba, Yoga & CrossFit sessions',
      color: 'text-accent'
    },
    {
      icon: Award,
      title: 'Premium Training',
      description: 'Professional trainers and personalized guidance',
      color: 'text-primary'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            About IB Gym
          </Badge>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6">
            Why Choose <span className="gradient-text">IB Gym?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Sama, IB Gym offers the largest training space in the area with 
            state-of-the-art equipment and comprehensive fitness programs designed for every fitness level.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="glass-effect border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl">
                Premium Fitness Experience in <span className="text-primary">Sama, Vadodara</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                IB Gym is strategically located at Shukan Hub, offering easy accessibility and premium 
                amenities. Our 8000 sq ft facility features the latest equipment, spacious workout areas, 
                and dedicated zones for different training styles.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Elite Equipment:</span> Professional-grade 
                  machines and free weights with proper safety mechanisms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Free Group Classes:</span> Enjoy Zumba, 
                  Yoga, and CrossFit sessions at no additional cost
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Flexible Hours:</span> Extended operating 
                  hours to fit your busy schedule
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('membership')}
                className="mr-4"
              >
                Get Special Discount
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('facilities')}
              >
                View Facilities
              </Button>
            </div>
          </div>

          {/* Right Content - Special Offer Card */}
          <div className="relative">
            <Card className="glass-effect border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-secondary text-background px-4 py-2 rounded-bl-lg">
                <span className="font-bold text-sm">LIMITED TIME</span>
              </div>
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-montserrat font-bold text-2xl gradient-text">
                    Special Membership Offer
                  </h3>
                  <p className="text-muted-foreground">
                    Join the first 100 members and get exclusive discounts on all membership plans
                  </p>
                  
                  <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-accent">Hurry! Limited Spots Available</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Only for the first 100 members in Sama's largest gym
                    </p>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full animate-pulse-neon"
                    onClick={() => scrollToSection('contact')}
                  >
                    Claim Your Discount Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;