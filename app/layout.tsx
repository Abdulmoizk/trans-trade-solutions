import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Trans Trade Solutions - Supply Chain Excellence",
  description:
    "Trans Trade Solutions provides comprehensive logistics and supply chain solutions including international freight forwarding, customs clearance, inland transportation, and transit trade services. Connecting borders with efficient logistics.",
  keywords: "logistics, supply chain, freight forwarding, customs clearance, international shipping, transit trade, Pakistan logistics",
  authors: [{ name: "Trans Trade Solutions" }],
  icons: {
    icon: [
      { url: '/Logo.svg', type: 'image/svg+xml' },
      { url: '/tts.svg', type: 'image/svg+xml' },
    ],
    apple: '/Logo.svg',
  },
  openGraph: {
    title: "Trans Trade Solutions - Supply Chain Excellence",
    description: "Comprehensive logistics and supply chain solutions for global trade",
    type: "website",
    siteName: "Trans Trade Solutions",
    url: "https://www.transtrade.pk",
    images: [
      {
        url: '/Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Trans Trade Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trans Trade Solutions - Supply Chain Excellence",
    description: "Comprehensive logistics and supply chain solutions for global trade",
    images: ['/Logo.svg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trans Trade Solutions",
    "url": "https://www.transtrade.pk",
    "logo": "https://www.transtrade.pk/Logo.svg",
    "description": "Trans Trade Solutions provides comprehensive logistics and supply chain solutions including international freight forwarding, customs clearance, inland transportation, and transit trade services.",
    "email": "cs@transtrade.pk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Karachi"
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trans Trade Solutions",
    "url": "https://www.transtrade.pk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.transtrade.pk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.transtrade.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Our Services",
        "item": "https://www.transtrade.pk/our-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": "https://www.transtrade.pk/our-mission"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Careers",
        "item": "https://www.transtrade.pk/careers"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://www.transtrade.pk/contact"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
