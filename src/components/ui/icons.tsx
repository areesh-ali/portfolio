import type { SVGProps } from "react";

/* Custom icon set. One grammar: 24×24 box, 1.6 stroke, round caps and joins,
   currentColor, no fills. Site-owned — no third-party icon library anywhere. */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h14" />
    <path d="M13 6.5 18.5 12 13 17.5" />
  </Icon>
);

export const ArrowLeft = (p: IconProps) => (
  <Icon {...p}>
    <path d="M19.5 12h-14" />
    <path d="M11 6.5 5.5 12 11 17.5" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </Icon>
);

export const ArrowDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4.5v14" />
    <path d="M6.5 13 12 18.5 17.5 13" />
  </Icon>
);

export const Close = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Icon>
);

// Menu: three lines with a deliberate stagger so it reads as authored, not default.
export const Menu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h11" />
    <path d="M4 17h16" />
  </Icon>
);

export const Plus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
);

export const Copy = (p: IconProps) => (
  <Icon {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M15 5.5H6A1.5 1.5 0 0 0 4.5 7v9" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12.5 10 17.5 19 6.5" />
  </Icon>
);

export const Mail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="M4.5 8 12 13l7.5-5" />
  </Icon>
);

export const Sun = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </Icon>
);

export const Moon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 13.5A8 8 0 1 1 10.5 4a6.2 6.2 0 0 0 9.5 9.5z" />
  </Icon>
);

// Brand marks — simplified, recognizable, drawn to match the site's stroke grammar.
export const GithubMark = (p: IconProps) => (
  <Icon {...p} strokeWidth={1.5}>
    <path d="M9.2 20v-2.4c0-.7-.2-1.2-.5-1.5 2.4-.3 4.8-1.2 4.8-5.3a4 4 0 0 0-1.1-2.8 3.7 3.7 0 0 0-.1-2.8s-.9-.3-3 1.1a10.3 10.3 0 0 0-5.3 0C6 4 5.1 4.3 5.1 4.3a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 3.9 10c0 4 2.4 5 4.8 5.3-.3.3-.5.7-.5 1.4" />
    <path d="M8.3 18.2c-1.9.6-3.3 0-4.1-1.6" />
  </Icon>
);

export const LinkedinMark = (p: IconProps) => (
  <Icon {...p} strokeWidth={1.5}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5V16" />
    <path d="M8 7.6v.05" />
    <path d="M11.5 16v-3a2 2 0 0 1 4 0v3" />
    <path d="M11.5 16v-5.5" />
  </Icon>
);

export const iconFor = (label: string) => {
  switch (label.toLowerCase()) {
    case "github":
      return GithubMark;
    case "linkedin":
      return LinkedinMark;
    case "email":
      return Mail;
    default:
      return ArrowUpRight;
  }
};
