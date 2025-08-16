import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Sun, Moon } from 'lucide-react';

const Hours = () => {
  const schedule = [
    { day: 'Monday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Tuesday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Wednesday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Thursday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Friday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Saturday', morning: '6:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM', isToday: false },
    { day: 'Sunday', morning: '8:00 AM - 12:00 PM', evening: 'Closed', isToday: false }
  ];

  // Get current day
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
  const updatedSchedule = schedule.map(item => ({
    ...item,
    isToday: item.day === currentDay
  }));

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    if (currentDay === 0) { // Sunday
      if (currentHour >= 8 && currentHour < 12) {
        return { status: 'Open Now', color: 'text-green-500', bgColor: 'bg-green-500/10' };
      } else {
        return { status: 'Closed', color: 'text-red-500', bgColor: 'bg-red-500/10' };
      }
    } else { // Monday - Saturday
      if ((currentHour >= 6 && currentHour < 12) || (currentHour >= 15 && currentHour < 22)) {
        return { status: 'Open Now', color: 'text-green-500', bgColor: 'bg-green-500/10' };
      } else {
        return { status: 'Closed', color: 'text-red-500', bgColor: 'bg-red-500/10' };
      }
    }
  };

  const currentStatus = getCurrentStatus();

  return (
    <section id="hours" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Operating Hours
          </Badge>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-6">
            Gym <span className="gradient-text">Opening Hours</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're open extended hours to fit your busy schedule. Start your fitness journey 
            early in the morning or after work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Status Card */}
          <Card className="glass-effect border-border/30 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-lg">Current Status:</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${currentStatus.bgColor} ${currentStatus.color} border-current`}
                >
                  {currentStatus.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Table */}
          <Card className="glass-effect border-border/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-card/50 border-b border-border/30">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Day</th>
                      <th className="text-left p-4 font-semibold text-foreground">Morning Session</th>
                      <th className="text-left p-4 font-semibold text-foreground">Evening Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatedSchedule.map((item, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-border/20 hover:bg-card/30 transition-colors duration-200 ${
                          item.isToday ? 'bg-primary/5 border-primary/20' : ''
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className={`font-medium ${item.isToday ? 'text-primary' : 'text-foreground'}`}>
                              {item.day}
                            </span>
                            {item.isToday && (
                              <Badge variant="outline" className="ml-2 border-primary/30 text-primary bg-primary/10 text-xs">
                                Today
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{item.morning}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {item.evening !== 'Closed' ? (
                              <Moon className="w-4 h-4 text-secondary" />
                            ) : (
                              <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              </div>
                            )}
                            <span className={`${item.evening === 'Closed' ? 'text-red-500' : 'text-muted-foreground'}`}>
                              {item.evening}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="glass-effect border-border/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Morning Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Perfect for early risers! Start your day with energy and avoid the crowds.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Evening Sessions</h3>
                <p className="text-muted-foreground text-sm">
                  Unwind after work with our extended evening hours until 10 PM.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Note */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              <span className="text-accent font-semibold">Note:</span> Last entry is 30 minutes before closing time. 
              Group classes have specific timings - please check with our staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;