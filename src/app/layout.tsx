import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Real Estate Platform | Find Your Dream Property',
    template: '%s | Real Estate Platform'
  },
  description: 'Find your dream property from millions of listings. Buy, sell, or rent properties with our comprehensive real estate platform.',
  keywords: ['real estate', 'property', 'houses', 'apartments', 'buy house', 'rent apartment', 'real estate listings'],
  authors: [{ name: 'Real Estate Platform' }],
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: '/icons/icon-192x192.png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512' }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Real Estate Platform'
  },
  formatDetection: {
    telephone: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Real Estate Platform',
    title: 'Real Estate Platform | Find Your Dream Property',
    description: 'Find your dream property from millions of listings. Buy, sell, or rent properties with our comprehensive real estate platform.',
    images: [{
      url: 'https://your-domain.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Real Estate Platform'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Platform | Find Your Dream Property',
    description: 'Find your dream property from millions of listings. Buy, sell, or rent properties with our comprehensive real estate platform.',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="Real Estate Platform" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Real Estate Platform" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}