"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Audit",
    sub: "Week 1–2",
    desc: "We conduct a comprehensive audit of your firm's current digital footprint — SEO health, ad spend efficiency, website conversion rates, and competitive positioning. No guesswork. Just data.",
    icon: "◉",
    deliverables: ["Market Analysis", "Competitor Landscape", "Opportunity Map", "Baseline Metrics"],
  },
  {
    num: "02",
    title: "Authority Stack Design",
    sub: "Week 2–3",
    desc: "Our strategists design a custom Authority Stack blueprint tailored to your practice areas, market, and growth goals. Every channel is mapped, sequenced, and budgeted.",
    icon: "◈",
    deliverables: ["Custom Strategy Doc", "Channel Blueprint", "Budget Allocation", "90-Day Roadmap"],
  },
  {
    num: "03",
    title: "Infrastructure Build-Out",
    sub: "Week 3–6",
    desc: "We build everything from the ground up — campaigns, content, landing pages, tracking, and intake flows. You approve. We execute. Nothing goes live without your sign-off.",
    icon: "⊞",
    deliverables: ["Campaign Setup", "Website/Landing Pages", "Tracking & Analytics", "Content Pipeline"],
  },
  {
    num: "04",
    title: "Launch & Optimize",
    sub: "Month 2+",
    desc: "We launch, monitor, and continuously optimize across all channels. Monthly reports, bi-weekly calls, and real-time dashboard access keep you fully in the loop.",
    icon: "↗",
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
          className="text-center mb-16"
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
            A proven 4-step methodology refined across dozens of law firm engagements. Predictable,
            transparent, and built to compound over time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center lg:items-start mb-5">
                  <div className="w-10 h-10 bg-dark-2 border border-gold/25 rounded-xl flex items-center justify-center mb-3 group-hover:border-gold/50 transition-all duration-400 relative z-10 bg-[#0e0e0e]">
                    <span className="text-gold text-lg">{step.icon}</span>
                  </div>
                  <div className="text-[10px] font-sans font-medium text-muted tracking-[0.2em] uppercase">
                    Step {step.num}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-dark-2 border border-gold/10 rounded-xl p-5 group-hover:border-gold/20 transition-all duration-400">
                  <h3 className="font-serif text-xl text-warm-white font-light mb-1">{step.title}</h3>
                  <p className="text-xs text-gold font-sans font-medium mb-3">{step.sub}</p>
                  <p className="text-xs text-muted leading-relaxed mb-5">{step.desc}</p>

                  <div className="border-t border-gold/10 pt-4">
                    <p className="text-[9px] text-muted/60 font-sans tracking-widest uppercase mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-muted/80 font-sans">
                          <span className="w-1 h-1 bg-gold/50 rounded-full shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
