import { Globe, Award, MapPin } from 'lucide-react';
import type { NavItem, Badge, Destination, Review } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Reviews', href: '/reviews' },
];

export const BADGES: Badge[] = [
  {
    icon: Award,
    title: '15+ Years of Global Travel Expertise',
    description: 'Trusted by thousands of travelers worldwide'
  },
  {
    icon: Globe,
    title: 'Top-rated Travel Experts',
    description: 'Recognized as leading travel professionals'
  },
  {
    icon: MapPin,
    title: 'Worldwide Destinations',
    description: 'Covering 50+ countries across all continents'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini, Greece',
    description: 'Experience the breathtaking sunsets and white-washed buildings of this magical Greek island.',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Europe',
    featured: true
  },
  {
    id: '2',
    name: 'Bali, Indonesia',
    description: 'Discover tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Asia',
    featured: true
  },
  {
    id: '3',
    name: 'Machu Picchu, Peru',
    description: 'Journey to the ancient Incan citadel high in the Andes Mountains.',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'South America',
    featured: true
  },
  {
    id: '4',
    name: 'Dubai, UAE',
    description: 'Experience luxury and innovation in this futuristic desert metropolis.',
    image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Middle East'
  },
  {
    id: '5',
    name: 'Tokyo, Japan',
    description: 'Immerse yourself in the perfect blend of traditional culture and modern technology.',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Asia'
  },
  {
    id: '6',
    name: 'Paris, France',
    description: 'Fall in love with the City of Light and its timeless romance and elegance.',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Europe'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'MagicWorld made our honeymoon to Santorini absolutely perfect. Every detail was taken care of, from the boutique hotel to the private sunset tour. Couldn\'t have asked for better service!',
    date: '2024-01-15',
    location: 'New York, USA'
  },
  {
    id: '2',
    name: 'Ahmed Al-Rashid',
    rating: 5,
    comment: 'As a frequent traveler, I can say that MagicWorld stands out for their personalized approach. They designed a custom itinerary for our family trip to Japan that exceeded all expectations.',
    date: '2024-01-08',
    location: 'Amman, Jordan'
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    rating: 5,
    comment: 'The team at MagicWorld is incredibly knowledgeable and professional. They helped us discover hidden gems in Peru that we never would have found on our own. Truly magical experience!',
    date: '2023-12-22',
    location: 'Madrid, Spain'
  },
  {
    id: '4',
    name: 'David Thompson',
    rating: 5,
    comment: 'Outstanding service from start to finish. MagicWorld handled all the logistics for our corporate retreat in Dubai, allowing us to focus on our team building activities.',
    date: '2023-12-18',
    location: 'London, UK'
  }
];