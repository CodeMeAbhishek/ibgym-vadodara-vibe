import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Dumbbell, Users, Zap, Target, Activity } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Modern treadmills, ellipticals, and stationary bikes with entertainment systems',
      features: ['Latest cardio equipment', 'Heart rate monitoring', 'Entertainment screens'],
      color: 'text-accent',
      bgGradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Complete free weights section with dumbbells, barbells, and specialized machines',
      features: ['Olympic weight plates', 'Power racks & squat racks', 'Cable machines'],
      color: 'text-primary',
      bgGradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Users,
      title: 'Zumba Classes',
      description: 'High-energy dance fitness classes in our dedicated studio space',
      features: ['Professional instructors', 'Energetic music system', 'Spacious dance floor'],
      color: 'text-secondary',
      bgGradient: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Activity,
      title: 'Yoga & Meditation',
      description: 'Peaceful yoga studio for mindfulness, flexibility, and inner strength',
      features: ['Serene environment', 'Certified yoga instructors', 'Props provided'],
      color: 'text-accent',
      bgGradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Zap,
      title: 'CrossFit Arena',
      description: 'Functional fitness training with varied workout routines and challenges',
      features: ['Battle ropes & kettlebells', 'Pull-up stations', 'Functional movements'],
      color: 'text-primary',
      bgGradient: 'from-primary/20 to-primary/5'
    },
    {
      icon: Target,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers for personalized fitness goals',
      features: ['Customized workout plans', 'Nutrition guidance', 'Progress tracking'],
      color: 'text-secondary',
      bgGradient: 'from-secondary/20 to-secondary/5'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">
            Our Services
          </Badge>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6">
            World-Class <span className="gradient-text">Facilities & Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the best in fitness with our comprehensive range of facilities and services, 
            all included in your membership with no hidden costs.
          </p>
        </div>

        {/* Free Services Highlight */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-secondary rounded-full px-6 py-3 text-background font-semibold">
            <span className="text-xl">🎁</span>
            <span>FREE Zumba, Yoga & CrossFit Classes - No Extra Cost!</span>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Card 
                key={index} 
                className="glass-effect border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-105 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon`}>
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {facility.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors duration-300"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Special badge for free services */}
                  {['Zumba Classes', 'Yoga & Meditation', 'CrossFit Arena'].includes(facility.title) && (
                    <div className="mt-4">
                      <Badge variant="outline" className="border-accent/30 text-accent bg-accent/10">
                        FREE with Membership
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              All Facilities Under One Roof
            </h3>
            <p className="text-muted-foreground mb-6">
              Get access to all our premium facilities and services with a single membership. 
              No additional fees, no hidden costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-primary/30 text-primary">
                8000 Sq Ft Space
              </Badge>
              <Badge variant="outline" className="border-secondary/30 text-secondary">
                Elite Equipment
              </Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">
                Free Group Classes
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;