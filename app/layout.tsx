import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { organizationSchema } from '@/lib/schema';
import { siteUrl, COMPANY_NAME } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyCtaBar from '@/components/StickyCtaBar';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F6B3A',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY_NAME} | Global Bulk Fertilizer Supplier & Exporter`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'Nielson Agro Fertilizers — trusted bulk NPK, Urea & DAP fertilizer supplier exporting to 50+ countries. Competitive pricing, high purity, reliable supply chain for distributors, governments & farms.',
  keywords: [
    'fertilizer supplier',
    'bulk fertilizer export',
    'npk fertilizer supplier',
    'urea supplier',
    'dap fertilizer supplier',
    'fertilizer export company',
    'bulk fertilizer supplier',
    'fertilizer manufacturers',
    'agricultural fertilizer',
    'global fertilizer supplier',
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Global Bulk Fertilizer Supplier`,
    description:
      'Bulk NPK, Urea & DAP fertilizer supplier exporting to 50+ countries. Get competitive pricing within 24 hours.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nielson Agro Fertilizers - Global Bulk Fertilizer Supplier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Global Bulk Fertilizer Supplier`,
    description:
      'Bulk NPK, Urea & DAP fertilizer supplier exporting to 50+ countries.',
    images: [`${siteUrl}/images/og-image.jpg`],
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
  alternates: {
    canonical: siteUrl,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Google Tag Manager — replace GTM-XXXXXX */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCtaBar />
      </body>
    </html>
  );
}
