"use client";

import { type HTMLAttributes, useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerVariant = "rainbow" | "normal";

export function Banner({
  id,
  xColor,
  variant = "normal",
  height = "3rem",
  rainbowColors = [
    "rgba(0,149,255,0.56)",
    "rgba(231,77,255,0.77)",
    "rgba(255,0,0,0.73)",
    "rgba(131,255,166,0.66)",
  ],
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  height?: string;
  xColor?: string;
  variant?: BannerVariant;
  rainbowColors?: string[];
}) {
  const [open, setOpen] = useState(true);
  const storageKey = id ? `banner-dismissed-${id}` : null;

  useEffect(() => {
    if (storageKey && localStorage.getItem(storageKey) === "true") {
      setOpen(false);
    }
  }, [storageKey]);

  if (!open) return null;

  return (
    <div
      id={id}
      {...props}
      className={cn(
        "relative flex flex-row items-center justify-center px-4 text-center text-sm font-medium overflow-hidden",
        variant === "normal" && "bg-dark-2 text-warm-white",
        variant === "rainbow" && "bg-dark text-warm-white",
        props.className,
      )}
      style={height ? { height } : undefined}
    >
      {variant === "rainbow" ? <Flow colors={rainbowColors} /> : null}

      <div className="relative z-10">{props.children}</div>

      {id ? (
        <button
          type="button"
          aria-label="Close banner"
          onClick={() => {
            setOpen(false);
            if (storageKey) localStorage.setItem(storageKey, "true");
          }}
          className="absolute end-2 md:end-6 top-1/2 z-10 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-md text-warm-white/60 hover:text-warm-white hover:bg-warm-white/10 transition-colors"
        >
          <X size={15} color={xColor} />
        </button>
      ) : null}
    </div>
  );
}

const maskImage =
  "linear-gradient(to bottom,white,transparent), radial-gradient(circle at top center, white, transparent)";

function Flow({ colors }: { colors: string[] }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={
          {
            maskImage,
            WebkitMaskImage: maskImage,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            animation: "tbc-banner-flow 20s linear infinite",
            backgroundImage: `repeating-linear-gradient(70deg, ${[
              ...colors,
              colors[0],
            ]
              .map((color, i) => `${color} ${(i * 50) / colors.length}%`)
              .join(", ")})`,
            backgroundSize: "200% 100%",
            filter: "saturate(2)",
          } as React.CSSProperties
        }
      />
      <style>{`@keyframes tbc-banner-flow { from { background-position: 0% 0; } to { background-position: 100% 0; } }`}</style>
    </>
  );
}
