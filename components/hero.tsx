"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import ShinyText from "./shiny-text";

function OscilloscopeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let animationId: number;
    let time = 0;

    const draw = () => {
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // Draw grid lines
      ctx.strokeStyle = "rgba(234, 255, 0, 0.06)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw main waveform
      ctx.strokeStyle = "rgba(234, 255, 0, 0.8)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const t = (x / w) * Math.PI * 6;
        const y =
          h / 2 +
          Math.sin(t + time * 2) * 30 * Math.exp(-((x / w - 0.5) ** 2) * 4) +
          Math.sin(t * 2.3 + time * 1.5) * 15 +
          Math.cos(t * 0.7 + time) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary waveform (dotted)
      ctx.strokeStyle = "rgba(234, 255, 0, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const t = (x / w) * Math.PI * 4;
        const y =
          h / 2 +
          Math.cos(t + time * 1.2) * 25 +
          Math.sin(t * 3 + time * 0.8) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

const highlights = [
  { num: "01", label: "SIH Winner", desc: "National Level Hackathon" },
  { num: "02", label: "Real-time", desc: "WebSocket & WebRTC Systems" },
  { num: "03", label: "AI / LLM", desc: "RAG, Agents, LangGraph" },
  { num: "04", label: "Fullstack", desc: "Next.js · Go · Python" },
  { num: "05", label: "Open Source", desc: "GDG & Community Contributor" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-[var(--header-h)]">
      {/* Top divider */}
      <div className="container-main">
        <div className="flex items-center gap-4 py-5 text-fg-dim font-mono text-[11px] tracking-wider">
          <span>// FULLSTACK DEVELOPER</span>
          <span className="flex-1 h-px bg-[var(--border)]" />
          <span>// IIIT NAGPUR</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="container-main flex-1 flex flex-col justify-center pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <motion.h1
              className="sec-head-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent to-accent/80 text-transparent bg-clip-text">
                {personalInfo.name}.
              </span>
              <ShinyText
                text={personalInfo.name+"."}
                color="transparent"
                shineColor="rgba(255,255,255,0.7)"
                speed={3}
                className="absolute inset-0 z-10 pointer-events-none"
              />
            </span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                Building real-time
                <br />
                systems for the web.
              </span>
            </motion.h1>

            <motion.p
              className="flex flex-wrap items-center gap-2 text-fg-muted font-mono text-xs sm:text-sm tracking-wider mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <span className="text-accent">&gt;</span>
              <span>Specializing in</span>
              <span className="text-fg">· Next.js</span>
              <span className="text-fg">· Go</span>
              <span className="text-fg">· WebSockets</span>
              <span className="text-fg">· AI</span>
            </motion.p>

            {/* Ruler */}
            <motion.span
              className="block w-full max-w-md h-px mb-8"
              style={{
                background:
                  "repeating-linear-gradient(90deg, var(--fg-dim) 0, var(--fg-dim) 2px, transparent 2px, transparent 8px)",
                opacity: 0.4,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              aria-hidden="true"
            />

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <a href="#contact" className="btn-stripe">
                Get in touch
              </a>
              <a href="#projects" className="btn-ghost">
                View projects
              </a>
              <a href="https://drive.google.com/file/d/1tnAEAhTIx6xYi5oGjf7GVOXPFrkHNlAU/view?usp=sharing" target="_blank" className="btn-ghost">
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Oscilloscope */}
          <motion.div
            className="hidden lg:block relative h-[300px] xl:h-[360px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <OscilloscopeCanvas />
          </motion.div>
        </div>
      </div>

      {/* Bottom dots row */}
      <div className="container-main">
        <motion.div
          className="flex items-center gap-3 pb-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span
            className="flex-1 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, var(--fg-dim) 0, var(--fg-dim) 1px, transparent 1px, transparent 4px)",
              opacity: 0.3,
            }}
          />
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>

      {/* Feature strip */}
      <div className="border-t border-b border-border bg-[var(--bg-elevated)]">
        <div className="container-main">
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {highlights.map((h) => (
              <li key={h.num} className="py-5 px-4 first:pl-0">
                <span className="block font-mono text-[10px] text-fg-dim mb-1 tracking-widest">
                  {h.num}
                </span>
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                  {h.label}
                </span>
                <span className="block text-[11px] text-fg-muted leading-snug">
                  {h.desc}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Ribbon */}
      <div className="container-main">
        <div className="ribbon">
          <span className="text-accent">+</span>
          <span className="ribbon-rule" />
          <span className="text-accent">+</span>
        </div>
      </div>
    </section>
  );
}
