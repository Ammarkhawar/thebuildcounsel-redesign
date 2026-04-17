"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  { name: "Personal Injury", icon: "⚖", desc: "Auto accidents, slip & fall, medical malpractice, wrongful death." },
  { name: "Criminal Defense", icon: "◉", desc: "DUI, drug charges, assault, federal crimes, and expungements." },
  { name: "Tax & Bankruptcy", icon: "◈", desc: "IRS disputes, Chapter 7/13, debt relief, and financial restructuring." },
  { name: "Business Law", icon: "⊞", desc: "Contracts, litigation, M&A, entity formation, and compliance." },
  { name: "Divorce & Family", icon: "◎", desc: "Divorce, custody, child support, adoption, and prenuptials." },
  { name: "Employment Law", icon: "↑", desc: "Discrimination, wrongful termination, harassment, and wage claims." },
  { name: "Tickets & DUI", icon: "⊕", desc: "Traffic violations, DUI defense, license reinstatement, and more." },
  { name: "Immigration Law", icon: "✦", desc: "Visas, green cards, naturalization, deportation defense, and asylum." },
];

export default function PracticeAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="areas" ref={ref} className="section-pad">
      <div className="max-w-site">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-5 mx-auto">Coverage</div>
          <h2 className="heading-lg text-warm-white mb-5">
            Built for Every Area of{" "}
            <span className="text-gradient font-semibold italic">Legal Practice</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            Our law firm SEO services and marketing system adapts to your practice area — with
            legal-specific keyword strategies, content frameworks, and audience targeting built
            for each area of law across Canada 🇨🇦.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              className="group bg-dark-2 border border-gold/10 rounded-xl p-5 hover:border-gold/30 hover:bg-dark-3 transition-all duration-400 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="text-2xl text-gold/70 group-hover:text-gold transition-colors duration-300 mb-3">
                {area.icon}
              </div>
              <h3 className="font-serif text-lg text-warm-white font-light mb-1.5 group-hover:text-gold transition-colors duration-300">
                {area.name}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-sm text-muted/70 font-sans mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Don&apos;t see your area of law?{" "}
          <a href="#apply-form" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">
            We cover more than you think. →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
