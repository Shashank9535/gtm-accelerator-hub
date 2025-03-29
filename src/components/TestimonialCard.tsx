
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  company,
  avatarUrl
}) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-gtm-orange mb-4 opacity-75" />
        
        <p className="text-gray-700 italic mb-6 flex-grow">
          "{quote}"
        </p>
        
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <img 
              src={avatarUrl} 
              alt={name} 
              className="h-full w-full object-cover"
            />
          </div>
          
          <div>
            <p className="font-bold text-gtm-deep-blue">{name}</p>
            <p className="text-sm text-gray-600">{title}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
