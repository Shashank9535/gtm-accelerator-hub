
import React from 'react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Women Leaders in AI SaaS",
    date: "May 15, 2023",
    location: "Bangalore, India",
    imageUrl: "/lovable-uploads/9cd64d87-5708-47ad-8336-377895ce94eb.png",
    attendees: 85,
    virtual: false
  },
  {
    id: 2,
    title: "GTM Unbound Founders' Walk",
    date: "March 9, 2023",
    location: "Cubbon Park, Bangalore",
    imageUrl: "/lovable-uploads/e7fcae85-fb46-4f99-9898-103555caa564.png",
    attendees: 40,
    virtual: false
  },
  {
    id: 3,
    title: "CorridorX GTM Unbound",
    date: "February 21, 2025",
    location: "WeWork Embassy Quest",
    imageUrl: "/lovable-uploads/3ddda55b-09e4-4d68-a6cb-1ad1d74ad119.png",
    attendees: 120,
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
        
        <div className="mt-16 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <img 
                src="/lovable-uploads/7619b595-711e-4f83-a099-c097dd5ad81a.png" 
                alt="Aditi Aggarwal Mehta" 
                className="rounded-full w-40 h-40 object-cover mx-auto border-4 border-gtm-orange"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gtm-deep-blue mb-2">Meet Our Founder</h3>
              <h4 className="text-xl font-semibold text-gtm-orange mb-3">Aditi Aggarwal Mehta</h4>
              <p className="text-gray-600 mb-4">
                Aditi is passionate about helping technology companies simplify their Go-To-Market strategies and expand internationally. With years of experience in the SaaS industry, she founded GTM Unbound to connect startups with top GTM experts and create a vibrant, invite-only community.
              </p>
              <a 
                href="https://www.linkedin.com/in/aditi-aggarwal-mehta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-gtm-deep-blue mb-6">Community Gatherings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/0c61365e-7f46-46e9-86cd-2488fdc04a34.png" 
                alt="Tech Founders Meetup" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/e8fce93d-c1cb-46ab-8981-ce3878bcc132.png" 
                alt="SaaSBoomi Annual 2025" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
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
