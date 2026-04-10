"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const painPoints = [
  { icon: "◎", label: "Invisible on Google" },
  { icon: "↑", label: "Skyrocketing ad spend" },
  { icon: "⚡", label: "Competitors outranking you" },
  { icon: "✕", label: "No consistent inbound cases" },
  { icon: "✦", label: "Broken agency promises" },
  { icon: "◈", label: "Missed AI search results" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative section-pad bg-dark border-b border-gold/8"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-site">
        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-6"
        >
          <span className="label-tag">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            The Real Problem
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="heading-lg text-center text-warm-white max-w-3xl mx-auto mb-16"
        >
          Are you struggling to get enough{" "}
          <span className="text-gradient font-semibold italic">
            High-Quality Leads
          </span>{" "}
          for your law practice?
        </motion.h2>

        {/* Pain point badges */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-2 border border-gold/20 bg-gold/5 rounded-full px-4 py-2 hover:border-gold/40 hover:bg-gold/8 transition-all duration-300"
            >
              <span className="text-gold text-xs">{point.icon}</span>
              <span className="text-sm font-sans text-warm-white/80 font-medium">
                {point.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder quote */}
        <motion.div
          custom={9}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Quote card */}
          <div className="relative bg-dark-2 border border-gold/15 rounded-2xl p-8 md:p-12">
            {/* Large decorative quote mark */}
            <div
              aria-hidden="true"
              className="absolute -top-5 left-8 md:left-12 font-serif text-7xl text-gold/20 leading-none select-none"
            >
              "
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="font-serif text-gold text-xl font-semibold">AK</span>
                </div>
              </div>

              {/* Quote text */}
              <div className="flex-1">
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-warm-white leading-[1.4] mb-6">
                  Your law firm isn't struggling for clients — it's struggling with{" "}
                  <span className="italic text-gold">
                    outdated, one-channel strategies
                  </span>{" "}
                  from agencies who focus on fluffy outcomes. Today's prospects see ads, maps,
                  organic listings, AI results, and social all at once. To win, you need to be{" "}
                  <span className="italic">everywhere.</span>
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/40" />
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-white">
                      Ammar Khawar
                    </p>
                    <p className="font-sans text-xs text-muted">
                      Founder, The Build Counsel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/3 rounded-br-2xl blur-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
