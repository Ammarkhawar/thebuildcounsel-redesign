"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    num: "01",
    title: "Search Authority",
    sub: "SEO & AI Search",
    desc: "Dominate Google, Bing, and AI search engines like ChatGPT, Claude and Perplexity through expert law firm SEO services. We build topical authority so your firm is the answer — everywhere legal clients look across Canada.",
    icon: "↑",
    tags: ["Technical SEO", "Content Authority", "AI Search", "Local SEO"],
    gradient: "from-blue-500/10 to-transparent",
    accent: "#3b82f6",
    metric: "+980%",
    metricLabel: "organic growth",
    image: "/service-search.jpg",
    imageAlt: "Law firm SEO services showing organic search growth results for Canadian legal practices",
  },
  {
    num: "02",
    title: "Paid Acquisition",
    sub: "Google Ads · LSA · PPC",
    desc: "Precision-targeted paid campaigns that generate qualified leads — not just clicks. Google Local Service Ads, PPC, and retargeting built specifically for law firm conversion rates in competitive Canadian legal markets.",
    icon: "◈",
    tags: ["Google Ads", "LSA", "PPC", "Retargeting"],
    gradient: "from-gold/10 to-transparent",
    accent: "#C8411C",
    metric: "6.2×",
    metricLabel: "lead multiplier",
    image: "/service-paid.jpg",
    imageAlt: "Google Ads and paid search campaigns for law firms in Canada",
  },
  {
    num: "03",
    title: "Social Authority",
    sub: "Facebook · Instagram · Retargeting",
    desc: "Build brand omnipresence across social platforms. We turn social media into a trust-building engine that keeps your legal practice top of mind throughout the entire client journey — from first search to signed retainer.",
    icon: "◎",
    tags: ["Facebook Ads", "Instagram", "Brand Building", "Audience Targeting"],
    gradient: "from-purple-500/10 to-transparent",
    accent: "#a855f7",
    metric: "+41%",
    metricLabel: "brand lift",
    image: "/service-social.jpg",
    imageAlt: "Social media advertising campaigns for law firms and legal practices",
  },
  {
    num: "04",
    title: "Conversion Infrastructure",
    sub: "Website Design & CRO",
    desc: "Your website is your best salesperson. We engineer high-converting law firm web design, intake forms, and site experiences built to turn visitors into signed clients — not just traffic numbers.",
    icon: "⊕",
    tags: ["Web Design", "CRO", "Intake Forms", "A/B Testing"],
    gradient: "from-emerald-500/10 to-transparent",
    accent: "#10b981",
    metric: "38%",
    metricLabel: "conv. lift",
    image: "/service-conversion.jpg",
    imageAlt: "Law firm web design and conversion rate optimization for legal practices",
  },
];

export default function AuthorityStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <section id="services" ref={ref} className="section-pad">
      <div className="max-w-site">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-tag mb-5 mx-auto">The System</div>
          <h2 className="heading-lg text-warm-white mb-5">
            The Authority Stack™ — Our Law Firm SEO &amp; Growth Framework
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Four synchronized pillars that work together to make your firm impossible to ignore
            across every channel your future clients use. This is not SEO alone. This is not ads alone.
            This is law firm SEO services, paid acquisition, social authority, and conversion, working as one.
          </p>
        </motion.div>

        {/* Anchor Banner — full width horizontal */}
        <motion.div
          className="bg-dark-2 border border-gold/15 rounded-2xl px-8 py-7 relative overflow-hidden group mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-transparent to-transparent" />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/8 transition-all duration-700" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            {/* Left: icon + heading */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="w-11 h-11 bg-gold/15 border border-gold/30 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-gold font-serif text-lg">✦</span>
              </div>
              <div>
                <div className="label-tag mb-1.5 text-[10px]">Multi-Channel System</div>
                <h3 className="font-serif text-2xl md:text-3xl text-warm-white font-light leading-tight">
                  One System.{" "}
                  <span className="text-gold font-semibold italic">Every Channel.</span>{" "}
                  Maximum Authority.
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-gold/10 shrink-0" />

            {/* Center: description */}
            <p className="text-muted text-sm leading-relaxed max-w-sm shrink-0">
              Most agencies pick one lane. We built the highway. The Authority Stack™ coordinates
              all four growth channels into a single, compounding client acquisition machine for
              law firms across Canada.
            </p>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-gold/10 shrink-0" />

            {/* Right: metrics row */}
            <div className="flex flex-wrap gap-3 flex-1">
              {pillars.map((p) => (
                <div key={p.num} className="flex items-center gap-2 bg-dark-3 rounded-lg px-3 py-2 group-hover:bg-dark-4 transition-colors duration-300">
                  <span className="text-sm shrink-0" style={{ color: p.accent }}>{p.icon}</span>
                  <span className="text-xs text-warm-white font-sans font-medium whitespace-nowrap">{p.title}</span>
                  <span className="text-[11px] font-serif font-semibold ml-1" style={{ color: p.accent }}>{p.metric}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#apply-form" className="text-gold text-sm font-sans hover:text-gold-light transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              Get started →
            </a>
          </div>
        </motion.div>

        {/* Pillar Cards — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="bg-dark-2 border border-gold/10 rounded-2xl relative overflow-hidden group hover:border-gold/25 hover:-translate-y-1 transition-all duration-400 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Graphic */}
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-black/40" style={{ aspectRatio: "16/11" }}>
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover object-center scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-2" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-sans font-medium text-muted tracking-wider">{pillar.num}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-base font-semibold" style={{ color: pillar.accent }}>{pillar.metric}</span>
                    <span className="text-[11px] text-muted font-sans">{pillar.metricLabel}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-warm-white font-light mb-1">{pillar.title}</h3>
                <p className="text-sm text-muted font-sans mb-3">{pillar.sub}</p>
                <p className="text-sm text-muted/80 leading-relaxed mb-4">{pillar.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-full border"
                      style={{ borderColor: `${pillar.accent}30`, color: pillar.accent, backgroundColor: `${pillar.accent}10` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
