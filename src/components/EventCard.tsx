
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  attendees: number;
  virtual?: boolean;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  imageUrl,
  attendees,
  virtual = false,
  onClick
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {virtual && (
          <div className="absolute top-3 right-3 bg-gtm-orange text-white text-xs font-semibold px-2 py-1 rounded">
            Virtual
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-xl text-gtm-deep-blue mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-sm">{attendees} Attendees</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gtm-deep-blue hover:bg-gtm-light-blue"
          onClick={onClick}
        >
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
