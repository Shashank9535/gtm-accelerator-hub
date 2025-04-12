
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: "US Market Entry Masterclass",
    date: "April 25, 2023",
    time: "10:00 AM - 12:00 PM PT",
    location: "Virtual",
    attendees: 120,
    category: "Workshop",
    image: "/lovable-uploads/e2d66b5f-af74-4359-aee0-cf0a9434c8b9.png"
  },
  {
    id: 2,
    title: "Enterprise GTM Strategy",
    date: "May 12, 2023",
    time: "9:00 AM - 11:00 AM ET",
    location: "San Francisco, CA",
    attendees: 45,
    category: "In-Person",
    image: "/lovable-uploads/e8fce93d-c1cb-46ab-8981-ce3878bcc132.png"
  },
  {
    id: 3,
    title: "B2B SaaS Marketing Summit",
    date: "June 8, 2023",
    time: "1:00 PM - 4:00 PM CET",
    location: "Virtual",
    attendees: 200,
    category: "Summit",
    image: "/lovable-uploads/fcf87db1-8598-4e99-b4b9-80ea4d759a94.png"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-lovable-gray-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lovable-dark-blue mb-4">
            Upcoming GTM Events
          </h2>
          <p className="text-lg text-gray-600">
            Connect with founders and experts in exclusive workshops, roundtables, and networking events
            focused on go-to-market success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="accent" className="bg-lovable-accent text-white">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lovable-dark-blue">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-gray-600">
                    <Calendar className="h-4 w-4" /> {event.date}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" /> {event.attendees} attendees
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-lovable-blue hover:bg-lovable-blue/90 text-white font-semibold">
                    Apply to Attend
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-lovable-blue text-lovable-blue hover:bg-lovable-blue hover:text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
