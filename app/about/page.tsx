import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Globe, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MagicWorld Travel Agency - your trusted travel partner with 15+ years of expertise in creating magical travel experiences worldwide.',
  openGraph: {
    title: 'About Us | MagicWorld Travel Agency',
    description: 'Learn about MagicWorld Travel Agency - your trusted travel partner with 15+ years of expertise in creating magical travel experiences worldwide.',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, and our passion shows in every itinerary we craft.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in service quality and attention to detail.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Our extensive network spans across continents, ensuring authentic local experiences.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Who{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                We Are
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At MagicWorld Travel Agency, we believe that travel is more than just visiting new places—it's about creating transformative experiences that enrich your life and broaden your perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008 in the heart of Amman, Jordan, MagicWorld Travel Agency began as a small family business with a big dream: to make the world accessible to everyone through carefully curated travel experiences.
                </p>
                <p>
                  Over the past 15+ years, we've grown from a local travel agency to a globally recognized travel partner, serving thousands of satisfied customers from around the world. Our success stems from our unwavering commitment to understanding each traveler's unique desires and crafting personalized journeys that exceed expectations.
                </p>
                <p>
                  What sets us apart is our deep local knowledge combined with global reach. Our team of travel experts has personally visited and thoroughly explored each destination we recommend, ensuring that we can provide authentic insights and insider tips that transform good trips into magical adventures.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#08CFCC]/10 to-[#B445EA]/10 rounded-2xl" />
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MagicWorld team working together"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape every travel experience we create
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced travel experts are passionate about creating unforgettable journeys
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Travel experts team photo"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Expert Travel Consultants
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team consists of certified travel professionals with extensive experience in destinations worldwide. Each member brings unique expertise and personal travel insights to help create your perfect journey.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full"></div>
                        <span className="text-gray-700">15+ years average experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full"></div>
                        <span className="text-gray-700">Certified travel specialists</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#08CFCC] to-[#B445EA] rounded-full"></div>
                        <span className="text-gray-700">Multi-lingual support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#08CFCC] to-[#B445EA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience the MagicWorld Difference?
            </h2>
            <p className="text-xl text-white/90">
              Let our passionate team of travel experts design your next unforgettable adventure
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/contact">
                Start Planning Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}