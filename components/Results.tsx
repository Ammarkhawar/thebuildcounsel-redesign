"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    client: "Lawline Attorneys",
    logo: "/logo-lawline.png",
    logoAlt: "Lawline Attorneys",
    metric: "+980%",
    label: "Organic Traffic Growth",
    period: "18 months",
    area: "Personal Injury",
    tags: ["SEO", "Content Authority", "Local Search"],
    quote: "From page 4 to #1 for every major keyword in our market.",
    color: "#3b82f6",
  },
  {
    client: "TSM Law Group",
    logo: "/logo-tsm.png",
    logoAlt: "TSM Law Group",
    metric: "+564%",
    label: "Qualified Lead Volume",
    period: "12 months",
    area: "Criminal Defense",
    tags: ["Google Ads", "LSA", "CRO"],
    quote: "Our intake team can't keep up — that's a great problem to have.",
    color: "#C8411C",
    featured: true,
  },
  {
    client: "IPT Legal",
    logo: "/logo-ipt.png",
    logoAlt: "IPT Legal",
    metric: "+440%",
    label: "Signed Case Value",
    period: "8 months",
    area: "Immigration Law",
    tags: ["Social Authority", "Paid Ads", "Brand Building"],
    quote: "The Authority Stack paid for itself in the first 60 days.",
    color: "#10b981",
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="section-pad bg-dark/50">
      <div className="max-w-site">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-5 mx-auto">Proven Results</div>
          <h2 className="heading-lg text-warm-white mb-5">
            Real Law Firms.<br />
            <span className="text-gradient font-semibold italic">Real Numbers.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            These aren&apos;t projections. These are actual results from law firms that deployed
            the Authority Stack™.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              className={`relative rounded-2xl overflow-hidden group hover:-translate-y-1 ${
                cs.featured
                  ? "bg-gradient-to-br from-gold/15 via-dark-2 to-dark-2 border border-gold/30 shadow-lg shadow-gold/5"
                  : "bg-dark-2 border border-gold/10 hover:border-gold/25 hover:shadow-lg hover:shadow-black/50"
              } transition-all duration-400`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {cs.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-sans font-medium text-gold border border-gold/40 rounded-full px-2.5 py-1 bg-gold/10">
                    Featured
                  </span>
                </div>
              )}

              <div className="p-7">
                {/* Logo — real image with text fallback */}
                <div className="h-8 mb-5 flex items-center">
                  <div className="relative h-7 w-28">
                    <Image
                      src={cs.logo}
                      alt={cs.logoAlt}
                      fill
                      className="object-contain object-left"
                      sizes="112px"
                      onError={(e) => {
                        // Hide broken image and show text badge
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Metric */}
                <div className="mb-2">
                  <span
                    className="font-serif text-5xl md:text-6xl font-light leading-none"
                    style={{ color: cs.color }}
                  >
                    {cs.metric}
                  </span>
                </div>
                <p className="text-sm font-sans text-muted mb-1">{cs.label}</p>
                <p className="text-xs text-muted/60 font-sans mb-5">
                  {cs.period} · {cs.area}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-sans font-medium bg-dark-3 text-muted/80 rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-gold/30 pl-3">
                  <p className="text-xs text-muted/80 italic leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
                  <cite className="text-[10px] text-muted/50 not-italic mt-1 block">— {cs.client}</cite>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          className="border-t border-gold/10 pt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-center text-xs text-muted/60 font-sans tracking-widest uppercase mb-8">
            Trusted by leading law firms
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {["Lawline", "TSM Law", "IPT Legal", "Morrison & Assoc.", "Collins Legal"].map((name) => (
              <span key={name} className="text-sm font-sans font-medium text-muted/50 tracking-wide hover:text-muted/70 transition-colors duration-200">
                {name}
              </span>
            ))}
          </div>
          <p className="text-center text-sm font-serif text-warm-white/80 mt-8 italic">
            <span className="text-gradient font-semibold not-italic">$6 billion+</span> in signed case value generated for our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
