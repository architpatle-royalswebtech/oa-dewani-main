import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const SITE_URL = 'https://oadewani.co';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'O A Dewani & Co. | Chartered Accountants',
    template: '%s | O A Dewani & Co.',
  },
  description:
    'O A Dewani & Co. is a chartered accountancy firm offering audit & assurance, income tax, GST, accounting, company registration, ROC compliance, business advisory, and startup consultancy services.',
  keywords: [
    'chartered accountants',
    'audit and assurance',
    'income tax consultant',
    'GST consultancy',
    'company registration',
    'ROC compliance',
    'business advisory',
    'startup consultancy',
    'O A Dewani',
  ],
  authors: [{ name: 'O A Dewani & Co.' }],
  creator: 'O A Dewani & Co.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'O A Dewani & Co.',
    title: 'O A Dewani & Co. | Chartered Accountants',
    description:
      'Audit, tax, GST, and business advisory from a trusted chartered accountancy firm. On-time compliance, transparent fees, and proactive guidance.',
    images: [
      {
        url: '/og-image.svg',
        width: 2460,
        height: 1260,
        alt: 'O A Dewani & Co. — Chartered Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O A Dewani & Co. | Chartered Accountants',
    description:
      'Audit, tax, GST, and business advisory from a trusted chartered accountancy firm.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
