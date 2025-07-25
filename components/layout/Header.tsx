'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside or on escape
  const closeMobileMenu = () => setIsOpen(false);

  const GradientIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
      <Palmtree className="w-6 h-6 text-white" />
    </div>
  );

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'relative transition-all duration-300 ease-in-out hover:text-transparent hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] hover:bg-clip-text',
        pathname === href && 'text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text',
        mobile ? 'block py-4 px-6 text-lg font-medium min-h-[44px] flex items-center rounded-lg hover:bg-white/10' : 'font-medium px-3 py-2 rounded-lg hover:bg-white/10'
      )}
      onClick={() => mobile && closeMobileMenu()}
    >
      <span className="relative z-10">{label}</span>
    </Link>
  );

  return (
    <header className="liquid-glass-header sticky top-0 z-50 w-full" role="banner">
      {/* Animated background layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary glass layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-[12px]" />
        
        {/* Animated liquid orbs */}
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-3" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08CFCC]/5 via-transparent to-[#B445EA]/5" />
        
        {/* Bottom border with glass effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 relative z-10 group">
            <GradientIcon />
            <span className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#08CFCC] group-hover:to-[#B445EA] group-hover:bg-clip-text transition-all duration-300 ease-in-out">
              MagicWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 relative z-10" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button 
              asChild
              className="glass-button bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg px-6 py-2 font-medium transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-3 hover:bg-white/20 transition-all duration-300 ease-in-out min-h-[44px] min-w-[44px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-in-out",
                  isOpen ? "top-3 rotate-45" : "top-1"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-in-out top-3",
                  isOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-900 transition-all duration-300 ease-in-out",
                  isOpen ? "top-3 -rotate-45" : "top-5"
                )} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-mobile-menu transform transition-transform duration-300 ease-in-out z-50 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <GradientIcon />
              <span className="text-xl font-bold text-gray-900">MagicWorld</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMobileMenu}
              className="p-3 hover:bg-white/20 transition-all duration-300 ease-in-out min-h-[44px] min-w-[44px]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} mobile />
              ))}
            </div>
            
            {/* Mobile CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button 
                asChild
                className="w-full glass-button bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg py-3 font-medium transition-all duration-300 ease-in-out min-h-[44px]"
              >
                <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}