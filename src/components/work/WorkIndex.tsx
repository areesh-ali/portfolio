"use client";

import Link from "next/link";
import { useState } from "react";
import { allProjects } from "@/content/projects";
import { Motif } from "@/components/illustrations/Motif";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/lib/types";

const toneColor: Record<Project["tone"], string> = {
  clay: "var(--clay)",
  sage: "var(--sage)",
  slate: "var(--slate)",
  ink: "var(--ink-50)",
};

function Preview({ project }: { project: Project }) {
  return (
    <div key={project.slug} className="wi-fade">
      <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-line bg-paper-raised">
        {project.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cover}
            alt={`${project.title} — live product`}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center p-10"
            style={{
              color: toneColor[project.tone],
              background: `radial-gradient(120% 90% at 70% 25%, color-mix(in srgb, ${toneColor[project.tone]} 14%, var(--paper-raised)), var(--paper-raised))`,
            }}
          >
            <div className="h-[70%] w-full max-w-[190px]">
              <Motif variant={project.motif} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <p className="font-mono text-xs text-ink-50">
          {project.index} · {project.role}
        </p>
        <p className="font-mono text-xs text-ink-40">{project.year}</p>
      </div>
      <p className="mt-2 max-w-[42ch] text-sm text-ink-70">{project.summary}</p>
    </div>
  );
}

export function WorkIndex() {
  const [active, setActive] = useState(allProjects[0]?.slug);
  const activeProject = allProjects.find((p) => p.slug === active) ?? allProjects[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
      <ul>
        {allProjects.map((p) => {
          const isActive = p.slug === active;
          return (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                onMouseEnter={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
                aria-label={`${p.title} — ${p.summary}`}
                className="group grid grid-cols-[2.2rem_1fr] items-start gap-x-4 border-b border-line py-6 md:grid-cols-[2.6rem_1fr_auto] md:items-baseline md:gap-x-6"
              >
                <span
                  className={`font-mono text-sm transition-colors ${
                    isActive ? "text-accent" : "text-ink-40 group-hover:text-accent"
                  }`}
                >
                  {p.index}
                </span>

                <span className="min-w-0">
                  {/* mobile-only thumbnail */}
                  <span className="mb-3 block overflow-hidden rounded-md border border-line bg-paper-raised lg:hidden">
                    {p.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.cover}
                        alt=""
                        className="block aspect-[16/9] w-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="flex aspect-[16/9] w-full items-center justify-center p-6 text-ink-30">
                        <span className="h-full w-16">
                          <Motif variant={p.motif} />
                        </span>
                      </span>
                    )}
                  </span>

                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className={`font-display text-[length:var(--text-display-s)] leading-none transition-colors ${
                        isActive ? "text-accent" : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="font-mono text-xs text-ink-40">{p.year}</span>
                    {p.liveUrl && (
                      <span className="inline-flex items-center gap-1 font-mono text-[0.66rem] text-accent">
                        live
                        <ArrowUpRight size={11} />
                      </span>
                    )}
                  </span>

                  <span className="mt-2 block max-w-[54ch] text-[0.95rem] text-ink-70">{p.summary}</span>

                  <span className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-40">
                    <span className="text-ink-50">{p.kind}</span>
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>

                <span className="hidden shrink-0 self-center text-ink-30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:block">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* sticky changing preview (desktop) */}
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <Preview project={activeProject} />
        </div>
      </aside>
    </div>
  );
}
