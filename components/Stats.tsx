"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const stats = [
  { value: 6, prefix: "$", suffix: "B+", label: "In signed case value", sub: "Generated for our clients", isText: false },
  { value: 12, prefix: "", suffix: "+", label: "Practice areas covered", sub: "By our system", isText: false },
  { value: 0, prefix: "", suffix: "90 days", label: "To first results", sub: "Guaranteed or we work free", isText: true },
  { value: 340, prefix: "", suffix: "%", label: "Average traffic growth", sub: "In the first 12 months", isText: false },
];

function AnimatedNumber({ value, prefix, suffix, inView, isText }: { value: number; prefix: string; suffix: string; inView: boolean; isText: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isText) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, isText]);

  if (isText) return <span>{suffix}</span>;
  return <span>{prefix}{display}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`text-center group px-4 md:px-8 ${i % 2 === 0 && i !== 0 ? "border-t lg:border-t-0 border-gold/10" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-gold/10 pt-8 lg:pt-0" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white font-light mb-2 group-hover:text-gold transition-colors duration-500">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} isText={stat.isText} />
              </div>
              <div className="text-base font-sans font-medium text-warm-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-muted font-sans">{stat.sub}</div>
              <div className="w-8 h-px bg-gold/30 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton as="a" href="#apply-form" className="btn-primary text-sm px-8 py-3.5">
            Apply Now
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
