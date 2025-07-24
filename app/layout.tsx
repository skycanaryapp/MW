import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MagicWorld Travel Agency | Explore the Magic of Travel',
    template: '%s | MagicWorld Travel Agency'
  },
  description: 'Tailored travel experiences from the top-rated travel experts in Jordan. Discover magical destinations worldwide with 15+ years of expertise.',
  keywords: ['travel agency', 'Jordan travel', 'worldwide destinations', 'travel experts', 'vacation planning'],
  authors: [{ name: 'MagicWorld Travel Agency' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://magicworld-travel.com',
    siteName: 'MagicWorld Travel Agency',
    title: 'MagicWorld Travel Agency | Explore the Magic of Travel',
    description: 'Tailored travel experiences from the top-rated travel experts in Jordan.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MagicWorld Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MagicWorld Travel Agency | Explore the Magic of Travel',
    description: 'Tailored travel experiences from the top-rated travel experts in Jordan.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}