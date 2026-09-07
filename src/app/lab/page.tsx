import type { Metadata } from "next";
import { experiments, type Experiment } from "@/content/lab";
import { Reveal } from "@/components/ui/Reveal";
import { Motif } from "@/components/illustrations/Motif";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Smaller experiments, notes, and side builds from Areesh Ali — how the thinking behind the production work takes shape.",
};

const statusDot: Record<Experiment["status"], string> = {
  live: "bg-sage",
  ongoing: "bg-accent",
  shelved: "bg-ink-40",
  note: "bg-slate",
};

const statusLabel: Record<Experiment["status"], string> = {
  live: "live",
  ongoing: "ongoing",
  shelved: "shelved",
  note: "note",
};

export default function LabPage() {
  return (
    <section className="u-container pt-10 pb-16 md:pt-16 md:pb-24">
      <Reveal>
        <div className="flex items-center gap-3 border-t border-line pt-4">
          <span className="font-mono text-xs text-accent">03</span>
          <span className="eyebrow">Lab</span>
        </div>
        <h1 className="mt-5 max-w-[18ch] font-display text-[length:var(--text-display-l)] leading-[1.04] tracking-[-0.02em] text-ink">
          Where the thinking gets loose.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-ink-70">
          Smaller than the client work and less finished: notes I keep adding to, experiments that either
          earned their way into production or got shelved, and the odd thing built for its own sake. It&rsquo;s
          the sketchbook behind the projects.
        </p>
      </Reveal>

      <ul className="mt-14">
        {experiments.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 70}>
            <article className="grid grid-cols-[auto_1fr] items-start gap-x-5 border-b border-line py-8 md:grid-cols-[4.5rem_1fr_auto] md:gap-x-8">
              <span className="mt-1 h-11 w-11 text-ink-30 md:h-14 md:w-14" aria-hidden>
                <Motif variant={e.motif} />
              </span>

              <div className="min-w-0">
                <h2 className="font-display text-[length:var(--text-display-s)] leading-tight text-ink">
                  {e.title}
                </h2>
                <p className="mt-2.5 max-w-[58ch] text-ink-70">{e.body}</p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-40 md:hidden">
                  <span>{e.kind}</span>
                  <span aria-hidden>·</span>
                  <span>{e.year}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${statusDot[e.status]}`} aria-hidden />
                    {statusLabel[e.status]}
                  </span>
                </p>
              </div>

              <div className="hidden shrink-0 flex-col items-end gap-1.5 text-right md:flex">
                <span className="font-mono text-[0.7rem] tracking-wide text-ink-50">{e.kind}</span>
                <span className="font-mono text-[0.7rem] text-ink-40">{e.year}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-40">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDot[e.status]}`} aria-hidden />
                  {statusLabel[e.status]}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
        <ArrowLink href="/work">See the shipped work</ArrowLink>
        <span className="text-ink-50">
          Or{" "}
          <a href="/contact" className="link">
            tell me what you&rsquo;re building
          </a>
          .
        </span>
      </Reveal>
    </section>
  );
}
