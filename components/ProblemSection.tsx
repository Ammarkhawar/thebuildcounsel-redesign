"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

const bulletPoints = [
  "Maximizing your visibility across Google and AI search platforms (ChatGPT, Perplexity, etc)",
  "Reducing your cost per client with a smarter Google Ads strategy.",
  "Running social ad campaigns that bring in qualified leads while building brand reach.",
  "Increasing both the volume and quality of leads your firm receives.",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative section-pad pb-0 md:pb-12 bg-dark"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div>
            {/* Label */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex mb-6"
            >
              <span className="label-tag">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                The Real Problem
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="heading-lg text-warm-white mb-8"
            >
              Are you struggling to get enough{" "}
              <span className="text-gradient font-semibold italic">
                High-Quality Leads
              </span>{" "}
              for Your Law Practice?
            </motion.h2>

            {/* Body paragraphs */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-5 mb-8"
            >
              <p className="font-sans text-base text-warm-white/70 leading-relaxed">
                The internet is crowded. Your potential clients are searching on
                Google, AI platforms like ChatGPT, and across social media. If you
                rely on just one channel, you limit your growth.
              </p>
              <p className="font-sans text-base text-warm-white/70 leading-relaxed">
                But you already know that. Chances are you&apos;ve hired an
                &ldquo;SEO expert&rdquo; or a PPC agency, spent thousands, and got
                little more than empty promises and mediocre results.
              </p>
              <p className="font-sans text-base text-warm-white/70 leading-relaxed">
                You&apos;re here because you want real growth. You likely need help
                with one (or more) of the following:
              </p>
            </motion.div>

            {/* Bullet points */}
            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-3 mb-8"
            >
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-gold" />
                  <span className="font-sans text-base text-warm-white/80 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Founder quote card */}
            <motion.figure
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative overflow-hidden rounded-2xl border border-gold/15 bg-warm-white/[0.025] p-6 md:p-8 mb-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -left-16 w-40 h-40 bg-gold/10 blur-3xl rounded-full"
              />

              <Quote
                aria-hidden
                className="w-7 h-7 text-gold/70 mb-4"
                strokeWidth={1.5}
              />

              <blockquote className="relative space-y-4">
                <p className="font-serif text-xl md:text-2xl text-warm-white font-medium italic leading-snug">
                  Your law firm doesn&apos;t have a lead problem –{" "}
                  <span className="text-gradient not-italic">
                    it has a visibility problem.
                  </span>
                </p>
                <p className="font-sans text-base text-warm-white/75 leading-relaxed">
                  Today&apos;s prospects don&apos;t search in one place. They
                  check Google, AI tools, maps, and social platforms before
                  making a decision.
                </p>
                <p className="font-sans text-base text-warm-white/75 leading-relaxed">
                  If your firm isn&apos;t showing up everywhere that matters,
                  you&apos;re losing cases to firms that are.
                </p>
                <p className="font-sans text-base text-warm-white/75 leading-relaxed">
                  That&apos;s why we built{" "}
                  <span className="font-semibold text-warm-white">
                    The Authority Stack&trade;
                  </span>{" "}
                  – a system designed to position your firm across all search
                  and social to drive signed cases, not clicks.
                </p>
              </blockquote>

              <figcaption className="mt-6 pt-5 border-t border-gold/10 flex items-center gap-3">
                <span className="h-px w-8 bg-gold/50" aria-hidden />
                <div className="flex flex-col leading-tight">
                  <span className="font-serif italic text-lg text-warm-white">
                    Ammar Khawar
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-warm-white/55">
                    Founder,{" "}
                    <span className="text-gold">The Build Counsel</span>
                  </span>
                </div>
              </figcaption>
            </motion.figure>

            {/* CTA Button */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-warm-white font-sans font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-lg transition-colors duration-300"
              >
                Get your free strategy call
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src="/graphic.png"
                alt="Law firm digital marketing visibility across Google, AI search, and social platforms"
                width={1800}
                height={4395}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 32rem, 100vw"
                priority={false}
              />
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gold/5 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
