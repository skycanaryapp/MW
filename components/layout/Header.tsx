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
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] flex items-center justify-center">
      <Palmtree className="w-6 h-6 text-white" />
    </div>
  );

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors duration-200 hover:text-transparent hover:bg-gradient-to-r hover:from-[#08CFCC] hover:to-[#B445EA] hover:bg-clip-text',
        pathname === href && 'text-transparent bg-gradient-to-r from-[#08CFCC] to-[#B445EA] bg-clip-text',
        mobile ? 'block py-3 text-lg font-medium' : 'font-medium'
      )}
      onClick={() => mobile && setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <GradientIcon />
            <span className="text-xl font-bold text-gray-900">MagicWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg px-6 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <GradientIcon />
                  <span className="text-xl font-bold text-gray-900">MagicWorld</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-2"
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
                    className="w-full bg-gradient-to-r from-[#08CFCC] to-[#B445EA] hover:from-[#07B8B5] hover:to-[#A33DD1] text-white rounded-lg py-3 font-medium transition-all duration-200"
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