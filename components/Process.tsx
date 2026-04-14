"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Audit",
    sub: "Week 1–2",
    desc: "We conduct a comprehensive audit of your firm's current digital footprint — SEO health, ad spend efficiency, website conversion rates, and competitive positioning. No guesswork. Just data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
        <path d="M10 4V2M10 18v-2M4 10H2M18 10h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    deliverables: ["Market Analysis", "Competitor Landscape", "Opportunity Map", "Baseline Metrics"],
  },
  {
    num: "02",
    title: "Authority Stack Design",
    sub: "Week 2–3",
    desc: "Our strategists design a custom Authority Stack blueprint tailored to your practice areas, market, and growth goals. Every channel is mapped, sequenced, and budgeted.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    deliverables: ["Custom Strategy Doc", "Channel Blueprint", "Budget Allocation", "90-Day Roadmap"],
  },
  {
    num: "03",
    title: "Infrastructure Build-Out",
    sub: "Week 3–6",
    desc: "We build everything from the ground up — campaigns, content, landing pages, tracking, and intake flows. You approve. We execute. Nothing goes live without your sign-off.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 16L7 12M17 3l-5 5M13 6l1 1M2 18l3.5-1 8-8-2.5-2.5-8 8L2 18z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    deliverables: ["Campaign Setup", "Website / Landing Pages", "Tracking & Analytics", "Content Pipeline"],
  },
  {
    num: "04",
    title: "Launch & Optimize",
    sub: "Month 2+",
    desc: "We launch, monitor, and continuously optimize across all channels. Monthly reports, bi-weekly calls, and real-time dashboard access keep you fully in the loop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L9 11M16 4l-5 7M12 4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12c0-4.418 3.582-8 8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
    deliverables: ["Go-Live", "Weekly Optimization", "Monthly Reporting", "Ongoing Expansion"],
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="section-pad bg-dark/40">
      <div className="max-w-site">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-5 mx-auto">How It Works</div>
          <h2 className="heading-lg text-warm-white mb-5">
            From Zero to{" "}
            <span className="text-gradient font-semibold italic">Market Authority</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            A proven 4-step methodology refined across dozens of law firm engagements.
            Predictable, transparent, and built to compound over time.
          </p>
        </motion.div>

        {/* Steps — editorial full-width rows */}
        <div className="relative">

          {/* Vertical timeline line (desktop) */}
          <div
            className="absolute hidden xl:block top-6 bottom-6 w-px pointer-events-none"
            style={{
              left: "88px",
              background: "linear-gradient(to bottom, transparent, rgba(200,65,28,0.15) 20%, rgba(200,65,28,0.15) 80%, transparent)",
            }}
          />

          <div className="divide-y divide-gold/8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="group relative grid grid-cols-1 xl:grid-cols-[176px_1fr_300px] gap-y-6 xl:gap-x-14 py-12 xl:py-14"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >

                {/* Left: giant step number + icon */}
                <div className="flex xl:flex-col items-center xl:items-start gap-5 xl:gap-4">
                  {/* Giant number */}
                  <span
                    className="font-serif font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(60px, 6vw, 96px)",
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(200,65,28,0.22)",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Icon pill */}
                  <div className="flex items-center gap-2.5 xl:mt-1">
                    <div className="w-9 h-9 rounded-xl bg-dark-3 border border-gold/20 flex items-center justify-center text-gold/80 shrink-0 group-hover:border-gold/40 group-hover:text-gold transition-all duration-400">
                      {step.icon}
                    </div>
                    {/* Mobile-only step label */}
                    <span className="xl:hidden text-[10px] font-sans font-semibold text-muted/50 tracking-[0.2em] uppercase">
                      Step {step.num}
                    </span>
                  </div>
                </div>

                {/* Center: title + timeline + description */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                    <h3 className="font-serif text-3xl xl:text-4xl text-warm-white font-light leading-tight">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium text-gold/80 bg-gold/8 border border-gold/15 rounded-full px-3 py-1 shrink-0">
                      <span className="w-1 h-1 rounded-full bg-gold/60" />
                      {step.sub}
                    </span>
                  </div>
                  <p className="text-[15px] text-muted leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Right: deliverables */}
                <div className="flex flex-col justify-center xl:border-l xl:border-gold/8 xl:pl-10">
                  <p className="text-[9px] font-sans font-semibold text-muted/40 tracking-[0.22em] uppercase mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-3">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-muted font-sans">
                        <span className="w-5 h-5 rounded-full bg-gold/8 border border-gold/20 flex items-center justify-center shrink-0">
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="text-gold/70">
                            <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover glow accent */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(200,65,28,0.04) 0%, transparent 70%)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
