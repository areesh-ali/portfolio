import type { CaseBlock } from "@/lib/types";
import { Diagram } from "@/components/illustrations/Diagram";
import { Reveal } from "@/components/ui/Reveal";

/* Renders a case study's editorial blocks. Each project composes its own order,
   so no two case studies are the same stack of rectangles. */

function ProseBlock({ heading, body }: { heading?: string; body: string[] }) {
  return (
    <div className="prose">
      {heading && (
        <h2 className="font-display text-[length:var(--text-display-s)] leading-snug text-ink">
          {heading}
        </h2>
      )}
      {body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function AsideBlock({ label, body }: { label: string; body: string[] }) {
  return (
    <aside className="max-w-[54ch] border-l-2 border-accent bg-paper-raised/60 py-5 pl-6 pr-5">
      <p className="eyebrow eyebrow-accent mb-3">{label}</p>
      {body.map((p, i) => (
        <p key={i} className="text-[0.98rem] leading-relaxed text-ink-70">
          {p}
        </p>
      ))}
    </aside>
  );
}

function FiguresBlock({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-3">
      {items.map((f, i) => (
        <div key={i}>
          <p className="font-display text-[length:var(--text-display-s)] leading-none text-ink">
            {f.value}
          </p>
          <p className="mt-2 text-sm text-ink-50">{f.label}</p>
        </div>
      ))}
    </div>
  );
}

function ListBlock({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <div className="max-w-[60ch]">
      {heading && (
        <h2 className="mb-5 font-display text-[length:var(--text-display-s)] text-ink">{heading}</h2>
      )}
      <ul className="flex flex-col gap-3.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 text-ink-70">
            <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
            <span className="text-[0.98rem] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StackBlock({ groups }: { groups: { label: string; items: string[] }[] }) {
  return (
    <div className="grid gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g, i) => (
        <div key={i}>
          <p className="eyebrow mb-4">{g.label}</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {g.items.map((it) => (
              <li
                key={it}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.72rem] text-ink-70"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function QuoteBlock({ body, source }: { body: string; source?: string }) {
  return (
    <blockquote className="max-w-[40ch]">
      <span aria-hidden className="block font-display text-4xl leading-none text-accent">
        &ldquo;
      </span>
      <p className="mt-2 font-display text-[length:var(--text-display-s)] leading-snug text-ink">
        {body}
      </p>
      {source && <cite className="mt-4 block font-mono text-xs not-italic text-ink-50">{source}</cite>}
    </blockquote>
  );
}

function DiagramBlock({
  variant,
  caption,
}: {
  variant: import("@/lib/types").DiagramVariant;
  caption?: string;
}) {
  return (
    <figure className="m-0">
      <div className="overflow-x-auto rounded-lg border border-line bg-paper-raised/50 px-4 py-8 text-ink sm:px-8">
        <div className="mx-auto min-w-[520px] max-w-[720px]">
          <Diagram variant={variant} />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 max-w-[60ch] font-mono text-xs leading-relaxed text-ink-40">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function renderBlock(block: CaseBlock, i: number) {
  switch (block.kind) {
    case "prose":
      return <ProseBlock heading={block.heading} body={block.body} />;
    case "aside":
      return <AsideBlock label={block.label} body={block.body} />;
    case "figures":
      return <FiguresBlock items={block.items} />;
    case "list":
      return <ListBlock heading={block.heading} items={block.items} />;
    case "stack":
      return <StackBlock groups={block.groups} />;
    case "quote":
      return <QuoteBlock body={block.body} source={block.source} />;
    case "diagram":
      return <DiagramBlock variant={block.variant} caption={block.caption} />;
    default:
      return null;
  }
}

export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className="flex flex-col gap-14 md:gap-16">
      {blocks.map((block, i) => (
        <Reveal key={i}>{renderBlock(block, i)}</Reveal>
      ))}
    </div>
  );
}
