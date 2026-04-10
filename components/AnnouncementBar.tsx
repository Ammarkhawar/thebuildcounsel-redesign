"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const messages = [
  "Limited spots available this quarter — ",
  "Now accepting new law firm clients — ",
  "Authority Stack™ now available for immigration firms — ",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("ann-dismissed")) setVisible(false);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMsgIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("ann-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-gold/90 via-gold to-gold-light/90 text-white text-xs font-sans font-medium z-50"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={msgIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1"
              >
                {messages[msgIndex]}
                <a href="#contact" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Book a strategy call →
                </a>
              </motion.span>
            </AnimatePresence>
            <button
              onClick={dismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
