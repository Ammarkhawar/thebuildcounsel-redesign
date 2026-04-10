"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // sessionStorage re-shows on every new browser session (good for conversion)
    if (!sessionStorage.getItem("ann-dismissed")) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("ann-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="banner"
          className="relative overflow-hidden bg-gradient-to-r from-gold/90 via-gold to-gold-light/90 text-white text-xs font-sans font-medium"
        >
          <div className="flex items-center justify-center gap-2.5 px-10 py-2.5 text-center">
            <span className="w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse shrink-0" aria-hidden="true" />
            <span>
              Limited Spots — We only take on{" "}
              <strong className="font-semibold">3 new law firms per month.</strong>{" "}
              <a
                href="#contact"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
              >
                Book your strategy call →
              </a>
            </span>
          </div>
          <button
            onClick={dismiss}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 opacity-70 hover:opacity-100 transition-opacity rounded"
            aria-label="Dismiss announcement"
          >
            <X size={13} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
