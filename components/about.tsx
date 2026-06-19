"use client";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeader } from "@/components/section-header";
import { education, personalInfo } from "@/lib/data";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="container-main">
        <SectionHeader
          number="01"
          kicker="About"
          title="Engineer who ships."
          lead="I build systems that work in real time, under real constraints, for real users."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Bio */}
          <div className="lg:col-span-3">
            <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-fg-muted text-base md:text-lg leading-relaxed">
              I work across the entire stack — from designing interactive
              frontends with React and Next.js to building high-performance
              backends in Go and Python. I&apos;m particularly drawn to real-time
              systems, collaborative tools, and AI-powered applications.
            </p>
          </div>

          {/* Right: Info card */}
          <div className="lg:col-span-2">
            <div className="card-base p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-fg-dim mb-1">
                    Location
                  </span>
                  <span className="text-sm text-fg-muted">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="hr-line" />

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-fg-dim mb-1">
                    Education
                  </span>
                  <span className="block text-sm text-foreground font-medium mb-0.5">
                    {education.degree}
                  </span>
                  <span className="block text-xs text-fg-muted">
                    {education.institution}
                  </span>
                </div>
              </div>

              <div className="hr-line" />

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-fg-dim mb-1">
                    Graduation
                  </span>
                  <span className="text-sm text-fg-muted">
                    {education.expected}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
