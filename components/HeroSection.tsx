"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Image from "next/image";

const rotatingWords = ["Dominate", "Rank", "Scale", "Convert", "Win"];

// ─── Floating card wrapper ────────────────────────────────────────────────────
// Outer div handles position + responsive scale (Tailwind transforms).
// Inner motion.div handles entry animation + rotate.
// Innermost motion.div handles infinite float.
// Splitting these means Tailwind's scale and framer's scale don't fight.
function FloatCard({
  children,
  position,
  rotate,
  delay,
  floatDuration,
  className = "",
  wrapperClass = "",
}: {
  children: React.ReactNode;
  position: React.CSSProperties;
  rotate: string;
  delay: number;
  floatDuration: number;
  className?: string;
  wrapperClass?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${wrapperClass}`}
      style={position}
    >
      <motion.div
        className={className}
        style={{ rotate }}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ delay: delay + 0.6, duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Card 1: ChatGPT (top-left) ───────────────────────────────────────────────
function ChatGPTCardInner() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
      <div className="px-5 pt-5 pb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <span className="text-[14px] font-semibold text-gray-900">ChatGPT</span>
            <span className="text-[12px] text-gray-400 ml-0.5">5.2</span>
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="mt-0.5">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center gap-2.5 text-gray-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <p className="text-center text-[16px] font-semibold text-gray-900 mb-4 leading-snug">
          What's on your mind today?
        </p>

        {/* Input bar */}
        <div className="border border-gray-200 rounded-full px-4 py-2.5 flex items-center gap-2 bg-white">
          <span className="text-gray-400 text-[15px] leading-none font-light shrink-0">+</span>
          <span className="text-[11px] text-gray-500 flex-1 truncate">
            help me find best injury attorney in Toronto
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" className="shrink-0">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" strokeLinecap="round"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" strokeLinecap="round"/>
          </svg>
          <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatGPTCard() {
  return (
    <FloatCard
      position={{ top: "13%", left: "3%" }}
      rotate="-6deg"
      delay={0}
      floatDuration={4}
      className="w-72"
      wrapperClass="scale-[0.55] lg:scale-75 xl:scale-90 2xl:scale-100 origin-top-left"
    >
      <ChatGPTCardInner />
    </FloatCard>
  );
}

// ─── Card 2: Google Search bar (top-right) ────────────────────────────────────
function GoogleSearchBarInner() {
  return (
    <div className="bg-white rounded-full shadow-2xl shadow-black/50 border border-gray-200 px-6 py-4 flex items-center gap-3">
      <span className="text-[16px] text-gray-600 flex-1 whitespace-nowrap">Lawyer near me</span>
      <div className="flex items-center gap-3 shrink-0">
        {/* X */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
        {/* Divider */}
        <div className="w-px h-5 bg-gray-300" />
        {/* Google Mic — multicolor */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="1" width="6" height="11" rx="3" fill="#4285F4"/>
          <path d="M5 10v2a7 7 0 0 0 14 0v-2" stroke="#34A853" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <line x1="12" y1="19" x2="12" y2="23" stroke="#FBBC04" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="9" y1="23" x2="15" y2="23" stroke="#EA4335" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        {/* Search */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#4285F4" strokeWidth="2"/>
          <path d="M16.5 16.5L21 21" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

function GoogleSearchBarCard() {
  return (
    <FloatCard
      position={{ top: "13%", right: "3%" }}
      rotate="5deg"
      delay={0.15}
      floatDuration={4.5}
      className="w-80"
      wrapperClass="scale-[0.55] lg:scale-75 xl:scale-90 2xl:scale-100 origin-top-right"
    >
      <GoogleSearchBarInner />
    </FloatCard>
  );
}

// ─── Card 3: Google Maps business listing (bottom-left) ───────────────────────
function GoogleMapsCardInner() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-5">
      <div className="flex gap-4">
        {/* Left: business info */}
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-bold text-gray-900 leading-tight mb-1.5">
            Brian Lipsum, Attorney At Law
          </p>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[12px] font-semibold text-gray-800">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC04">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-[11px] text-gray-500">(686) · Personal injury attorney</span>
          </div>
          <p className="text-[11px] text-gray-500 leading-snug mb-0.5">
            15+ years in business · 100 Dixie Rd, Toronto, Canada
          </p>
          <p className="text-[11px] mb-1.5">
            <span className="text-green-600 font-semibold">Open 24 hours</span>
            <span className="text-gray-500"> · +1 365-805-5602</span>
          </p>
          <div className="flex items-start gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#9ca3af" className="mt-0.5 shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p className="text-[11px] text-gray-500 italic leading-snug">
              "… Brian Lispum really helped me with my{" "}
              <span className="font-bold not-italic text-gray-700">personal injury</span> case."
            </p>
          </div>
        </div>

        {/* Right: action buttons */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="1.5"/>
                <path d="M2 12h20" stroke="#4285F4" strokeWidth="1.2"/>
                <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="#4285F4" strokeWidth="1.2"/>
              </svg>
            </div>
            <span className="text-[10px] text-blue-600 font-medium">Website</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 2.1L2.1 11.5l2.4.8L12 5.3l7.5 7 2.4-.8z"/>
                <path d="M12 5.3v16.4" stroke="white" strokeWidth="1.5"/>
                <path d="M5 12v9.7h4.5V16H14v5.7h4.5V12" fill="#4285F4"/>
              </svg>
            </div>
            <span className="text-[10px] text-blue-600 font-medium">Directions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleMapsCard() {
  return (
    <FloatCard
      position={{ bottom: "32%", left: "3%" }}
      rotate="-4deg"
      delay={0.3}
      floatDuration={5}
      className="w-[340px]"
      wrapperClass="scale-[0.55] lg:scale-75 xl:scale-90 2xl:scale-100 origin-bottom-left"
    >
      <GoogleMapsCardInner />
    </FloatCard>
  );
}

// ─── Card 4: Google Search organic result (bottom-right) ──────────────────────
function GoogleSearchResultInner() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-5">
      {/* Source row */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-200 flex items-center justify-center shrink-0">
          <span className="text-white text-[9px] font-bold">BL</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-medium text-gray-800 truncate">Brian Lipsum Law</p>
          <p className="text-[11px] text-gray-400 truncate">https://www.brianlispumtoronto.com</p>
        </div>
        <div className="flex flex-col gap-[3px] items-center shrink-0">
          {[0,1,2].map(i => <div key={i} className="w-[3px] h-[3px] bg-gray-400 rounded-full" />)}
        </div>
      </div>

      {/* Title */}
      <p className="text-[14px] font-medium text-blue-700 leading-snug mb-2">
        #1 Attorney in Toronto — Brian Lispum, Attorney At Law
      </p>

      {/* Description */}
      <p className="text-[11px] text-gray-600 leading-relaxed mb-2">
        Brian Lipsum <span className="font-bold">Injury Lawyers</span>: Protecting Your Rights After An Accident. Looking For A <span className="font-bold">Personal Injury Lawyer</span> in Toronto? Call Now For a 100% Free Consultation.
      </p>

      {/* Meta */}
      <p className="text-[11px] text-gray-500 mb-2.5 leading-snug">
        Personal Injury Lawyer · North York ·{" "}
        <span className="text-red-500">Closed</span> · Opens 8 am
      </p>

      {/* CTA button */}
      <div className="inline-flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="text-[11px] text-blue-600 font-medium">Call us</span>
      </div>
    </div>
  );
}

function GoogleSearchResultCard() {
  return (
    <FloatCard
      position={{ bottom: "32%", right: "3%" }}
      rotate="4deg"
      delay={0.45}
      floatDuration={3.8}
      className="w-[320px]"
      wrapperClass="scale-[0.55] lg:scale-75 xl:scale-90 2xl:scale-100 origin-bottom-right"
    >
      <GoogleSearchResultInner />
    </FloatCard>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[155vh] md:min-h-[140vh] flex flex-col items-center justify-start overflow-hidden pt-44 pb-24 md:pb-24"
    >
      {/* Background — pure black sky on top, image anchored to bottom 75% */}
      <div className="absolute inset-0 bg-black">
        {/* Image area: bottom 75% of the section only */}
        <div className="absolute inset-x-0 bottom-0 h-[75%]">
          <Image
            src="/hero-bg.png"
            alt="Law firm SEO services and legal marketing system dashboard showing Google, AI search, and paid ads results for Canadian law firms"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
          {/* Fade the top edge of the image into the black sky above for a seamless transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />
        </div>
        {/* Warm gold glow in the upper sky area, behind the headline */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gold/5 rounded-full blur-[160px]" />
      </div>

      {/* Corner cards — tablet and desktop */}
      <div className="hidden md:block" aria-hidden="true">
        <ChatGPTCard />
        <GoogleSearchBarCard />
        <GoogleMapsCard />
        <GoogleSearchResultCard />
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-warm-white/30 bg-warm-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-sans font-semibold text-warm-white tracking-[0.18em] uppercase">Built for the Legal Industry</span>
          </div>

          <h1 className="font-serif font-light leading-[1.1] tracking-tight text-warm-white mb-5 text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem] xl:text-6xl max-w-2xl mx-auto">
            Law Firm SEO Services &amp; Legal Marketing That Help You{" "}
            <motion.span
              key={wordIndex}
              className="text-gradient font-semibold italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-warm-white/80 leading-relaxed max-w-xl mx-auto mb-8">
            The Authority Stack™ is a complete legal marketing system, covering law firm SEO services,
            web design, Google Ads, and AI search, built exclusively for Canadian law firms that want
            signed cases, not vanity metrics.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <MagneticButton as="a" href="#apply-form" className="btn-primary text-sm py-3 px-6">
              Apply Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MagneticButton>
            <a
              href="#services"
              className="text-sm font-medium text-warm-white/90 hover:text-warm-white border border-warm-white/20 hover:border-warm-white/40 bg-warm-white/5 hover:bg-warm-white/10 backdrop-blur-sm transition-all duration-200 font-sans flex items-center gap-2 px-5 py-3 rounded-full group"
            >
              See the Authority Stack™
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M2 11L11 2M11 2H5M11 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile card slider — auto-scrolling marquee loop (sits under the CTA) */}
      <motion.div
        className="md:hidden relative z-10 w-full overflow-hidden mt-10 py-3"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {/* First set */}
          <div className="shrink-0 w-72 mr-4"><ChatGPTCardInner /></div>
          <div className="shrink-0 w-[320px] mr-4"><GoogleMapsCardInner /></div>
          <div className="shrink-0 w-[300px] mr-4"><GoogleSearchResultInner /></div>
          <div className="shrink-0 w-80 mr-4"><GoogleSearchBarInner /></div>
          {/* Duplicate set — identical trailing margin keeps the loop seamless */}
          <div className="shrink-0 w-72 mr-4"><ChatGPTCardInner /></div>
          <div className="shrink-0 w-[320px] mr-4"><GoogleMapsCardInner /></div>
          <div className="shrink-0 w-[300px] mr-4"><GoogleSearchResultInner /></div>
          <div className="shrink-0 w-80 mr-4"><GoogleSearchBarInner /></div>
        </motion.div>
      </motion.div>



      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-hidden="true"
      >
        <span className="text-[10px] text-muted font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
