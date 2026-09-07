// Content model for the portfolio. Kept deliberately close to the real interface
// rather than over-generalized: every field here is rendered somewhere.

export type Pillar = "AI" | "Infrastructure" | "Cloud";

/** A single stat/figure shown in a project's metadata rail or outcomes. */
export interface Figure {
  value: string;
  label: string;
}

/** One block in a case study. The union keeps project pages editorial rather
 *  than an identical stack of rectangles — each project composes its own order. */
export type CaseBlock =
  | { kind: "prose"; heading?: string; body: string[] }
  | { kind: "aside"; label: string; body: string[] }
  | { kind: "figures"; items: Figure[] }
  | { kind: "list"; heading?: string; items: string[] }
  | { kind: "diagram"; variant: DiagramVariant; caption?: string }
  | { kind: "quote"; body: string; source?: string }
  | { kind: "stack"; groups: { label: string; items: string[] }[] };

export type DiagramVariant =
  | "pipeline"
  | "layers"
  | "event-mesh"
  | "hierarchy"
  | "request-path";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "repo" | "case" | "external";
}

export interface Project {
  slug: string;
  /** Short index number shown in the work list, e.g. "01". */
  index: string;
  title: string;
  /** One line for the index and cards. Plain, specific, no hype. */
  summary: string;
  /** The role Areesh actually held. */
  role: string;
  /** Where the work happened (employer / context). */
  context: string;
  year: string;
  /** Ordering weight for the index (lower = earlier in list). */
  order: number;
  featured: boolean;
  pillars: Pillar[];
  disciplines: string[];
  /** Primary technologies, for the index metadata line. */
  tech: string[];
  /** The illustration used as this project's visual signature. */
  motif: MotifVariant;
  /** Accent tone key so projects differentiate without a rainbow. */
  tone: "clay" | "sage" | "slate" | "ink";
  /** Editorial case-study body. */
  blocks: CaseBlock[];
  /** Outcome figures shown near the top of the case study. */
  outcomes?: Figure[];
  links?: ProjectLink[];
  /** If true, the project is real but not publicly linkable (client/NDA work). */
  privateWork?: boolean;
  /** Public product URL, when the built product is live and linkable. */
  liveUrl?: string;
  /** Short kind label for the index, e.g. "Platform", "Marketplace". */
  kind?: string;
  /** Captured cover screenshot of the live product (public path). */
  cover?: string;
  /** Captured product logo / mark (public path). */
  logo?: string;
}

export type MotifVariant =
  | "orbit"
  | "strata"
  | "current"
  | "lattice"
  | "signal"
  | "vessel"
  | "scan";
