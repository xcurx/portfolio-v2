"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { personalInfo } from "@/lib/data";
import { Mail, ArrowUpRight } from "lucide-react";

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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Send me an email directly",
    isSvg: false,
  },
  {
    label: "GitHub",
    value: "github.com/xcurx",
    href: personalInfo.github,
    icon: GithubIcon,
    description: "Check out my open-source work",
    isSvg: true,
  },
  {
    label: "LinkedIn",
    value: "Sujal Kachhawah",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    description: "Let's connect professionally",
    isSvg: true,
  },
];

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-28">
      <div className="container-main">
        <SectionHeader
          number="05"
          kicker="Contact"
          title="Let's build something great."
          lead="Currently seeking a web/backend internship. Open to interesting projects, collaborations, and conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: CTA */}
          <div>
            <p className="text-fg-muted text-base leading-relaxed mb-8">
              Whether you&apos;re looking for a developer who can ship real-time systems, 
              build AI-powered platforms, or just want to talk about WebSockets — 
              I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-stripe text-sm"
            >
              <Mail className="w-4 h-4" />
              Drop a message
            </a>
          </div>

          {/* Right: Contact cards */}
          <div className="space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="card-base p-5 flex items-center gap-4 group"
                >
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-md bg-[var(--accent-dim)]">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-fg-dim mb-0.5">
                      {link.label}
                    </span>
                    <span className="block text-sm text-foreground truncate">
                      {link.value}
                    </span>
                    <span className="block text-xs text-fg-muted mt-0.5">
                      {link.description}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-fg-dim group-hover:text-accent transition-colors shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
