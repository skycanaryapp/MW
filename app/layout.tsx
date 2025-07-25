import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/ui/error-boundary';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'MagicWorld Travel Agency | Explore the Magic of Travel',
    template: '%s | MagicWorld Travel Agency'
  },
  description: 'Tailored travel experiences from the top-rated travel experts in Jordan. Discover magical destinations worldwide with 15+ years of expertise.',
  keywords: ['travel agency', 'Jordan travel', 'worldwide destinations', 'travel experts', 'vacation planning'],
  authors: [{ name: 'MagicWorld Travel Agency' }],
  generator: 'Next.js',
  applicationName: 'MagicWorld Travel Agency',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  creator: 'MagicWorld Travel Agency',
  publisher: 'MagicWorld Travel Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    creator: '@magicworldtravel',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://magicworld-travel.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}