"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(dotX, springConfig);
  const ringY = useSpring(dotY, springConfig);

  const isHovering = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = () => {
      isHovering.current = true;
      ringRef.current?.classList.add("scale-[2.5]", "border-gold");
    };

    const onLeave = () => {
      isHovering.current = false;
      ringRef.current?.classList.remove("scale-[2.5]", "border-gold");
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [dotX, dotY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-gold/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
