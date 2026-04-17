"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "The Power Lawyers client logo", logo: "/logo-power-lawyers.png" },
  { name: "Institute for Professionals in Taxation client logo", logo: "/logo-ipt.png" },
  { name: "Lawline client logo", logo: "/logo-lawline.png" },
  { name: "Tschetter Sulzer Muccio client logo", logo: "/logo-tsm.png" },
];

const recentClients = [
  { name: "client logo", logo: "/client-1.png" },
  { name: "client logo", logo: "/client-2.png" },
  { name: "client logo", logo: "/client-3.png" },
  { name: "client logo", logo: "/client-gummie.png" },
  { name: "client logo", logo: "/client-full.png" },
  { name: "client logo", logo: "/client-eden.png" },
];

function TieIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 83"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.3066 13.3631C28.1153 12.5983 28.1008 11.8 28.2642 11.0288C28.4277 10.2576 28.7647 9.53373 29.2498 8.9123C29.7349 8.29086 30.3552 7.78816 31.0637 7.44238C31.7721 7.0966 32.5501 6.91683 33.3384 6.91675H49.6618C50.4501 6.91683 51.2281 7.0966 51.9365 7.44238C52.645 7.78816 53.2653 8.29086 53.7504 8.9123C54.2355 9.53373 54.5726 10.2576 54.736 11.0288C54.8994 11.8 54.885 12.5983 54.6937 13.3631L52.0031 24.1254L56.1773 38.0418H48.4168C47.4996 38.0418 46.6199 38.4061 45.9714 39.0547C45.3228 39.7032 44.9584 40.5829 44.9584 41.5001C44.9584 42.4173 45.3228 43.2969 45.9714 43.9455C46.6199 44.5941 47.4996 44.9584 48.4168 44.9584H58.2523L61.434 55.5617C61.8308 56.8828 61.8235 58.2924 61.413 59.6093C61.0026 60.9262 60.2078 62.0904 59.1307 62.9521L43.6616 75.326C43.0482 75.8171 42.2859 76.0847 41.5001 76.0847C40.7144 76.0847 39.952 75.8171 39.3387 75.326L23.8695 62.9521C22.7924 62.0904 21.9976 60.9262 21.5872 59.6093C21.1768 58.2924 21.1695 56.8828 21.5663 55.5617L30.9972 24.1254L28.3066 13.3631ZM47.4485 13.8334L45.7193 20.7501H37.2879L35.5587 13.8334H47.4485Z"
      />
    </svg>
  );
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="section-pad bg-dark/50">
      <div className="max-w-site">
        {/* Header */}
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-lg text-warm-white mb-5">
            If You Work With Us,{" "}
            <span className="text-gradient font-semibold italic">
              You Will Dominate.
            </span>
          </h2>
          <p className="body-lg">
            The Authority Stack&trade; ensures your firm shows up across Google, AI
            search, paid media, and social — creating consistent visibility where
            high-value legal clients are making decisions. The result? Stronger market
            presence, more signed cases, and measurable growth through proven SEO
            marketing for law firms across Canada.
          </p>
        </motion.div>

        {/* Sub-label */}
        <motion.p
          className="text-center text-xs md:text-sm text-muted/70 font-sans tracking-[0.2em] uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Smart Legal Practices Choose The Build Counsel
        </motion.p>

        {/* Logo strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {clients.map((c) => (
            <div
              key={c.name}
              className="relative h-16 w-40 md:h-28 md:w-60 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={c.logo}
                alt={c.name}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 240px, 160px"
              />
            </div>
          ))}
        </motion.div>

        {/* $6 billion+ big stat */}
        <motion.div
          className="relative text-center border-t border-gold/10 pt-20 md:pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Radial warm glow behind the headline */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-gold/10 blur-[120px] rounded-full -z-0"
          />

          {/* Tie icon */}
          <div className="relative z-10 flex justify-center mb-6">
            <TieIcon className="w-14 h-14 md:w-20 md:h-20 text-gold drop-shadow-[0_4px_20px_rgba(200,65,28,0.35)]" />
          </div>

          <h3 className="relative z-10 font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-bold text-warm-white leading-[0.9] tracking-tight mb-8">
            $6 billion+
          </h3>

          <p className="relative z-10 font-sans text-base md:text-lg text-warm-white/70 max-w-xl mx-auto mb-10">
            in signed case value generated for the firms we represent.
          </p>

        </motion.div>

        {/* Recent clients — auto-scrolling marquee */}
        <motion.div
          className="relative border-t border-gold/10 mt-20 md:mt-24 pt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <p className="text-center text-xs md:text-sm text-muted/70 font-sans tracking-[0.2em] uppercase mb-3">
            Proven Results Across Competitive Industries
          </p>
          <h3 className="text-center heading-md text-warm-white mb-10">
            Recent clients that chose{" "}
            <span className="text-gradient font-semibold italic">
              The Build Counsel.
            </span>
          </h3>

          {/* Marquee (auto-loop, pauses on hover) */}
          <div
            className="group relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...recentClients, ...recentClients].map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="shrink-0 flex items-center justify-center mx-8 md:mx-14 h-16 md:h-20 w-32 md:w-44 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 176px, 128px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
