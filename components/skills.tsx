"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { skills } from "@/lib/data";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const lines = [
    { prefix: ">", text: "cat skills.json", delay: 0 },
    {
      prefix: "-",
      text: "Loading developer profile...",
      delay: 0.3,
      dim: true,
    },
    { prefix: "-", text: "Parsing skill categories...", delay: 0.5, dim: true },
    { prefix: "-", text: `Found ${skills.length} categories`, delay: 0.7 },
    {
      prefix: "-",
      text: `Total: ${skills.reduce((a, c) => a + c.items.length, 0)} skills indexed`,
      delay: 0.9,
    },
    { prefix: "", text: "", delay: 1.1 },
    { prefix: ">", text: "Ready.", delay: 1.3, accent: true },
  ];

  return (
    <div ref={ref} className="card-base p-5 font-mono text-xs leading-loose">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-fg-dim text-[10px] uppercase tracking-widest">
          Terminal
        </span>
      </div>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className={`flex gap-2 ${line.dim ? "text-fg-dim" : line.accent ? "text-accent" : "text-fg-muted"}`}
          initial={{ opacity: 0, x: -8 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
          }
          transition={{
            duration: 0.3,
            delay: line.delay,
            ease: "easeOut",
          }}
        >
          {line.prefix && (
            <span className={line.prefix === ">" ? "text-accent" : ""}>
              {line.prefix}
            </span>
          )}
          <span>{line.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SkillsList() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  let globalIndex = 0;

  return (
    <div ref={ref} className="space-y-8">
      {skills.map((category, catIdx) => {
        const startIndex = globalIndex;
        globalIndex += category.items.length;

        return (
          <div key={category.name}>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim mb-3 flex items-center gap-2">
              <span className="sec-head-stamp text-[9px] w-6 h-[18px]">
                {String(catIdx + 1).padStart(2, "0")}
              </span>
              {category.name}
            </h3>
            <div className="space-y-0">
              {category.items.map((item, itemIdx) => {
                const idx = startIndex + itemIdx;
                return (
                  <motion.div
                    key={item}
                    className="num-list-item"
                    initial={{ opacity: 0, x: 10 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.03,
                      ease: "easeOut",
                    }}
                  >
                    <span className="num-list-num">
                      {catIdx + 1}.{itemIdx + 1}
                    </span>
                    <span>{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-28">
      <div className="container-main">
        <SectionHeader
          number="04"
          kicker="Skills & Tools"
          title="The toolkit."
          lead="From frontend frameworks to AI pipelines — the technologies I use to ship production systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Terminal */}
          <div className="lg:col-span-2">
            <TerminalBlock />
          </div>

          {/* Right: Numbered skills list */}
          <div className="lg:col-span-3">
            <SkillsList />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
