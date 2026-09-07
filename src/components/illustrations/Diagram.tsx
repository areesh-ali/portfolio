import type { DiagramVariant } from "@/lib/types";

/* Soft technical diagrams for case studies. Line-art, warm, labelled in mono.
   Decorative at the SVG level (aria-hidden); the block caption carries meaning. */

const mono = "var(--ff-mono)";

function Tag({
  x,
  y,
  children,
  accent,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: string;
  accent?: boolean;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fontFamily={mono}
      fontSize="12.5"
      letterSpacing="0.02em"
      textAnchor={anchor}
      dominantBaseline="middle"
      fill={accent ? "var(--accent)" : "var(--ink-50)"}
    >
      {children}
    </text>
  );
}

function Node({ x, y, r = 5, accent }: { x: number; y: number; r?: number; accent?: boolean }) {
  return <circle cx={x} cy={y} r={r} fill={accent ? "var(--accent)" : "currentColor"} fillOpacity={accent ? 1 : 0.5} />;
}

function content(variant: DiagramVariant) {
  switch (variant) {
    case "layers":
      return (
        <>
          {/* three stacked layers, cloud at the foundation */}
          <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4">
            <rect x="150" y="26" width="360" height="58" rx="14" fill="var(--slate)" fillOpacity="0.1" />
            <rect x="150" y="112" width="360" height="58" rx="14" fill="var(--sage)" fillOpacity="0.12" />
            <rect x="150" y="198" width="360" height="58" rx="14" fill="var(--clay)" fillOpacity="0.11" />
          </g>
          <Tag x={330} y={55}>LangGraph · LangChain · Rekognition</Tag>
          <Tag x={330} y={141}>NestJS · Python / FastAPI</Tag>
          <Tag x={330} y={227}>Terraform · VPC · ECS · RDS · SQS</Tag>

          {/* the ownership bracket down the left, stitched with the accent thread */}
          <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
            <path d="M112 30c-8 0-8 8-8 12v88c0 4 0 12 8 12" />
            <path d="M112 254c-8 0-8-8-8-12" />
          </g>
          <text
            x="72"
            y="141"
            fontFamily={mono}
            fontSize="12"
            fill="var(--accent)"
            textAnchor="middle"
            transform="rotate(-90 72 141)"
            letterSpacing="0.14em"
          >
            OWNED END TO END
          </text>

          {/* connective nodes between layers */}
          <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4">
            <path d="M330 84v28M330 170v28" />
          </g>
          <Node x={330} y={84} r={4} />
          <Node x={330} y={112} r={4} accent />
          <Node x={330} y={198} r={4} />

          <Tag x={540} y={55} anchor="start" accent>models</Tag>
          <Tag x={540} y={141} anchor="start">services</Tag>
          <Tag x={540} y={227} anchor="start">cloud</Tag>
        </>
      );

    case "event-mesh":
      return (
        <>
          {/* client → API returns fast; heavy work goes on the queue to workers */}
          <rect x="40" y="112" width="90" height="58" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={85} y={134}>client</Tag>
          <Tag x={85} y={150} accent>fast reply</Tag>

          <rect x="200" y="112" width="90" height="58" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={245} y={141}>API</Tag>

          {/* request + fast return */}
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M130 130h64" />
            <path d="M190 135 197 130 190 125" />
            <path d="M194 152h-64" />
            <path d="M136 147 129 152 136 157" />
          </g>

          {/* queue: a stack of ticks */}
          <g stroke="var(--accent)" strokeWidth="1.5">
            <path d="M330 108v66M344 108v66M358 108v66M372 108v66" />
          </g>
          <Tag x={351} y={192} accent>SQS</Tag>
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M290 141h32" />
            <path d="M316 136 323 141 316 146" />
          </g>

          {/* workers pulling off the queue */}
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M380 120h60M380 141h60M380 162h60" />
            <path d="M434 115 441 120 434 125M434 136 441 141 434 146M434 157 441 162 434 167" />
          </g>
          <g>
            <Node x={470} y={120} />
            <Node x={470} y={141} />
            <Node x={470} y={162} />
          </g>
          <Tag x={470} y={96}>workers</Tag>

          {/* CloudMap hub */}
          <path d="M470 120 545 141 470 162" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.3" fill="none" />
          <Node x={545} y={141} r={4} />
          <Tag x={560} y={141} anchor="start">CloudMap</Tag>
        </>
      );

    case "request-path":
      return (
        <>
          {/* app ↔ realtime hub ↔ support, with Redis holding live state */}
          <rect x="46" y="96" width="96" height="60" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={94} y={118}>mobile app</Tag>
          <Tag x={94} y={136}>garage · user</Tag>

          <rect x="498" y="96" width="96" height="60" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={546} y={126}>support</Tag>

          {/* central hub */}
          <circle cx="320" cy="126" r="40" stroke="var(--accent)" strokeWidth="1.6" fill="var(--accent)" fillOpacity="0.08" />
          <Tag x={320} y={120} accent>WebSocket</Tag>
          <Tag x={320} y={136}>image · chat</Tag>

          {/* bidirectional links */}
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M142 118h136" />
            <path d="M272 113 280 118 272 123" />
            <path d="M278 138h-136" />
            <path d="M148 133 140 138 148 143" />
            <path d="M362 118h136" />
            <path d="M492 113 500 118 492 123" />
            <path d="M498 138h-136" />
            <path d="M368 133 360 138 368 143" />
          </g>

          {/* Redis below the hub */}
          <path d="M320 166v26" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" />
          <rect x="278" y="192" width="84" height="34" rx="10" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none" />
          <Tag x={320} y={209}>Redis · live state</Tag>
        </>
      );

    case "hierarchy":
      return (
        <>
          {/* ownership tree; risk and access roll up, not sideways */}
          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M320 62v20M320 82H176M320 82h144M176 82v26M464 82v26" />
            <path d="M176 134v18M176 152h-56M176 152h56M464 134v18M464 152h-56M464 152h56" />
          </g>
          {/* parent */}
          <rect x="270" y="34" width="100" height="30" rx="9" stroke="var(--accent)" strokeWidth="1.6" fill="var(--accent)" fillOpacity="0.08" />
          <Tag x={320} y={49} accent>parent co.</Tag>
          {/* children */}
          <rect x="132" y="108" width="88" height="28" rx="9" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={176} y={122}>child</Tag>
          <rect x="420" y="108" width="88" height="28" rx="9" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={464} y={122}>child</Tag>
          {/* portfolio leaves */}
          <g fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.3">
            <rect x="86" y="168" width="68" height="26" rx="8" />
            <rect x="198" y="168" width="68" height="26" rx="8" />
            <rect x="374" y="168" width="68" height="26" rx="8" />
            <rect x="486" y="168" width="68" height="26" rx="8" />
          </g>
          <Tag x={120} y={181}>portfolio</Tag>
          <Tag x={232} y={181}>portfolio</Tag>
          <Tag x={408} y={181}>portfolio</Tag>
          <Tag x={520} y={181}>portfolio</Tag>

          {/* rolls-up arrow */}
          <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
            <path d="M610 194V70" />
            <path d="M604 84 610 70 616 84" />
          </g>
          <text x="626" y="132" fontFamily={mono} fontSize="12" fill="var(--accent)" textAnchor="middle" transform="rotate(-90 626 132)" letterSpacing="0.12em">
            RISK ROLLS UP
          </text>
        </>
      );

    case "pipeline":
      return (
        <>
          {/* API → data → serverless, with a collaboration branch */}
          <rect x="40" y="116" width="120" height="56" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={100} y={138}>API</Tag>
          <Tag x={100} y={154}>NestJS</Tag>

          <rect x="260" y="116" width="120" height="56" rx="12" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" />
          <Tag x={320} y={138}>Postgres</Tag>
          <Tag x={320} y={154}>Redis cache</Tag>

          <rect x="480" y="116" width="120" height="56" rx="12" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent)" fillOpacity="0.07" />
          <Tag x={540} y={138} accent>Lambda</Tag>
          <Tag x={540} y={154}>event-driven</Tag>

          <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none">
            <path d="M160 144h94M254 139 262 144 254 149" />
            <path d="M380 144h94M474 139 482 144 474 149" />
          </g>

          {/* collab branch up from API */}
          <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" fill="none">
            <path d="M100 116V70h120" />
            <path d="M214 65 222 70 214 75" />
          </g>
          <rect x="222" y="52" width="150" height="34" rx="10" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" fill="none" />
          <Tag x={297} y={69}>real-time collaboration</Tag>
        </>
      );
  }
}

export function Diagram({ variant, className }: { variant: DiagramVariant; className?: string }) {
  return (
    <svg
      viewBox="0 0 660 280"
      className={className}
      width="100%"
      height="100%"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content(variant)}
    </svg>
  );
}
