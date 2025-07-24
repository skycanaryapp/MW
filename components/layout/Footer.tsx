import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Palmtree } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MagicWorld</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted travel partner for creating magical experiences around the world. 
              Let us turn your travel dreams into unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/destinations" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Destinations
              </Link>
              <Link href="/reviews" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Reviews
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">+962 6 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">info@magicworld.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-200 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-200 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-200 hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] rounded-lg flex items-center justify-center transition-all duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Stay updated with our latest travel offers and destination guides.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} MagicWorld Travel Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}