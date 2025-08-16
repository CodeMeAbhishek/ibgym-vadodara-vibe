import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, Clock, Star, Zap } from 'lucide-react';

const MembershipOffer = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    'Access to all 8000 sq ft facility',
    'Free Zumba, Yoga & CrossFit classes',
    'Personal training consultation',
    'Nutrition guidance & meal plans',
    'Extended gym hours access',
    'Guest pass privileges'
  ];

  return (
    <section id="membership" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent bg-accent/10">
            LIMITED TIME OFFER
          </Badge>
          <h2 className="font-montserrat font-black text-3xl md:text-5xl mb-6">
            <span className="text-4xl">🔥</span> Special Membership Discount
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join the first 100 members and unlock exclusive pricing for life!
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-effect border-2 border-primary/30 relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            {/* Crown Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-secondary text-background px-6 py-2 rounded-full flex items-center gap-2 shadow-neon-secondary">
                <Crown className="w-4 h-4" />
                <span className="font-bold text-sm">PREMIUM MEMBERSHIP</span>
              </div>
            </div>

            <CardContent className="p-8 md:p-12 pt-12 md:pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
                    Hurry! <span className="gradient-text">Limited-Time Discount</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Be among the first 100 members to join IB Gym and secure special rates 
                    that will never increase for the lifetime of your membership.
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">100</div>
                      <div className="text-xs text-muted-foreground">Members Only</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Zap className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">Free</div>
                      <div className="text-xs text-muted-foreground">Classes</div>
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={scrollToContact}
                    className="animate-pulse-neon w-full lg:w-auto"
                  >
                    Claim Your Discount Now
                  </Button>
                </div>

                {/* Right Content - Benefits */}
                <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-lg">Membership Benefits</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary text-sm">EXCLUSIVE OFFER</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lock in your rate today - prices will never increase for founding members!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-8 py-4 animate-float">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="font-semibold text-accent">Only a few spots left!</span>
            </div>
            <div className="text-2xl">⏰</div>
            <span className="text-muted-foreground">Join Sama's largest gym today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipOffer;