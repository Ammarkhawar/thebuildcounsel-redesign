"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const rotatingWords = ["Dominate", "Own", "Lead", "Win"];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="section-pad relative overflow-hidden"
    >
      {/* Stronger background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/6 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gold/8 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-site relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-tag mb-6 mx-auto">Ready to Scale?</div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-white font-light leading-[1.05] mb-6 tracking-tight">
            Ready to{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="text-gradient font-semibold italic inline-block"
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            <br className="hidden md:block" />
            Your Market?
          </h2>

          <p className="body-lg max-w-2xl mx-auto mb-10">
            We only take on a limited number of firms each quarter to ensure every client gets
            our full attention. Spots are limited. If you&apos;re serious about growth, let&apos;s talk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8"
              aria-label="Book your free strategy call"
            >
              Book Your Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:hello@thebuildcounsel.com"
              className="btn-ghost text-base py-4 px-8"
            >
              Send Us a Message
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-muted font-sans">
            {[
              "No commitment required for the call",
              "30-minute session, zero sales pressure",
              "Law firms only",
            ].map((text, i) => (
              <span key={text} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-px h-3 bg-gold/20" aria-hidden="true" />}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6L5 9L10 3" stroke="#C8411C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
