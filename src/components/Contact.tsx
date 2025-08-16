import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '4th Floor, Shukan Hub, Sama-Savli Rd, near Canal, above Jagdish, Raghuvir Nagar, Kasturba Nagar, New Sama, Vadodara, Gujarat 390008',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      color: 'text-secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@ibgym.in',
      color: 'text-accent'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: 'Mon-Sat: 6 AM-12 PM, 3-10 PM | Sun: 8 AM-12 PM',
      color: 'text-primary'
    }
  ];

  const openWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I want to join IB Gym and get the special discount for the first 100 members.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent('4th Floor, Shukan Hub, Sama-Savli Rd, near Canal, above Jagdish, Raghuvir Nagar, Kasturba Nagar, New Sama, Vadodara, Gujarat 390008');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">
            Get In Touch
          </Badge>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6">
            Contact <span className="gradient-text">IB Gym</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today and claim your 
            special discount as one of our first 100 members!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              Get <span className="text-primary">Connected</span>
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="glass-effect border-border/30 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={openWhatsApp}
                className="w-full animate-pulse-neon"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp - Get Instant Response
              </Button>
              
              <Button 
                variant="neon" 
                size="lg" 
                onClick={openGoogleMaps}
                className="w-full"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions on Google Maps
              </Button>
            </div>
          </div>

          {/* Map & Special Offer */}
          <div className="space-y-6">
            {/* Google Maps Embed */}
            <Card className="glass-effect border-border/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5234567890123!2d73.12345678901234!3d22.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIwJzQ0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer Card */}
            <Card className="glass-effect border-2 border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-bl-lg">
                <span className="font-bold text-sm">SPECIAL OFFER</span>
              </div>
              
              <CardContent className="p-6 pt-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-montserrat font-bold text-xl gradient-text">
                    First 100 Members Discount
                  </h3>
                  <p className="text-muted-foreground">
                    Join now and secure exclusive lifetime rates that will never increase!
                  </p>
                  
                  <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MessageCircle className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-accent">WhatsApp for Instant Joining</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get immediate confirmation and start your fitness journey today
                    </p>
                  </div>

                  <Button 
                    variant="accent" 
                    className="w-full"
                    onClick={openWhatsApp}
                  >
                    Claim Your Discount Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Location Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-effect border-border/30 text-center">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">🚗</div>
                  <p className="text-sm text-muted-foreground">Easy Parking Available</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-border/30 text-center">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">🚌</div>
                  <p className="text-sm text-muted-foreground">Public Transport Nearby</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;