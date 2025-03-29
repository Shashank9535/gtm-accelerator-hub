
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface ExpertCardProps {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  expertise: string[];
  onClick?: () => void;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  title,
  company,
  imageUrl,
  expertise,
  onClick
}) => {
  return (
    <Card 
      className="overflow-hidden card-hover bg-white"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gtm-deep-blue">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-gray-600 text-sm mb-3">{company}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gtm-gray-light text-gtm-deep-blue text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 bg-gtm-deep-blue hover:bg-gtm-light-blue text-white py-2 rounded transition-colors">
          <Calendar className="h-4 w-4" />
          <span>Book Session</span>
        </button>
      </div>
    </Card>
  );
};

export default ExpertCard;
