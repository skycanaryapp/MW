'use client';

import { useState } from 'react';
import { DestinationCard } from '@/components/ui/destination-card';
import { DestinationCardSkeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DESTINATIONS } from '@/lib/constants';

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(false);
  
  const categories = ['All', ...Array.from(new Set(DESTINATIONS.map(dest => dest.category)))];
  
  const filteredDestinations = selectedCategory === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(dest => dest.category === selectedCategory);

  const handleCategoryChange = async (category: string) => {
    if (category === selectedCategory) return;
    
    setIsLoading(true);
    setSelectedCategory(category);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover amazing destinations around the world, carefully selected by our travel experts to create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-700 font-medium mr-4">Filter by region:</span>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  'cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 min-h-[44px] px-4 py-2',
                    ? 'bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white border-0'
                    : 'hover:border-gray-400'
                }`}
                onClick={() => handleCategoryChange(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryChange(category);
                  }
                }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Destinations' : `${selectedCategory} Destinations`}
            </h2>
            <p className="text-gray-600">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} available
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <DestinationCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          )}

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No destinations found for the selected category.</p>
              <Button
                onClick={() => handleCategoryChange('All')}
                className="mt-4 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] text-white"
              >
                View All Destinations
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-xl text-gray-600">
              Our travel experts can create custom itineraries for any destination worldwide. Let us help you discover your perfect getaway.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}