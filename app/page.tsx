"use client";

import CustomCursor from "@/components/CustomCursor";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProblemSection from "@/components/ProblemSection";
import AuthorityStack from "@/components/AuthorityStack";
import Results from "@/components/Results";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import PracticeAreas from "@/components/PracticeAreas";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import ApplicationForm from "@/components/ApplicationForm";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main>
        <HeroSection />
        <ProblemSection />
        <MarqueeSection />
        <AuthorityStack />
        <Results />
        <Stats />
        <Process />
        <PracticeAreas />
        <Pricing />
        <CTASection />
        <ApplicationForm />
      </main>
      <CinematicFooter />
    </>
  );
}
