"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 6, prefix: "$", suffix: "B+", label: "In Signed Case Value", sub: "Generated for our clients" },
  { value: 100, prefix: "", suffix: "%", label: "Law Firms Only", sub: "No exceptions, ever" },
  { value: 8, prefix: "", suffix: "+", label: "Practice Areas", sub: "Covered by our system" },
  { value: 340, prefix: "+", suffix: "%", label: "Average Traffic Growth", sub: "In the first 12 months" },
];

function AnimatedNumber({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, value]);

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent pointer-events-none" />

      <div className="max-w-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white font-light mb-2 group-hover:text-gold transition-colors duration-500">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-base font-sans font-medium text-warm-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-muted font-sans">{stat.sub}</div>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mx-auto mt-4 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
