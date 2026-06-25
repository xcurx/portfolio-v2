"use client";

import { useTheme, type AccentColor } from "@/components/theme-provider";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Paintbrush } from "lucide-react";

export function ColorPicker() {
  const { accent, setAccent, palette } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-dim hover:text-accent transition-colors duration-200"
        aria-label="Change accent color"
        title="Theme color"
      >
        <Paintbrush className="w-3.5 h-3.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 flex items-center gap-1.5 rounded-lg border border-border bg-[#141414] px-3 py-2.5 shadow-xl"
          >
            {palette.map((c: AccentColor) => (
              <button
                key={c.hex}
                type="button"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const origin = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                  };
                  setAccent(c.hex, origin);
                  setOpen(false);
                }}
                className="relative flex items-center justify-center w-6 h-6 rounded-full transition-transform hover:scale-110 focus:outline-none"
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`${c.name} theme`}
              >
                {accent === c.hex && (
                  <motion.span
                    layoutId="accent-ring"
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 0 2px ${c.hex}, 0 0 0 3px #141414` }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
