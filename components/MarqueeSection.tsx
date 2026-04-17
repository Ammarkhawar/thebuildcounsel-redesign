"use client";

const tape1Items = [
  "Law Firm SEO Services",
  "Legal Marketing Canada",
  "$6 Billion+ Generated",
  "Search · Paid · Social",
  "AI Search Optimization",
  "Authority Stack™",
  "SEO for Law Firms",
];

const tape2Items = [
  "Law Firm SEO Services",
  "Legal Marketing Agency Canada",
  "Authority Stack™",
  "$6 Billion+ Generated",
  "SEO Marketing for Law Firms",
  "Google Ads · Legal SEO · AI Search",
];

const Star = () => (
  <span
    aria-hidden="true"
    className="mx-5 md:mx-7 text-black/80 text-sm md:text-base translate-y-[-1px] select-none"
  >
    ✦
  </span>
);

function Tape({
  items,
  direction,
  rotate,
  swayDelay = "0s",
}: {
  items: string[];
  direction: "marquee" | "marquee-reverse";
  rotate: string;
  swayDelay?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="absolute left-1/2 top-1/2 w-[160%]"
      style={{ transform: `translate(-50%, -50%) rotate(${rotate})` }}
    >
      <div
        className="tape-sway overflow-hidden border-y-[3px] border-black bg-gold shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
        style={{ animationDelay: swayDelay }}
      >
        <div
          className={`flex whitespace-nowrap py-3 md:py-3.5 ${
            direction === "marquee" ? "animate-marquee" : "animate-marquee-reverse"
          }`}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-sans font-black text-base md:text-lg tracking-[0.18em] uppercase text-black">
                {item}
              </span>
              <Star />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-x-clip bg-dark h-[140px] md:h-[380px]"
    >
      {/* Subtle vignette for depth behind the tapes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,65,28,0.12),transparent_70%)]" />

      {/* Tape 1 — leaning up-right */}
      <Tape items={tape1Items} direction="marquee" rotate="-7deg" />

      {/* Tape 2 — leaning down-right, crosses the first — offset phase for organic sway */}
      <Tape items={tape2Items} direction="marquee-reverse" rotate="7deg" swayDelay="-2.5s" />
    </section>
  );
}
