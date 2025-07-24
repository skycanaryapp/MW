'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const GradientIcon = () => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
      <Palmtree className="w-6 h-6 text-white" />
    </div>
  );

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'relative transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] hover:bg-clip-text hover:scale-105',
        pathname === href && 'text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text',
        mobile ? 'block py-3 text-lg font-medium' : 'font-medium'
      )}
      onClick={() => mobile && setIsOpen(false)}
    >
      <span className="relative z-10">{label}</span>
      {!mobile && (
        <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
      )}
    </Link>
  );

  return (
    <header className="liquid-glass-header sticky top-0 z-50 w-full">
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
            <span className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#08CFCC] group-hover:to-[#B445EA] group-hover:bg-clip-text transition-all duration-300">
              MagicWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative z-10">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button 
              asChild
              className="glass-button bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg px-6 py-2 font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden relative z-10">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/20 transition-all duration-300">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass-mobile-menu">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <GradientIcon />
                  <span className="text-xl font-bold text-gray-900">MagicWorld</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} mobile />
                ))}
                <div className="pt-6">
                  <Button 
                    asChild
                    className="w-full glass-button bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg py-3 font-medium transition-all duration-300"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}