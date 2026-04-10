"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Search Authority",
    sub: "SEO & AI Search",
    desc: "Dominate Google, Bing, and emerging AI search engines like ChatGPT and Perplexity. We build topical authority so your firm is the answer — everywhere clients look.",
    icon: "↑",
    tags: ["Technical SEO", "Content Authority", "AI Search", "Local SEO"],
    gradient: "from-blue-500/10 to-transparent",
    accent: "#3b82f6",
    span: "col-span-1",
  },
  {
    num: "02",
    title: "Paid Acquisition",
    sub: "Google Ads · LSA · PPC",
    desc: "Precision-targeted paid campaigns that generate qualified leads — not just clicks. Google Local Service Ads, PPC, and retargeting built for law firm conversion rates.",
    icon: "◈",
    tags: ["Google Ads", "LSA", "PPC", "Retargeting"],
    gradient: "from-gold/10 to-transparent",
    accent: "#C8411C",
    span: "col-span-1",
  },
  {
    num: "03",
    title: "Social Authority",
    sub: "Facebook · Instagram · Retargeting",
    desc: "Build brand omnipresence across social platforms. We turn social media into a trust-building engine that keeps your firm top of mind throughout the client journey.",
    icon: "◎",
    tags: ["Facebook Ads", "Instagram", "Brand Building", "Audience Targeting"],
    gradient: "from-purple-500/10 to-transparent",
    accent: "#a855f7",
    span: "col-span-1",
  },
  {
    num: "04",
    title: "Conversion Infrastructure",
    sub: "Website Design & CRO",
    desc: "Your website is your best salesperson. We engineer high-converting landing pages, intake forms, and site experiences designed to turn visitors into signed clients.",
    icon: "⊕",
    tags: ["Web Design", "CRO", "Intake Forms", "A/B Testing"],
    gradient: "from-emerald-500/10 to-transparent",
    accent: "#10b981",
    span: "col-span-1",
  },
];

export default function AuthorityStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            The Authority Stack™
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Four synchronized pillars that work together to make your firm impossible to ignore —
            across every channel your future clients use to find legal help.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Anchor Card */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-dark-2 border border-gold/15 rounded-2xl p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/8 transition-all duration-700" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-gold/15 border border-gold/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-gold font-serif text-xl">✦</span>
              </div>

              <div className="label-tag mb-4 text-[10px]">Multi-Channel System</div>

              <h3 className="font-serif text-3xl md:text-4xl text-warm-white font-light leading-tight mb-4">
                One System.<br />
                <span className="text-gold font-semibold italic">Every Channel.</span><br />
                Infinite Authority.
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
                Most agencies pick a lane. We built the highway. The Authority Stack™ coordinates
                all four growth channels into a single, compounding client acquisition machine.
              </p>

              {/* Pillar indicators */}
              <div className="grid grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div key={p.num} className="flex items-center gap-2.5 bg-dark-3 rounded-lg px-3 py-2.5">
                    <span className="text-base" style={{ color: p.accent }}>{p.icon}</span>
                    <div>
                      <div className="text-[10px] text-muted font-sans">{p.num}</div>
                      <div className="text-xs text-warm-white font-sans font-medium">{p.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gold/10 flex items-center justify-between">
                <span className="text-xs text-muted font-sans">All channels. One team. Zero silos.</span>
                <a href="#contact" className="text-gold text-xs font-sans hover:text-gold-light transition-colors flex items-center gap-1">
                  Learn more →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Pillar Cards */}
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              className="bg-dark-2 border border-gold/10 rounded-2xl p-6 relative overflow-hidden group hover:border-gold/25 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-sans font-medium text-muted tracking-wider">{pillar.num}</span>
                  <span className="text-2xl" style={{ color: pillar.accent }}>{pillar.icon}</span>
                </div>

                <h3 className="font-serif text-xl text-warm-white font-light mb-1">{pillar.title}</h3>
                <p className="text-xs text-muted font-sans mb-3">{pillar.sub}</p>
                <p className="text-xs text-muted/80 leading-relaxed mb-4">{pillar.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-sans font-medium px-2 py-0.5 rounded-full border"
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
