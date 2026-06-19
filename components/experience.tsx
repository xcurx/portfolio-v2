"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { accomplishments, experience } from "@/lib/data";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Trophy, Medal } from "lucide-react";

function AccomplishmentCard({
  item,
  index,
}: {
  item: (typeof accomplishments)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const icons = [Trophy, Award, Medal];
  const Icon = icons[index] || Award;

  return (
    <motion.div
      ref={ref}
      className="card-base p-5 flex items-start gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-md bg-[var(--accent-dim)] mt-0.5">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-semibold text-sm text-foreground">
            {item.title}
          </span>
          <span className="badge-accent">{item.highlight}</span>
        </div>
        <p className="text-xs text-fg-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-28">
      <div className="container-main">
        <SectionHeader
          number="02"
          kicker="Experience"
          title="Shipped under pressure."
          lead="From hackathon stages to open-source codebases — I deliver."
        />

        {/* Accomplishments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {accomplishments.map((item, i) => (
            <AccomplishmentCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-[var(--border)]" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="relative pl-8 md:pl-16 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Timeline dot */}
              <span className="absolute left-0 md:left-6 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-[var(--bg)]" />

              {/* Content */}
              <div className="card-base p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-base text-foreground">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-accent font-mono uppercase tracking-wider mb-4">
                  {exp.organization}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-fg-muted leading-relaxed"
                    >
                      <span className="text-accent mt-1 shrink-0">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
