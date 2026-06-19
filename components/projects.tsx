"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/lib/data";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Unique visual patterns for each project card
  const patterns = [
    // Saksham: Dashboard grid pattern
    <div key="p1" className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1.5 p-4">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-sm"
            style={{
              background:
                i < 3
                  ? "rgba(234, 255, 0, 0.15)"
                  : i < 6
                    ? "rgba(234, 255, 0, 0.08)"
                    : "rgba(255, 255, 255, 0.04)",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      <div className="absolute top-4 right-4 flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-25" />
      </div>
    </div>,
    // Collaborative Canvas: Drawing pattern
    <div key="p2" className="relative w-full h-full overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
      >
        <motion.rect
          x="30"
          y="20"
          width="50"
          height="40"
          rx="4"
          stroke="rgba(234, 255, 0, 0.4)"
          strokeWidth="1.5"
          fill="rgba(234, 255, 0, 0.06)"
          animate={{ x: [30, 40, 30], y: [20, 30, 20] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="140"
          cy="60"
          r="25"
          stroke="rgba(234, 255, 0, 0.3)"
          strokeWidth="1.5"
          fill="rgba(234, 255, 0, 0.04)"
          animate={{ r: [25, 30, 25] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        {/* Cursor */}
        <motion.g
          animate={{ x: [0, 60, 30, 0], y: [0, -20, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <circle cx="100" cy="80" r="3" fill="var(--accent)" />
          <circle
            cx="100"
            cy="80"
            r="8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </motion.g>
      </svg>
    </div>,
    // Mockly: AI brain pattern
    <div key="p3" className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-accent"
              style={{
                width: 40 + i * 30,
                height: 40 + i * 30,
                left: -(20 + i * 15),
                top: -(20 + i * 15),
                opacity: 0.15 - i * 0.04,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 8 + i * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
          <div className="w-6 h-6 rounded-full bg-accent opacity-30" />
        </div>
      </div>
      {/* Floating code tokens */}
      {["AI", "LLM", "RAG"].map((text, i) => (
        <motion.span
          key={text}
          className="absolute font-mono text-[9px] text-accent opacity-30"
          style={{ left: 20 + i * 50, top: 15 + i * 25 }}
          animate={{ y: [0, -5, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>,
    // Chat: Message bubbles pattern
    <div key="p4" className="relative w-full h-full overflow-hidden p-4">
      {[
        { w: "60%", x: "10%", y: 20, align: "left" },
        { w: "50%", x: "35%", y: 50, align: "right" },
        { w: "45%", x: "10%", y: 80, align: "left" },
      ].map((msg, i) => (
        <motion.div
          key={i}
          className="absolute h-5 rounded-lg"
          style={{
            width: msg.w,
            left: msg.align === "left" ? msg.x : "auto",
            right: msg.align === "right" ? "10%" : "auto",
            top: msg.y,
            background:
              msg.align === "left"
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(234, 255, 0, 0.1)",
            border: `1px solid ${msg.align === "right" ? "rgba(234, 255, 0, 0.15)" : "rgba(255, 255, 255, 0.06)"}`,
          }}
          animate={{
            opacity: [0, 1],
            x: [msg.align === "left" ? -10 : 10, 0],
          }}
          transition={{
            duration: 0.4,
            delay: 0.5 + i * 0.7,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Typing indicator */}
      <div className="absolute bottom-4 left-[10%] flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>,
  ];

  return (
    <motion.article
      ref={ref}
      className="card-base group flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {/* Visual */}
      <div className="relative h-40 sm:h-48 bg-[rgba(255,255,255,0.02)] border-b border-border">
        {patterns[index]}
        <span className="fig-label absolute top-3 right-4">
          FIG.<span>{project.figNum}</span>
        </span>
      </div>

      {/* Caption */}
      <div className="px-5 pt-4 pb-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-accent font-mono text-xs">&gt;</span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
            {project.title}
          </span>
          {project.badge && (
            <span className="badge-accent ml-auto">{project.badge}</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
        <p className="text-xs text-fg-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Stack + Links */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-dim hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-dim hover:text-accent transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 md:py-28">
      <div className="container-main">
        <SectionHeader
          number="03"
          kicker="Projects"
          title="Code that works."
          lead="Real-time collaboration, AI agents, WebSocket servers — production systems built under competition and in the open."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Ribbon */}
        <div className="ribbon mt-16">
          <span className="text-accent">+</span>
          <span className="ribbon-rule" />
          <span className="text-accent">+</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
