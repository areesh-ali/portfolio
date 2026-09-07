/* The homepage signature illustration.
   A soft "system portrait": three organic tone-washes (cloud, services, model)
   with a single clay thread stitched through them — the line Areesh owns end to
   end. Custom, hand-tuned, calm. Decorative (the heading carries the meaning). */

export function HeroMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 360"
      className={className}
      width="100%"
      height="100%"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Tone washes — the three layers, warm and low-contrast */}
      <path
        d="M80 58C58 76 64 120 120 128c62 9 112-10 108-42-4-30-38-46-78-42-30 3-54 0-70 14Z"
        fill="var(--slate)"
        fillOpacity="0.12"
      />
      <path
        d="M55 165c-16 26 6 62 76 65 82 4 129-16 125-46-4-26-42-38-92-36-52 2-93-2-109 17Z"
        fill="var(--sage)"
        fillOpacity="0.13"
      />
      <path
        d="M40 270c-10 30 22 62 82 64 72 3 142-12 150-42 6-24-18-44-68-44-52 0-144-2-164 22Z"
        fill="var(--clay)"
        fillOpacity="0.12"
      />

      {/* Model layer — a soft core with radiating signal */}
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4">
        <path d="M132 92a20 20 0 0 0 36 0" />
        <path d="M120 82a34 34 0 0 0 60 0" />
      </g>
      <circle cx="150" cy="92" r="6.5" fill="var(--accent)" />

      {/* Service layer — a small mesh of nodes */}
      <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4">
        <path d="M104 196 150 205 198 188" />
        <path d="M104 196 128 178M198 188 176 174" />
      </g>
      <g fill="currentColor" fillOpacity="0.5">
        <circle cx="104" cy="196" r="4" />
        <circle cx="198" cy="188" r="4" />
        <circle cx="128" cy="178" r="3" />
        <circle cx="176" cy="174" r="3" />
      </g>
      <circle cx="150" cy="205" r="5.5" fill="var(--accent)" />

      {/* Cloud / IaC layer — provisioned-as-code ticks */}
      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4">
        <path d="M74 296h20M104 296h28M142 296h16M168 296h24M84 308h30M124 308h22M156 308h30" />
      </g>
      <g fill="currentColor" fillOpacity="0.5">
        <circle cx="112" cy="284" r="3" />
        <circle cx="188" cy="284" r="3" />
      </g>
      <circle cx="150" cy="300" r="5" fill="var(--accent)" />

      {/* The thread: one line stitched top → bottom through every layer */}
      <path
        d="M150 98c6 34-16 44-2 72s2 46 2 55"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeDasharray="1 6"
        strokeOpacity="0.9"
      />

      {/* Faint framing ticks, like an architect's registration marks */}
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2">
        <path d="M24 40v-10h10M276 40v-10h-10M24 330v10h10M276 330v10h-10" />
      </g>
    </svg>
  );
}
