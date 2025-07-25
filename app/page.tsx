import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DestinationCard } from '@/components/ui/destination-card';
import { BadgeCard } from '@/components/ui/badge-card';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { Play, ArrowRight } from 'lucide-react';
import { DESTINATIONS, BADGES } from '@/lib/constants';

export default function HomePage() {
  const featuredDestinations = DESTINATIONS.filter(dest => dest.featured);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-label="Hero section">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Explore the{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Magic
              </span>{' '}
              of Travel
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored experiences from the top-rated travel experts in Jordan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[44px]"
              >
                <Link href="/destinations" className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 min-h-[44px]"
                aria-label="Watch our company story video"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Globe Section */}
      <section className="py-20 bg-white" aria-label="Company overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-16 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#08CFCC]/10 to-[#B445EA]/10 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full flex items-center justify-center shadow-2xl" role="img" aria-label="Play button">
                  <Play className="w-16 h-16 text-white ml-2" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Discover Our Global Network
                </h2>
                <p className="text-gray-600 text-lg">
                  Watch how we connect travelers to magical destinations across the globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <ErrorBoundary>
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-label="Featured destinations">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Destinations
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of the world's most magical destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} featured />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 min-h-[44px]"
            >
              <Link href="/destinations">
                View All Destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        </section>
      </ErrorBoundary>

      {/* Badges Section */}
      <ErrorBoundary>
        <section className="py-20 bg-white" aria-label="Why choose MagicWorld">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                MagicWorld
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our proven expertise and dedication to creating magical travel experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BADGES.map((badge, index) => (
              <BadgeCard key={index} badge={badge} />
            ))}
          </div>
        </div>
        </section>
      </ErrorBoundary>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08CFCC] to-[#B445EA]" aria-label="Call to action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Start Your Magical Journey?
            </h2>
            <p className="text-xl text-white/90">
              Let our travel experts create a personalized itinerary just for you
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[44px]"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}