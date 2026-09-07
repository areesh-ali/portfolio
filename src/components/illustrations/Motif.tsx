import type { MotifVariant } from "@/lib/types";

/* Soft, custom, abstract line motifs — one visual signature per project.
   Shared grammar: 120×120 field, round caps, soft currentColor line, exactly
   one clay-accent element. Hand-tuned so nothing reads as a stock icon. */

type Props = {
  variant: MotifVariant;
  className?: string;
  /** Decorative by default; pass a label to expose it to assistive tech. */
  label?: string;
};

const ACCENT = "var(--accent)";

function shapes(variant: MotifVariant) {
  switch (variant) {
    case "orbit":
      return (
        <>
          <g stroke="currentColor" strokeOpacity={0.5} fill="none">
            <rect x="15" y="25" width="90" height="70" rx="28" />
            <rect
              x="34"
              y="42"
              width="52"
              height="36"
              rx="18"
              transform="rotate(-7 60 60)"
            />
          </g>
          <circle cx="60" cy="60" r="6.5" fill={ACCENT} />
          <circle cx="80" cy="25" r="3.4" fill={ACCENT} />
          <circle cx="34" cy="95" r="3.4" fill="currentColor" fillOpacity={0.5} />
        </>
      );

    case "strata":
      return (
        <>
          <g stroke="currentColor" strokeOpacity={0.5} fill="none">
            <path d="M16 36c22-8 46 6 88-2" />
            <path d="M16 50c26 8 54-8 88 0" />
            <path d="M16 78c24-8 50 8 88-1" />
            <path d="M16 92c22 6 52-6 88 2" />
          </g>
          <path
            d="M16 64c26-9 52 9 88-2"
            stroke={ACCENT}
            fill="none"
            strokeWidth="2"
          />
          <circle cx="60" cy="61" r="3.4" fill={ACCENT} />
        </>
      );

    case "current":
      return (
        <>
          <g stroke="currentColor" strokeOpacity={0.5} fill="none">
            <path d="M12 40c26-18 52 20 96-4" />
            <path d="M12 58c26-18 52 20 96-4" />
            <path d="M12 92c26-18 52 20 96-4" />
          </g>
          <path
            d="M12 76c26-18 52 20 96-4"
            stroke={ACCENT}
            fill="none"
            strokeWidth="2"
          />
          <circle cx="60" cy="66.5" r="4.2" fill={ACCENT} />
        </>
      );

    case "lattice":
      return (
        <>
          <g stroke="currentColor" strokeOpacity={0.45} fill="none">
            <path d="M26 34 58 24 92 40M26 34 38 66 24 92M58 24 60 54 74 70M92 40 74 70 96 86M38 66 24 92M38 66 60 54M74 70 96 86" />
          </g>
          <g fill="currentColor" fillOpacity={0.55}>
            <circle cx="26" cy="34" r="3" />
            <circle cx="58" cy="24" r="3" />
            <circle cx="92" cy="40" r="3" />
            <circle cx="38" cy="66" r="3" />
            <circle cx="74" cy="70" r="3" />
            <circle cx="24" cy="92" r="3" />
            <circle cx="96" cy="86" r="3" />
          </g>
          <circle cx="60" cy="54" r="5.5" fill={ACCENT} />
        </>
      );

    case "signal":
      return (
        <>
          <g stroke="currentColor" strokeOpacity={0.5} fill="none">
            <path d="M52 90A22 22 0 0 0 30 68" />
            <path d="M70 90A40 40 0 0 0 30 50" />
            <path d="M88 90A58 58 0 0 0 30 32" />
          </g>
          <path
            d="M60 90A30 30 0 0 0 30 60"
            stroke={ACCENT}
            fill="none"
            strokeWidth="2"
          />
          <circle cx="30" cy="90" r="6" fill={ACCENT} />
        </>
      );

    case "vessel":
      return (
        <>
          <path
            d="M32 36v36c0 11 8 19 19 19h18c11 0 19-8 19-19V36"
            stroke="currentColor"
            strokeOpacity={0.55}
            fill="none"
          />
          <path
            d="M40 44h40"
            stroke="currentColor"
            strokeOpacity={0.35}
            fill="none"
          />
          <circle cx="52" cy="66" r="7" fill="currentColor" fillOpacity={0.5} />
          <circle cx="71" cy="60" r="5.5" fill={ACCENT} />
        </>
      );

    case "scan":
      return (
        <>
          <path
            d="M42 32c-16 6-20 30-4 42 16 12 48 8 54-12 5-18-14-36-32-32-6 1-12 0-18 2Z"
            stroke="currentColor"
            strokeOpacity={0.5}
            fill="none"
          />
          <g stroke="currentColor" strokeOpacity={0.4} fill="none">
            <path d="M30 48h60" />
            <path d="M30 76h60" />
          </g>
          <path d="M30 62h60" stroke={ACCENT} fill="none" strokeWidth="2" />
          <g stroke="currentColor" strokeOpacity={0.7} fill="none">
            <path d="M22 34v-8h8M98 34v-8h-8M22 90v8h8M98 90v8h-8" />
          </g>
        </>
      );
  }
}

export function Motif({ variant, className, label }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      width="100%"
      height="100%"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {shapes(variant)}
    </svg>
  );
}
