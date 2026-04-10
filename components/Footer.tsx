"use client";

import { motion } from "framer-motion";

const links = {
  Services: [
    { label: "Search Authority (SEO)", href: "#services" },
    { label: "Paid Acquisition", href: "#services" },
    { label: "Social Authority", href: "#services" },
    { label: "Conversion Infrastructure", href: "#services" },
  ],
  "Practice Areas": [
    { label: "Personal Injury", href: "#areas" },
    { label: "Criminal Defense", href: "#areas" },
    { label: "Tax & Bankruptcy", href: "#areas" },
    { label: "Business Law", href: "#areas" },
    { label: "Divorce & Family", href: "#areas" },
    { label: "Immigration Law", href: "#areas" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Case Studies", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="max-w-site py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="font-serif text-white font-semibold text-sm leading-none">BC</span>
              </div>
              <span className="font-serif text-warm-white text-base font-light">The Build Counsel</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-5 max-w-[200px]">
              The only growth agency built exclusively for law firms. Law Firms Only. No Exceptions.
            </p>
            <div className="flex gap-3">
              {["Li", "Tw", "Fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-7 h-7 bg-dark-3 border border-gold/10 rounded-md flex items-center justify-center text-[10px] text-muted hover:border-gold/30 hover:text-warm-white transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[10px] font-sans font-medium text-muted tracking-[0.2em] uppercase mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-muted hover:text-warm-white transition-colors duration-200 font-sans"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-dark-2 border border-gold/15 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <p className="font-serif text-lg text-warm-white font-light">Ready to dominate your market?</p>
            <p className="text-xs text-muted font-sans mt-0.5">Limited spots available this quarter.</p>
          </div>
          <a href="#contact" className="btn-primary text-sm shrink-0">
            Book a Strategy Call →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted/60 font-sans">
            © {new Date().getFullYear()} The Build Counsel. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-muted/40 font-sans">Law Firms Only</span>
            <span className="text-gold/40 mx-2">·</span>
            <span className="text-[10px] text-muted/40 font-sans">No Exceptions</span>
          </div>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="text-[11px] text-muted/50 hover:text-muted transition-colors font-sans">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
