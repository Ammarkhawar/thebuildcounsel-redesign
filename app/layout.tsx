import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-dancing",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thebuildcounsel.com"),
  title: "Law Firm SEO Services & Legal Marketing | The Build Counsel",
  description:
    "The Build Counsel delivers law firm SEO services, paid ads and AI search marketing for Canadian law firms. One system. Every channel. Apply now.",
  keywords: ["law firm SEO", "law firm marketing", "legal SEO services", "legal marketing Canada", "AI search marketing", "law firm paid ads", "attorney marketing", "legal digital marketing"],
  authors: [{ name: "The Build Counsel" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://thebuildcounsel.com",
    siteName: "The Build Counsel",
    title: "Law Firm SEO Services & Legal Marketing | The Build Counsel",
    description:
      "The Build Counsel delivers law firm SEO services, paid ads and AI search marketing for Canadian law firms. One system. Every channel. Apply now.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Law Firm SEO Services & Legal Marketing | The Build Counsel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Law Firm SEO Services & Legal Marketing | The Build Counsel",
    description:
      "The Build Counsel delivers law firm SEO services, paid ads and AI search marketing for Canadian law firms. One system. Every channel. Apply now.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes your law firm SEO services different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most agencies run generic SEO campaigns. We build legal-specific content strategies, target the exact keywords your potential clients search in Canada, and optimize for both traditional Google rankings and emerging AI search platforms like ChatGPT, Claude, and Perplexity. Every campaign is built exclusively around legal search intent."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from law firm SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most of our clients see measurable improvements in rankings and traffic within 60–90 days. Paid channels like Google Ads generate leads within the first two weeks. Full Authority Stack results compound over 6–12 months as your SEO authority builds."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with law firms across all of Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve legal practices across Canada including Toronto, Vancouver, Calgary, Ottawa, and Montreal. Our law firm SEO services are tailored to your specific city and legal market."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with any practice area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have experience across all major areas of law including personal injury, criminal defense, immigration, family law, employment law, and business law. If you don't see your practice area listed, reach out — we likely cover it."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the $5,000/month package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Everything. Law firm SEO services, Google Ads management, Facebook and Instagram campaigns, law firm web design, content production, reputation management, and a dedicated strategy manager. No hidden fees, no upsells."
      }
    }
  ]
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "name": "The Build Counsel",
  "url": "https://www.thebuildcounsel.com",
  "logo": "https://www.thebuildcounsel.com/logo.svg",
  "image": "https://www.thebuildcounsel.com/og-image.png",
  "description": "The Build Counsel delivers law firm SEO services, paid ads and AI search marketing exclusively for Canadian law firms. One system. Every channel.",
  "telephone": "+13658055602",
  "email": "info@thebuildcounsel.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CA"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Law Firm SEO Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads for Law Firms" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal Website Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reputation Management" } }
    ]
  },
  "priceRange": "$$$",
  "knowsAbout": [
    "Law Firm SEO",
    "Legal Digital Marketing",
    "Google Ads for Lawyers",
    "AI Search Marketing",
    "Canadian Legal Marketing"
  ],
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable, dancing.variable, "font-sans")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
