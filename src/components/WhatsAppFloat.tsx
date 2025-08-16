import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-hide tooltip after 5 seconds
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const openWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I saw your website and want to know more about IB Gym membership and the special discount for first 100 members.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 animate-fade-in-scale">
            <div className="bg-card border border-border/30 rounded-lg p-3 shadow-lg backdrop-blur-sm max-w-xs">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Get Special Discount! 🎯
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Chat with us now for first 100 members offer
                  </p>
                </div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-neon p-0"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>

        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping"></div>
        <div className="absolute inset-[-4px] rounded-full border border-green-500/20 animate-pulse"></div>
      </div>

      {/* Mobile Bottom Notification Bar (only on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-in-left">
        <div className="bg-gradient-primary text-primary-foreground p-3 mx-4 mb-4 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">Get Instant Response!</p>
                <p className="text-xs opacity-90">Chat for membership details</p>
              </div>
            </div>
            <Button
              onClick={openWhatsApp}
              variant="secondary"
              size="sm"
              className="flex-shrink-0"
            >
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;