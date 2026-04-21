"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChevronDown } from "lucide-react";
import { PricingWrapper, CardHeading, CardPrice, CardParagraph, CardNote } from "@/components/ui/animated-pricing-cards";

const packages = [
  {
    label: "Foundation",
    name: "Foundation",
    price: "$1,200",
    period: "/mo",
    tagline: "Get found locally. For firms with no presence or an outdated site.",
    note: "Website build billed separately ($3k–$5k)",
    popular: false,
    intro: null,
    features: [
      "Website design + build (Webflow or WordPress)",
      "Google Business Profile optimization",
      "Local citation building — 20+ directories",
      "On-page SEO — title tags, schema, meta",
      "2 practice area pages per month",
      "Monthly performance report",
    ],
  },
  {
    label: "Most popular",
    name: "Growth",
    price: "$2,500",
    period: "/mo",
    tagline: "Rank, convert, and track real leads — not just traffic.",
    note: "No setup fee · 90-day minimum",
    popular: true,
    intro: "Everything in Foundation, plus:",
    features: [
      "Full keyword strategy + content calendar",
      "4 blog posts or landing pages per month",
      "Google Ads + Local Service Ads management",
      "Call tracking setup and reporting",
      "Review generation system",
      "Bi-weekly strategy calls",
    ],
  },
  {
    label: "Authority Stack™",
    name: "Authority Stack™",
    price: "$5,000",
    period: "/mo",
    tagline: "Total market dominance across every channel your clients use.",
    note: "+ client controls ad spend · market exclusivity",
    popular: false,
    intro: "Everything in Growth, plus:",
    features: [
      "Facebook + Instagram ad campaigns",
      "AI search optimization (ChatGPT, Perplexity, Claude)",
      "CRO — intake forms + A/B testing",
      "Real-time analytics dashboard",
      "Dedicated strategy manager",
      "Weekly optimization + monthly deep-dive",
    ],
  },
];

const oneTimePacks = [
  {
    name: "Authority Audit",
    desc: "Full competitor and keyword analysis with a 90-day opportunity roadmap. See exactly where you stand and what it would take to win.",
    price: "$497",
    priceNote: "one-time",
    sub: null,
    credit: "$497 credited toward your first month",
  },
  {
    name: "Website redesign",
    desc: "A high-converting law firm website built from scratch in Webflow or WordPress. Fast, mobile-first, and built to turn visitors into enquiries.",
    price: "$3,000 – $5,000",
    priceNote: "one-time",
    sub: "50% upfront, 50% on launch.",
    credit: null,
  },
  {
    name: "GBP cleanup",
    desc: "Full Google Business Profile audit and optimization. Categories, services, photos, Q&A, posts — everything a lawyer's local listing should have.",
    price: "$350",
    priceNote: "one-time",
    sub: "Delivered within 5 business days.",
    credit: null,
  },
  {
    name: "Landing page",
    desc: "A single high-intent practice area page — built, optimized, and ready to run ads to. Ideal before launching a Google Ads campaign.",
    price: "$800 – $1,200",
    priceNote: "one-time",
    sub: "Includes on-page SEO and intake form setup.",
    credit: null,
  },
  {
    name: "SEO content pack",
    desc: "Four keyword-targeted blog posts or practice area pages written, formatted, and ready to publish. No fluff — every piece targets a real search query.",
    price: "$600",
    priceNote: "per pack of 4",
    sub: "Delivered within 2 weeks.",
    credit: null,
  },
];

const faqs = [
  {
    q: "What makes your law firm SEO services different?",
    a: "Most agencies run generic SEO campaigns. We build legal-specific content strategies, target the exact keywords your potential clients search in Canada 🇨🇦, and optimize for both traditional Google rankings and emerging AI search platforms like ChatGPT, Claude, and Perplexity. Every campaign is built exclusively around legal search intent.",
  },
  {
    q: "How long does it take to see results from law firm SEO?",
    a: "Most of our clients see measurable improvements in rankings and traffic within 60–90 days. Paid channels like Google Ads generate leads within the first two weeks. Full Authority Stack™ results compound over 6–12 months as your SEO authority builds.",
  },
  {
    q: "Do you work with law firms across all of Canada 🇨🇦?",
    a: "Yes. We serve legal practices across Canada including Toronto, Vancouver, Calgary, Ottawa, and Montreal. Our law firm SEO services are tailored to your specific city and legal market.",
  },
  {
    q: "Do you work with any practice area?",
    a: "We have experience across all major areas of law including personal injury, criminal defense, immigration, family law, employment law, and business law. If you don't see your practice area listed, reach out — we likely cover it.",
  },
  {
    q: "What is included in the $5,000/month package?",
    a: "Everything. Law firm SEO services, Google Ads management, Facebook and Instagram campaigns, law firm web design, content production, reputation management, and a dedicated strategy manager. No hidden fees, no upsells.",
  },
];

function CheckIcon() {
  return (
    <div className="w-4 h-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path d="M1.5 4L3 5.5L6.5 2" stroke="#C8411C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-dark-2 border border-gold/10 rounded-xl overflow-hidden hover:border-gold/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h4 className="font-sans text-sm font-medium text-warm-white">{faq.q}</h4>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-muted"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="text-sm text-muted leading-relaxed px-5 pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const onetimeRef = useRef(null);
  const onetimeInView = useInView(onetimeRef, { once: true, margin: "-60px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" ref={ref} className="section-pad bg-dark/40">
      <div className="max-w-site">

        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-5 mx-auto">Monthly Packages</div>
          <h2 className="heading-lg text-warm-white mb-5">
            Simple,{" "}
            <span className="text-gradient font-semibold italic">Transparent</span>{" "}
            Pricing
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            All packages include a 90-day minimum. No setup fees. One firm per practice area per city.
          </p>
        </motion.div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                pkg.popular
                  ? "border-2 border-gold bg-dark-2 shadow-[0_0_40px_-8px_rgba(200,65,28,0.3)]"
                  : "border border-gold/15 bg-dark-2"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              {/* Top accent line */}
              {pkg.popular && <div className="h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold w-full" />}

              {/* Label badge */}
              <div className="px-6 pt-6 pb-0">
                <span className={`inline-block text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  pkg.popular
                    ? "bg-gold/20 text-gold border border-gold/40"
                    : pkg.name === "Authority Stack™"
                    ? "bg-warm-white/8 text-warm-white/60 border border-warm-white/15"
                    : "bg-dark-3 text-muted border border-gold/10"
                }`}>
                  {pkg.label}
                </span>

                <h3 className="font-serif text-2xl text-warm-white font-light mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted font-sans leading-snug mb-4">{pkg.tagline}</p>

                {/* Price */}
                <div className="mb-1">
                  <span className="font-serif text-4xl text-warm-white font-light">{pkg.price}</span>
                  <span className="text-base text-muted font-sans">{pkg.period}</span>
                </div>
                <p className="text-xs text-muted/70 font-sans mb-5">{pkg.note}</p>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gold/10 mb-5" />

              {/* Features */}
              <div className="px-6 flex-1">
                {pkg.intro && (
                  <p className="text-xs text-muted/60 font-sans italic mb-3">{pkg.intro}</p>
                )}
                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm font-sans text-muted/90 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 mt-auto">
                <MagneticButton
                  as="a"
                  href="#apply"
                  className={`w-full justify-center text-sm py-3.5 ${pkg.popular ? "btn-primary" : "btn-ghost"}`}
                >
                  Apply Now
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge strip — catches people before they leave */}
        <motion.div
          className="mb-16 rounded-2xl border border-gold/25 bg-gold/5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Gold top accent */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent w-full" />
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8">
            {/* Icon */}
            <div className="shrink-0 w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
              <span className="text-gold text-lg">✦</span>
            </div>
            {/* Copy */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-serif text-xl md:text-2xl text-warm-white font-light mb-1">
                Not ready to commit to a monthly plan?
              </p>
              <p className="text-sm text-muted font-sans leading-relaxed">
                Start with a one-time <span className="text-warm-white font-medium">$497 Authority Audit</span> — a full competitor and keyword roadmap with zero obligation.{" "}
                <span className="text-gold font-medium">Credited toward your first month</span> if you decide to sign up.
              </p>
            </div>
            {/* CTA */}
            <a
              href="#authority-audit"
              onClick={(e) => { e.preventDefault(); document.getElementById('authority-audit')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }}
              className="shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              See the $497 Audit
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 2L6 10M6 10L2 6M6 10L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* One-time packages */}
        <div ref={onetimeRef}>
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={onetimeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-2xl text-warm-white font-light mb-2">
              One-time projects. No retainer required.
            </p>
            <p className="text-sm text-muted font-sans max-w-xl mx-auto">
              Show you exactly what we can do — no pressure, no lock-in.
              Most clients who start here sign a monthly package within 60 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {oneTimePacks.map((pack, i) => (
              <motion.div
                key={pack.name}
                id={pack.credit ? "authority-audit" : undefined}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={onetimeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {pack.credit && (
                  <span className="absolute -top-3 left-5 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-white text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                    ✦ Start here
                  </span>
                )}
                <PricingWrapper type={i % 2 === 0 ? "waves" : "crosses"} featured={!!pack.credit}>
                  <CardHeading>{pack.name}</CardHeading>
                  <CardParagraph>{pack.desc}</CardParagraph>
                  <div className="relative z-10 mt-auto">
                    <CardPrice>
                      <span className="text-2xl font-light">{pack.price}</span>
                    </CardPrice>
                    <span className="block text-xs text-gold font-sans font-medium tracking-wide uppercase relative z-10">{pack.priceNote}</span>
                    {pack.credit && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 relative z-10">
                        <span className="text-gold text-xs">✦</span>
                        <span className="text-xs font-sans font-medium text-warm-white">{pack.credit}</span>
                      </div>
                    )}
                    {pack.sub && <CardNote className="mt-2">{pack.sub}</CardNote>}
                  </div>
                </PricingWrapper>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-x-8 mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {["No setup fees", "90-day results guarantee", "Market exclusivity — one firm per practice area per city"].map((trust) => (
            <span key={trust} className="flex items-center gap-2 text-sm text-warm-white/70 font-sans">
              <span className="text-gold shrink-0">✓</span>
              {trust}
            </span>
          ))}
        </motion.div>

        {/* FAQ */}
        <div ref={faqRef} className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="label-tag mb-4 mx-auto">Common Questions</div>
            <h3 className="font-serif text-3xl text-warm-white font-light">
              Frequently Asked Questions
            </h3>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
