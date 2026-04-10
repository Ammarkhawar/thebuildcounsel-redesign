"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const rotatingWords = ["Dominate", "Own", "Lead", "Win"];

const mockupCards = [
  {
    id: "chatgpt",
    label: "ChatGPT",
    icon: "✦",
    color: "#10a37f",
    content: "What's the best personal injury law firm in Houston?",
    response: "Based on case outcomes and client reviews, Morrison & Associates stands out...",
    delay: 0,
    position: { top: "8%", left: "2%", rotate: -8 },
  },
  {
    id: "google",
    label: "Google Search",
    icon: "G",
    color: "#4285F4",
    content: "best criminal defense attorney near me",
    tags: ["Ad", "#1 Organic", "Maps Pack"],
    delay: 0.15,
    position: { top: "5%", right: "2%", rotate: 6 },
  },
  {
    id: "maps",
    label: "Google Maps",
    icon: "◎",
    color: "#EA4335",
    content: "Law Offices — 4.9 ★ (312 reviews)",
    sub: "Open now · Personal Injury",
    delay: 0.3,
    position: { bottom: "12%", left: "0%", rotate: -4 },
  },
  {
    id: "organic",
    label: "Organic Search",
    icon: "↑",
    color: "#C8411C",
    content: "Position #1",
    sub: "12 keywords in top 3",
    delta: "+340% traffic",
    delay: 0.45,
    position: { bottom: "8%", right: "0%", rotate: 5 },
  },
];

function MockupCard({ card, index }: { card: typeof mockupCards[0]; index: number }) {
  return (
    <motion.div
      className="absolute w-48 sm:w-56 bg-dark-3 border border-gold/15 rounded-xl p-3.5 shadow-2xl shadow-black/60 backdrop-blur-sm"
      style={card.position as unknown as React.CSSProperties}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        scale: 1,
        transition: {
          opacity: { delay: card.delay, duration: 0.6 },
          scale: { delay: card.delay, duration: 0.6 },
          y: {
            delay: card.delay + 0.6,
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
          style={{ backgroundColor: card.color }}
        >
          {card.icon}
        </span>
        <span className="text-[10px] font-sans font-medium text-muted tracking-wide uppercase">
          {card.label}
        </span>
      </div>
      <p className="text-xs font-sans text-warm-white leading-relaxed mb-1.5">{card.content}</p>
      {card.response && (
        <p className="text-[10px] text-muted leading-relaxed line-clamp-2">{card.response}</p>
      )}
      {card.tags && (
        <div className="flex gap-1 flex-wrap mt-1">
          {card.tags.map((t) => (
            <span key={t} className="text-[9px] bg-gold/15 text-gold rounded px-1.5 py-0.5 font-medium">
              {t}
            </span>
          ))}
        </div>
      )}
      {card.sub && <p className="text-[10px] text-muted mt-1">{card.sub}</p>}
      {card.delta && (
        <span className="text-[10px] text-emerald-400 font-medium mt-1 block">{card.delta}</span>
      )}
    </motion.div>
  );
}

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-site w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="label-tag mb-6 mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Law Firms Only · No Exceptions
            </div>

            <h1 className="heading-xl text-warm-white mb-6">
              We Help Law Firms{" "}
              <span className="block">
                <motion.span
                  key={wordIndex}
                  className="text-gradient font-semibold italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>{" "}
                Their Market
              </span>
            </h1>

            <p className="body-lg max-w-lg mx-auto lg:mx-0 mb-8">
              The Authority Stack™ is a multi-channel growth system that turns search, paid ads,
              social media, and conversion into a unified client acquisition machine — built
              exclusively for law firms.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary text-sm py-3.5 px-7">
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#services" className="btn-ghost text-sm py-3.5 px-7">
                See the Authority Stack™
              </a>
            </div>

            {/* Stat strip */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { value: "$6B+", label: "Case Value Generated" },
                { value: "100%", label: "Law Firms Only" },
                { value: "8+", label: "Practice Areas" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl font-semibold text-warm-white">{s.value}</div>
                  <div className="text-xs text-muted font-sans mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Mockup Cards */}
          <motion.div
            className="relative h-[420px] sm:h-[500px] hidden lg:block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gold/8 rounded-full blur-3xl" />
              <div className="absolute w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
            </div>

            {/* Center badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-dark-3 border border-gold/30 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center mb-1">
                  <span className="font-serif text-white font-bold text-sm">BC</span>
                </div>
                <span className="text-[9px] text-muted font-sans text-center leading-tight">
                  Authority<br />Stack™
                </span>
              </div>
            </div>

            {mockupCards.map((card, i) => (
              <MockupCard key={card.id} card={card} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] text-muted font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
