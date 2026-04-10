"use client";

const items = [
  "Search Authority",
  "Paid Acquisition",
  "Social Authority",
  "Conversion Infrastructure",
  "Google Ads",
  "Legal SEO",
  "AI Search Optimization",
  "Local Service Ads",
  "Google Maps Rankings",
  "Website Design",
  "Client Acquisition",
  "Authority Stack™",
];

// Double the array so the seamless loop works at the halfway point
const doubled = [...items, ...items];

const Separator = () => (
  <span className="mx-6 text-gold/30 font-light select-none">◆</span>
);

export default function MarqueeSection() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden bg-dark-3 border-y border-gold/10 py-5"
    >
      {/* Row 1 — left to right */}
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span key={`r1-${i}`} className="inline-flex items-center">
            <span className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-warm-white/70">
              {item}
            </span>
            <Separator />
          </span>
        ))}
      </div>

      {/* Row 2 — right to left (reverse direction) */}
      <div className="flex whitespace-nowrap animate-marquee-reverse mt-3">
        {doubled.map((item, i) => (
          <span key={`r2-${i}`} className="inline-flex items-center">
            <span className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-gold/60">
              {item}
            </span>
            <Separator />
          </span>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-3 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-3 to-transparent" />
    </section>
  );
}
