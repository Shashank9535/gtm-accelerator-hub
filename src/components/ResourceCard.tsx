
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: 'Article' | 'Case Study' | 'Whitepaper' | 'Guide';
  imageUrl: string;
  authorName: string;
  readTime: string;
  onClick?: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  imageUrl,
  authorName,
  readTime,
  onClick
}) => {
  
  const getTypeColor = () => {
    switch (type) {
      case 'Article':
        return 'bg-blue-100 text-blue-600';
      case 'Case Study':
        return 'bg-green-100 text-green-600';
      case 'Whitepaper':
        return 'bg-purple-100 text-purple-600';
      case 'Guide':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  
  return (
    <Card 
      className="overflow-hidden card-hover cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="mb-3">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor()}`}>
            {type}
          </span>
        </div>
        
        <h3 className="font-bold text-lg text-gtm-deep-blue mb-3">{title}</h3>
        
        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{authorName}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
