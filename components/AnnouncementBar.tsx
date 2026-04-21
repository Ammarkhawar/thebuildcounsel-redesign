"use client";

import { Banner } from "@/components/ui/banner";

export default function AnnouncementBar() {
  return (
    <Banner
      id="tbc-limited-spots"
      variant="rainbow"
      className="bg-announcement shadow-[0_2px_16px_-4px_rgba(120,30,10,0.55)] border-b border-warm-white/15 py-2 md:py-0 md:h-12"
      rainbowColors={[
        "rgba(255,255,255,0.38)",
        "rgba(255,225,195,0.32)",
        "transparent",
        "rgba(255,255,255,0.28)",
        "transparent",
        "rgba(255,210,175,0.3)",
        "transparent",
      ]}
    >
      <span className="inline-flex items-center gap-2 px-6 text-xs sm:text-sm font-sans font-medium text-white text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-white animate-pulse" />
        <span>
          Limited Spots — We only take on{" "}
          <strong className="font-semibold">3 new firms per month</strong>{" "}
          for our law firm SEO and marketing program.{" "}
          <a href="#apply-form" className="underline underline-offset-4 decoration-white/70 hover:decoration-white transition ml-1">
            Book your strategy call →
          </a>
        </span>
      </span>
    </Banner>
  );
}
