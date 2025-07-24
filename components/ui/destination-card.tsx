'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  featured?: boolean;
}

export function DestinationCard({ destination, featured = false }: DestinationCardProps) {
  return (
    <Card className={`group overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          width={400}
          height={250}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 right-4 bg-white/90 text-gray-700 backdrop-blur-sm"
        >
          {destination.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#08CFCC] group-hover:to-[#B445EA] group-hover:bg-clip-text transition-all duration-300">
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {destination.description}
        </p>
      </CardContent>
    </Card>
  );
}