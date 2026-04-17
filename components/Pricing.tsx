"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChevronDown } from "lucide-react";

const features = [
  "Full Law Firm SEO & AI Search Optimization",
  "Google Ads + Local Service Ads Management",
  "Facebook & Instagram Ad Campaigns",
  "Law Firm Web Design & Conversion Optimization",
  "Monthly Legal Content Production",
  "Review Generation & Reputation Management",
  "Real-Time Analytics Dashboard",
  "Dedicated Strategy Manager",
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
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" ref={ref} className="section-pad bg-dark/40">
      <div className="max-w-site">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag mb-5 mx-auto">Investment</div>
          <h2 className="heading-lg text-warm-white mb-5">
            One Package.{" "}
            <span className="text-gradient font-semibold italic">Everything Included.</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            We don&apos;t believe in service tiers. Every client gets the full Authority Stack™ —
            because partial law firm SEO and marketing execution gets partial results.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            className="w-full max-w-2xl bg-dark-2 border border-gold/25 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Top bar with gold accent line */}
            <div className="bg-gradient-to-r from-gold via-gold-light to-gold h-0.5" />
            <div className="px-8 py-5 border-b border-gold/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-sans font-medium text-muted tracking-[0.2em] uppercase mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
                  The Authority Stack™
                </div>
                <h3 className="font-serif text-2xl text-warm-white font-light">Full Stack Package</h3>
              </div>
              <div className="sm:text-right">
                <div className="font-serif text-4xl text-warm-white font-light">
                  $5,000
                  <span className="text-lg text-muted font-sans">/mo</span>
                </div>
                <div className="text-xs text-muted font-sans mt-0.5">+ ad spend (you control)</div>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <p className="text-xs text-muted/60 font-sans tracking-widest uppercase mb-5">
                Everything Included
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#C8411C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm font-sans text-muted/90 leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex mb-5">
                <MagneticButton as="a" href="#apply-form" className="btn-primary flex-1 justify-center text-sm py-3.5">
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </MagneticButton>
              </div>

              {/* Trust signals */}
              <div className="border-t border-gold/10 pt-5 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-2">
                {["No setup fees", "Results in 90 days", "Market exclusivity — we never work with two firms in the same practice area and city"].map((trust) => (
                  <span key={trust} className="flex items-start gap-2 text-sm text-warm-white/70 font-sans">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {trust}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

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
          {faqInView && (
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
