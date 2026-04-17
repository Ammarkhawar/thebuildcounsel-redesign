"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const STYLES = `
.tbc-footer-wrapper {
  --gold: #C8411C;
  --gold-light: #e05a32;
  --bg: #080808;
  --bg-2: #0e0e0e;
  --warm-white: #f5f2f0;
  --muted: #8a8784;

  --pill-bg-1: rgba(200, 65, 28, 0.07);
  --pill-bg-2: rgba(200, 65, 28, 0.02);
  --pill-shadow: rgba(0,0,0,0.5);
  --pill-highlight: rgba(245,242,240,0.07);
  --pill-inset-shadow: rgba(0,0,0,0.35);
  --pill-border: rgba(200,65,28,0.18);
  --pill-bg-1-hover: rgba(200,65,28,0.14);
  --pill-bg-2-hover: rgba(200,65,28,0.05);
  --pill-border-hover: rgba(200,65,28,0.45);
  --pill-shadow-hover: rgba(0,0,0,0.65);
  --pill-highlight-hover: rgba(245,242,240,0.14);

  font-family: var(--font-dm-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes tbc-breathe {
  0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.5; }
  100% { transform: translate(-50%,-50%) scale(1.12); opacity: 0.9; }
}
@keyframes tbc-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes tbc-heartbeat {
  0%,100% { transform: scale(1);   }
  15%,45% { transform: scale(1.3); }
  30%     { transform: scale(1);   }
}

.tbc-breathe   { animation: tbc-breathe   10s ease-in-out infinite alternate; }
.tbc-marquee   { animation: tbc-marquee   38s linear infinite; }
.tbc-heartbeat { animation: tbc-heartbeat 2.2s cubic-bezier(0.25,1,0.5,1) infinite; }

.tbc-bg-grid {
  background-size: 64px 64px;
  background-image:
    linear-gradient(to right, rgba(200,65,28,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(200,65,28,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
}

.tbc-aurora {
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(200,65,28,0.12) 0%,
    rgba(224,90,50,0.07) 45%,
    transparent 72%
  );
}

.tbc-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.tbc-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px var(--pill-shadow-hover), inset 0 1px 1px var(--pill-highlight-hover);
}

.tbc-giant-text {
  font-size: clamp(120px, 24vw, 380px);
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(245,242,240,0.04);
  background: linear-gradient(180deg, rgba(245,242,240,0.07) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
  font-family: var(--font-cormorant), Georgia, serif;
}

.tbc-heading-glow {
  background: linear-gradient(180deg, #f5f2f0 0%, rgba(245,242,240,0.45) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(200,65,28,0.2));
}
`;

// ─── Marquee strip ────────────────────────────────────────────────────────────
const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6 text-[#8a8784]">
    <span>Law Firm SEO Services</span>
    <span className="text-[#C8411C]/60">✦</span>
    <span>Legal Marketing Agency Canada</span>
    <span className="text-[#C8411C]/60">✦</span>
    <span>Authority Stack™</span>
    <span className="text-[#C8411C]/60">✦</span>
    <span>$6 Billion+ Generated</span>
    <span className="text-[#C8411C]/60">✦</span>
    <span>SEO Marketing for Law Firms</span>
    <span className="text-[#C8411C]/60">✦</span>
    <span>Google Ads · Legal SEO · AI Search</span>
    <span className="text-[#C8411C]/60">✦</span>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
export function CinematicFooter() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(giantTextRef.current,
        { y: "8vh", scale: 0.85, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%", end: "bottom bottom", scrub: 1.2 } }
      );
      gsap.fromTo([headingRef.current, linksRef.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 45%", end: "bottom bottom", scrub: 1 } }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain-reveal wrapper — sits in normal flow */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* Fixed footer content, revealed by the clip-path above */}
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden tbc-footer-wrapper"
          style={{ background: "#080808", color: "#f5f2f0" }}
        >
          {/* Ambient glow */}
          <div className="tbc-aurora absolute left-1/2 top-1/2 h-[65vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 tbc-breathe rounded-[50%] blur-[90px] pointer-events-none z-0" />
          {/* Grid */}
          <div className="tbc-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant BG text */}
          <div
            ref={giantTextRef}
            className="tbc-giant-text absolute -bottom-[3vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            COUNSEL
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tbc-heading-glow tracking-tight mb-3 text-center"
            >
              Ready to{" "}
              <span className="italic font-semibold" style={{ WebkitTextFillColor: "#C8411C", backgroundImage: "none", filter: "none" }}>
                Dominate
              </span>
              <br className="hidden md:block" /> Your Market?
            </h2>

            <p className="text-sm md:text-base mb-10 text-center max-w-md" style={{ color: "#8a8784" }}>
              We only take on a limited number of legal practices each quarter —
              to ensure every client gets our full attention and the results they deserve.
            </p>

            <div ref={linksRef} className="flex flex-col items-center gap-5 w-full">
              {/* Primary CTA */}
              <div className="flex justify-center">
                <MagneticButton
                  as="a"
                  href="#apply-form"
                  className="btn-primary px-10 py-4 text-base flex items-center gap-3 group"
                >
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap justify-center gap-4 mt-3">
                <a
                  href="mailto:info@thebuildcounsel.com"
                  className="flex items-center gap-2.5 bg-dark-3 border border-gold/20 rounded-xl px-5 py-3 text-sm font-medium text-warm-white hover:border-gold/40 hover:bg-dark-4 transition-all duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-gold shrink-0">
                    <rect x="1" y="2.5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M1 5L7.5 9L14 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  info@thebuildcounsel.com
                </a>
                <a
                  href="tel:+13658055602"
                  className="flex items-center gap-2.5 bg-dark-3 border border-gold/20 rounded-xl px-5 py-3 text-sm font-medium text-warm-white hover:border-gold/40 hover:bg-dark-4 transition-all duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-gold shrink-0">
                    <path d="M2.5 3C2.5 2.4 3 2 3.5 2H5.5L7 5.5L5 6.5C5.7 8 7.5 9.8 9 10.5L10 8.5L13.5 10V12C13.5 12.6 13 13 12.5 13C6 13 2.5 6.5 2.5 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                  +1 (365) 805-5602
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-7 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            {/* Logo + copyright */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image src="/logo.svg" alt="The Build Counsel" width={80} height={32} className="h-6 w-auto opacity-60" />
              <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "#8a8784" }}>
                © {new Date().getFullYear()} The Build Counsel
              </span>
            </div>

            {/* "Law Firms Only" badge */}
            <div
              className="tbc-glass-pill px-6 py-2.5 rounded-full flex items-center gap-2 justify-self-center mx-auto cursor-default"
            >
              <span className="tbc-heartbeat text-sm" style={{ color: "#C8411C" }}>✦</span>
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: "#8a8784" }}>
                Built for the Legal Industry · The Build Counsel · Canada 🇨🇦
              </span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-11 h-11 rounded-full tbc-glass-pill flex items-center justify-center group justify-self-end ml-auto"
              style={{ color: "#8a8784" }}
            >
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
