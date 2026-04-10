"use client";

import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStack from "@/components/AuthorityStack";
import Results from "@/components/Results";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import PracticeAreas from "@/components/PracticeAreas";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <AuthorityStack />
        <Results />
        <Stats />
        <Process />
        <PracticeAreas />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
