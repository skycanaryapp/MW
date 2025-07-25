'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Destination } from '@/types';
import { useState } from 'react';
import { LoadingSpinner } from './loading-spinner';

interface DestinationCardProps {
  destination: Destination;
  featured?: boolean;
}

export function DestinationCard({ destination, featured = false }: DestinationCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className={`group overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden">
        <div className="relative w-full h-48 bg-gray-200">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner size="md" />
            </div>
          )}
          {!imageError ? (
            <Image
              src={destination.image}
              alt={`Beautiful view of ${destination.name}`}
              width={400}
              height={300}
              className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image unavailable</span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 right-4 bg-white/90 text-gray-700 backdrop-blur-sm"
        >
          {destination.category}
        </Badge>
      </div>
      <CardContent className="p-6">
              className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white transition-all duration-300 hover:shadow-lg min-h-[36px]"
              aria-label={`Learn more about ${destination.name}`}
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {destination.description}
        </p>
      </CardContent>
    </Card>
  );
}