
import React from 'react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "GTM Masterclass: US Market Entry Strategies",
    date: "June 15, 2023",
    location: "Bangalore, India",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    attendees: 75,
    virtual: false
  },
  {
    id: 2,
    title: "The AI Startup's GTM Playbook",
    date: "July 8, 2023",
    location: "Online Webinar",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    attendees: 120,
    virtual: true
  },
  {
    id: 3,
    title: "Founder Roundtable: Scaling in EMEA",
    date: "August 22, 2023",
    location: "San Francisco, USA",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    attendees: 40,
    virtual: false
  }
];

const EventsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Upcoming Events & Webinars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our exclusive events in Bangalore and across the US, or participate in
            our virtual webinars led by industry experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
              attendees={event.attendees}
              virtual={event.virtual}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/events">
            <Button className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
