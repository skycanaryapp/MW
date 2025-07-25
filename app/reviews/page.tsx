import type { Metadata } from 'next';
import { ReviewCard } from '@/components/ui/review-card';
import { ReviewCardSkeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, TrendingUp, Award } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read testimonials from our satisfied customers who have experienced magical travel adventures with MagicWorld Travel Agency.',
  openGraph: {
    title: 'Customer Reviews | MagicWorld Travel Agency',
    description: 'Read testimonials from our satisfied customers who have experienced magical travel adventures with MagicWorld Travel Agency.',
  },
};

export default function ReviewsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading reviews
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Based on 500+ reviews'
    },
    {
      icon: Users,
      value: '2,500+',
      label: 'Happy Customers',
      description: 'Travelers served worldwide'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Customers would recommend us'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      description: 'Industry recognition'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Customer{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Reviews
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Hear from our satisfied customers who have experienced the magic of travel with us.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Our{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Customers Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real testimonials from travelers who have experienced unforgettable journeys with MagicWorld
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {Array.from({ length: 4 }).map((_, index) => (
                <ReviewCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {REVIEWS.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Want to see more reviews? Check out our profiles on popular review platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-gray-400 min-h-[44px]"
                asChild
              >
                <a 
                  href="https://www.tripadvisor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View our reviews on TripAdvisor (opens in new tab)"
                >
                View on TripAdvisor
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-gray-400 min-h-[44px]"
                asChild
              >
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View our reviews on Google (opens in new tab)"
                >
                View on Google Reviews
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#08CFCC] to-[#B445EA] border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 italic">
                "MagicWorld doesn't just plan trips—they create life-changing experiences. Our journey to Southeast Asia was beyond our wildest dreams!"
              </blockquote>
              <div className="text-white/90">
                <p className="font-semibold text-lg">Jennifer & Mark Williams</p>
                <p className="text-white/70">Los Angeles, USA</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied travelers who have trusted MagicWorld with their dream vacations
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/contact">
                Start Your Journey Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}