
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface SubscriptionPlanProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onSubscribe?: () => void;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  title,
  description,
  price,
  period,
  features,
  popular = false,
  ctaText = "Request Access",
  onSubscribe
}) => {
  
  const handleSubscribe = () => {
    window.location.href = "https://gtmunbound.com/";
  };
  
  return (
    <Card className={`h-full flex flex-col ${popular ? 'shadow-xl border-gtm-orange border-2' : 'shadow-md'}`}>
      {popular && (
        <div className="bg-gtm-orange text-white text-center py-1 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      
      <CardHeader className="pb-0">
        <h3 className={`text-xl font-bold ${popular ? 'text-gtm-orange' : 'text-gtm-deep-blue'}`}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mt-4 mb-6">
          <span className="text-3xl font-bold text-gtm-deep-blue">{price}</span>
          <span className="text-gray-500 text-sm ml-1">{period}</span>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button 
          className={`w-full ${
            popular 
              ? 'bg-gtm-orange hover:bg-opacity-90 text-white' 
              : 'bg-gtm-deep-blue hover:bg-gtm-light-blue text-white'
          }`}
          onClick={handleSubscribe}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlan;
