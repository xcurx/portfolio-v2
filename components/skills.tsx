"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { skills } from "@/lib/data";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  Zap,
  Brain,
  Monitor,
  Server,
  Database,
  Code,
  Wrench,
  Globe,
  Cable, Layers,
  BotMessageSquare,
  FileCode, type LucideIcon
} from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPrisma,
  SiShadcnui,
  SiGithub,
  SiRust,
  SiSolidity,
  SiLinux,
  SiGithubactions,
  SiLangchain,
  SiLanggraph,
  SiWebrtc,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

/* ── Icon mappings ── */
const categoryIcons: Record<string, LucideIcon> = {
  Core: Zap,
  "AI / LLM": Brain,
  "Frontend / UI": Monitor,
  "Backend": Server,
  "Devops / Infra": Server,
  Databases: Database,
  Languages: Code,
  Tools: Wrench,
};


const skillIcons: Record<string, typeof SiGo> = {
  // Core
  "Fullstack Development": Layers,
  "REST APIs": Globe,
  "WebSocket APIs": Cable,
  "Real-time Systems": Zap,
  WebRTC: SiWebrtc,
  // AI / LLM
  "LLM Engineering": Brain,
  "RAG Systems": Database,
  "AI Agents": BotMessageSquare,
  LangChain: SiLangchain,
  LangGraph: SiLanggraph,
  "Prompt Engineering": FileCode,
  // Frontend / UI
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Framer Motion": SiFramer,
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Golang: SiGo,
  FastAPI: SiFastapi,
  "Prisma ORM": SiPrisma,
  // Devops / Infra
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  // Databased
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Vector Databases": Database, 
  // Languages
  TypeScript: SiTypescript,
  Javascript: SiJavascript,
  Go: SiGo,
  Python: SiPython,
  "C++": SiCplusplus,
  Rust: SiRust,
  Solidity: SiSolidity,
  // Tools
  "Git": SiGit,
  "GitHub": SiGithub,
  Linux: SiLinux,
  "CI/CD": SiGithubactions,
  "Unit & Integration Testing": Wrench,
}

/* ── Terminal Block ── */
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
    {
      prefix: "-",
      text: "Parsing skill categories...",
      delay: 0.5,
      dim: true,
    },
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
    <div
      ref={ref}
      className="card-base p-5 font-mono text-xs leading-loose h-full"
    >
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
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
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

/* ── Skill Category Card ── */

function SkillCategoryCard({
  category,
  catIdx,
  globalDelay,
}: {
  category: (typeof skills)[0];
  catIdx: number;
  globalDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const CategoryIcon = categoryIcons[category.name] || Code;

  return (
    <motion.div
      ref={ref}
      className="card-base p-5 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: globalDelay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[var(--accent-dim)]">
          <CategoryIcon className="w-4 h-4 text-accent" />
        </div>
        <div>
          <span className="sec-head-stamp text-[9px] w-6 h-[18px] mr-2">
            {String(catIdx + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
            {category.name}
          </span>
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-0 flex-1">
        {category.items.map((item, itemIdx) => {
          const ItemIcon = skillIcons[item] || Code;
          return (
            <motion.div
              key={item}
              className="flex items-center gap-2.5 py-2 border-b border-border last:border-b-0 text-fg-muted hover:text-accent transition-colors duration-200 group"
              initial={{ opacity: 0, x: 8 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }
              }
              transition={{
                duration: 0.3,
                delay: globalDelay + 0.05 * itemIdx,
                ease: "easeOut",
              }}
            >
              <ItemIcon className="w-3.5 h-3.5 text-fg-dim group-hover:text-accent transition-colors shrink-0" />
              <span className="font-mono text-xs tracking-wider">{item}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── GitHub Contribution Map ── */

function GitHubContributions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Sub-header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="sec-head-stamp text-[9px]">GH</span>
        <span className="sec-head-kicker">
          <span className="sec-head-caret">&gt;</span>
          Contributions
        </span>
        <a
          href="https://github.com/xcurx"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto font-mono text-xs font-medium uppercase tracking-wider text-accent hover:underline"
        >
          View Profile →
        </a>
      </div>

      {/* Contribution graph */}
      <div className="card-base p-6 overflow-x-auto flex justify-center">
        {mounted ? (
          <GitHubCalendar
            username="xcurx"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={{
              dark: [
                "rgba(255, 255, 255, 0.04)",
                "rgba(234, 255, 0, 0.15)",
                "rgba(234, 255, 0, 0.3)",
                "rgba(234, 255, 0, 0.55)",
                "rgba(234, 255, 0, 0.85)",
              ],
            }}
            style={{
              width: "100%",
              color: "var(--fg-muted)",
            }}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        ) : (
          <div className="h-32 w-full flex items-center justify-center">
            <span className="font-mono text-xs text-fg-dim animate-pulse">Loading contributions...</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main Skills Section ── */

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

        {/* Grid: Terminal + Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Terminal block — takes one cell */}
          <div className="md:row-span-1">
            <TerminalBlock />
          </div>

          {/* Skill categories fill remaining grid cells */}
          {skills.map((category, catIdx) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              catIdx={catIdx}
              globalDelay={catIdx * 0.08}
            />
          ))}
        </div>

        {/* GitHub Contributions */}
        <GitHubContributions />
      </div>
    </AnimatedSection>
  );
}
