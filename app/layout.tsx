import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Dancing_Script, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export const metadata: Metadata = {
  title: "The Build Counsel — Growth Agency for Law Firms",
  description:
    "The Build Counsel is the only growth agency built exclusively for law firms. We deploy the Authority Stack™ — a multi-channel system that turns search, paid ads, social, and conversion into a unified client acquisition machine.",
  keywords: ["law firm marketing", "legal SEO", "law firm growth", "attorney marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable, dancing.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
