import type { ReactNode } from "react";

type Props = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
};

/* A section opener: mono index + eyebrow on a hairline, then a display title.
   Used across pages to keep sectional rhythm consistent without cards. */
export function SectionHead({ index, eyebrow, title, children, className = "" }: Props) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 border-t border-line pt-4">
        {index && <span className="font-mono text-xs text-accent">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 max-w-[18ch] font-display text-[length:var(--text-display-m)] leading-[1.08] text-ink">
        {title}
      </h2>
      {children && <div className="mt-4 max-w-[52ch] text-ink-70">{children}</div>}
    </div>
  );
}
