import type { Metadata } from "next";
import { allProjects } from "@/content/projects";
import { WorkIndex } from "@/components/work/WorkIndex";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across AI, infrastructure, and cloud — production platforms, marketplaces, real-time apps, and the systems underneath them.",
};

export default function WorkPage() {
  const live = allProjects.filter((p) => p.liveUrl).length;

  return (
    <div className="u-container py-14 md:py-20">
      {/* header */}
      <Reveal>
        <div className="border-t border-line pt-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">01</span>
            <span className="eyebrow">Work · Index</span>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="font-display text-[length:var(--text-display-l)] leading-[1.02] tracking-[-0.015em] text-ink md:col-span-8">
              Production systems, from the cloud account up to the model.
            </h1>
            <p className="max-w-[38ch] text-ink-70 md:col-span-4">
              {allProjects.length} projects across four to five years — {live} of them live products
              you can open. Hover a title to preview it.
            </p>
          </div>
        </div>
      </Reveal>

      {/* the index */}
      <div className="mt-14">
        <WorkIndex />
      </div>

      {/* closing */}
      <Reveal>
        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] font-display text-[length:var(--text-display-s)] leading-snug text-ink">
            Most of this is client and platform work. The through-line is systems that stay up.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <ArrowLink href="/about">Read the approach</ArrowLink>
            <ArrowLink href="/contact" variant="solid">
              Start a conversation
            </ArrowLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
