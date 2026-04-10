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
  title: "The Build Counsel — Growth Agency for Law Firms",
  description:
    "The Build Counsel is the only growth agency built exclusively for law firms. We deploy the Authority Stack™ — a multi-channel system that turns search, paid ads, social, and conversion into a unified client acquisition machine.",
  keywords: ["law firm marketing", "legal SEO", "law firm growth", "attorney marketing", "law firm SEO", "legal digital marketing"],
  authors: [{ name: "The Build Counsel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebuildcounsel.com",
    siteName: "The Build Counsel",
    title: "The Build Counsel — Growth Agency for Law Firms",
    description:
      "SEO, websites, and growth systems built specifically to turn traffic into paying clients. We don't work with everyone — just the firms serious about dominating their market.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Build Counsel — Growth Agency for Law Firms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Build Counsel — Growth Agency for Law Firms",
    description:
      "SEO, websites, and growth systems built specifically to turn traffic into paying clients.",
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
