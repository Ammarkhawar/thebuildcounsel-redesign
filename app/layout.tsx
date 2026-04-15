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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable, dancing.variable, "font-sans")}>
      <body>{children}</body>
    </html>
  );
}
