import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProject, projectNeighbors } from "@/content/projects";
import { CaseBlocks } from "@/components/work/CaseBlocks";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Motif } from "@/components/illustrations/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "@/components/ui/icons";
import type { Project } from "@/lib/types";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Areesh Ali`,
      description: project.summary,
      images: project.cover ? [{ url: project.cover }] : undefined,
    },
  };
}

const toneColor: Record<Project["tone"], string> = {
  clay: "var(--clay)",
  sage: "var(--sage)",
  slate: "var(--slate)",
  ink: "var(--ink-50)",
};

function MotifHero({ project }: { project: Project }) {
  return (
    <div
      className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-line"
      style={{
        background: `radial-gradient(120% 90% at 70% 20%, color-mix(in srgb, ${toneColor[project.tone]} 12%, var(--paper-raised)), var(--paper-raised))`,
      }}
    >
      <div className="h-[62%] max-h-[260px] text-ink" style={{ color: toneColor[project.tone] }}>
        <Motif variant={project.motif} />
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = projectNeighbors(slug);

  return (
    <article className="u-container py-12 md:py-16">
      {/* back */}
      <Link
        href="/work"
        className="group inline-flex items-center gap-2 font-mono text-xs text-ink-50 transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        All work
      </Link>

      {/* header */}
      <header className="mt-8 grid gap-8 border-b border-line pb-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-accent">{project.index}</span>
            <span className="eyebrow">{project.kind}</span>
            {project.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.logo} alt="" className="ml-1 h-5 w-auto max-w-[92px] object-contain opacity-90" />
            )}
          </div>
          <h1 className="mt-5 font-display text-[length:var(--text-display-l)] leading-[1.02] tracking-[-0.015em] text-ink">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-ink-70">{project.summary}</p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors duration-200 hover:bg-accent"
            >
              Visit {project.liveUrl.replace(/^https?:\/\//, "")}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        {/* meta rail */}
        <dl className="flex flex-col gap-5 md:col-span-4 md:border-l md:border-line md:pl-8">
          <div>
            <dt className="eyebrow mb-1.5">Role</dt>
            <dd className="text-sm text-ink-80">{project.role}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1.5">Context</dt>
            <dd className="text-sm text-ink-80">{project.context}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1.5">Year</dt>
            <dd className="font-mono text-sm text-ink-80">{project.year}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-2">Disciplines</dt>
            <dd className="flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <span key={d} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-70">
                  {d}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      {/* hero media */}
      <Reveal className="mt-12">
        {project.cover ? (
          <MediaFrame
            src={project.cover}
            alt={`${project.title} — live product`}
            href={project.liveUrl}
            caption={project.liveUrl ? `Live at ${project.liveUrl.replace(/^https?:\/\//, "")}` : undefined}
            ratio="16 / 9"
            priority
          />
        ) : (
          <MotifHero project={project} />
        )}
      </Reveal>

      {/* outcomes */}
      {project.outcomes && (
        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 border-y border-line py-8 sm:grid-cols-3">
            {project.outcomes.map((o, i) => (
              <div key={i}>
                <p className="font-display text-[length:var(--text-display-s)] leading-none text-ink">{o.value}</p>
                <p className="mt-2 text-sm text-ink-50">{o.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* body */}
      <div className="mt-16">
        <CaseBlocks blocks={project.blocks} />
      </div>

      {/* project navigation */}
      <nav aria-label="More projects" className="mt-24 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {prev && <NeighborCard project={prev} direction="prev" />}
        {next && <NeighborCard project={next} direction="next" />}
      </nav>
    </article>
  );
}

function NeighborCard({ project, direction }: { project: Project; direction: "prev" | "next" }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group flex items-center gap-5 bg-paper p-7 transition-colors hover:bg-paper-raised ${
        direction === "next" ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <span className="h-12 w-12 shrink-0 text-ink-30 transition-colors group-hover:text-accent">
        <Motif variant={project.motif} />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`flex items-center gap-1.5 font-mono text-[0.68rem] text-ink-40 ${
            direction === "next" ? "sm:justify-end" : ""
          }`}
        >
          {direction === "prev" ? (
            <>
              <ArrowLeft size={12} /> Previous
            </>
          ) : (
            <>
              Next <ArrowRight size={12} />
            </>
          )}
        </span>
        <span className="mt-1 block truncate font-display text-lg text-ink transition-colors group-hover:text-accent">
          {project.title}
        </span>
      </span>
    </Link>
  );
}
