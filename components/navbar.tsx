"use client";

import { navLinks, personalInfo } from "@/lib/data";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="container-main flex items-center justify-between h-[var(--header-h)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-8 h-8 bg-accent text-[#0a0a0a] font-mono font-bold text-xs rounded-sm">
            {personalInfo.initials}
          </span>
          <span className="font-semibold text-sm tracking-tight hidden sm:inline">
            {personalInfo.firstName}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-mono text-xs font-medium uppercase tracking-widest text-fg-muted hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-stripe text-[11px]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-px bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`w-5 h-px bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-px bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t border-border bg-[rgba(10,10,10,0.95)] backdrop-blur-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-fg-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 justify-center"
              >
                GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-stripe flex-1 justify-center text-[11px]"
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
