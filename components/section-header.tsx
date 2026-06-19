interface SectionHeaderProps {
  number: string;
  kicker: string;
  title: string;
  lead?: string;
  linkLabel?: string;
  linkHref?: string;
}

export function SectionHeader({
  number,
  kicker,
  title,
  lead,
  linkLabel,
  linkHref,
}: SectionHeaderProps) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="sec-head-stamp">{number}</span>
        <span className="sec-head-kicker">
          <span className="sec-head-caret">&gt;</span>
          {kicker}
        </span>
        {linkLabel && linkHref && (
          <a
            href={linkHref}
            className="ml-auto font-mono text-xs font-medium uppercase tracking-wider text-accent hover:underline"
          >
            {linkLabel} →
          </a>
        )}
      </div>
      <h2 className="sec-head-title text-4xl md:text-5xl lg:text-6xl mb-4">
        {title}
      </h2>
      {lead && (
        <p className="text-fg-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}
    </header>
  );
}
