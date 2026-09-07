import Link from "next/link";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { approach, stack } from "@/content/about";
import { HeroMark } from "@/components/illustrations/HeroMark";
import { Motif } from "@/components/illustrations/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHead } from "@/components/ui/SectionHead";
import { ArrowUpRight } from "@/components/ui/icons";

const pillars = [
  { name: "AI", line: "LLM and vision models doing work a plain API can't — in the request path only where they earn it." },
  { name: "Infrastructure", line: "Event-driven backends, real access control, and caching that matches how the data gets read." },
  { name: "Cloud", line: "The whole AWS account written as Terraform, so it's something you can read instead of archaeology." },
];

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="u-container pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2.5 font-mono text-xs text-ink-50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              {site.availability} · {site.location} · {site.timezone}
            </p>

            <h1 className="font-display text-[length:var(--text-display-xl)] leading-[0.98] tracking-[-0.02em] text-ink">
              I build backends, the cloud they run on, and the AI on top.
            </h1>

            <p className="mt-7 max-w-[46ch] text-lg text-ink-70">
              I&rsquo;m {site.name.split(" ")[0]}, a software engineer at the intersection of AI, infrastructure,
              and cloud. On my current platform I own the whole line — Terraform underneath, services in the
              middle, LLM and vision models on top.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ArrowLink href="/work" variant="solid">
                See the work
              </ArrowLink>
              <ArrowLink href="/about">Read the approach</ArrowLink>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-1.5 font-mono text-sm text-ink-50 transition-colors hover:text-accent"
              >
                {site.email}
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="mx-auto max-w-[22rem] md:max-w-none">
              <HeroMark className="text-ink" />
            </div>
          </div>
        </div>

        {/* meta strip */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
          <span className="font-mono text-xs text-ink-40">Currently</span>
          <span className="text-sm text-ink-70">
            {site.role} II <span className="text-ink-40">@</span> Futurenostics
          </span>
          <span className="hidden h-3 w-px bg-line sm:inline-block" />
          <div className="flex flex-wrap gap-2">
            {["AI", "Infrastructure", "Cloud"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] tracking-wide text-ink-50"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The intersection / pillars ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead
            index="01"
            eyebrow="The intersection"
            title="Few three-year engineers can claim both. That overlap is the whole point."
          >
            <p>
              Plenty of engineers write good backend code. Fewer are comfortable writing the cloud account
              underneath it as Terraform, and fewer still are wiring a model into the same system and keeping it
              running. I sit where those three meet.
            </p>
          </SectionHead>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="bg-paper">
              <div className="flex h-full flex-col gap-4 p-7">
                <span className="font-mono text-xs text-accent">{`0${i + 1}`}</span>
                <h3 className="font-display text-[length:var(--text-display-s)] text-ink">{p.name}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-70">{p.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Selected work ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-t border-line pt-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">02</span>
              <span className="eyebrow">Selected work</span>
            </div>
            <ArrowLink href="/work">All projects</ArrowLink>
          </div>
        </Reveal>

        <ul className="mt-6">
          {featuredProjects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-6 border-b border-line py-7 md:grid-cols-[3rem_5.5rem_1fr_auto] md:gap-x-8"
              >
                <span className="font-mono text-sm text-ink-40 transition-colors group-hover:text-accent">
                  {p.index}
                </span>

                <span className="hidden h-16 w-[5.5rem] text-ink-30 transition-colors duration-300 group-hover:text-accent md:block">
                  <Motif variant={p.motif} />
                </span>

                <span className="min-w-0">
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[length:var(--text-display-s)] text-ink transition-colors group-hover:text-accent">
                      {p.title}
                    </span>
                    <span className="hidden font-mono text-xs text-ink-40 sm:inline">{p.year}</span>
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-[0.95rem] text-ink-70">
                    {p.summary}
                  </span>
                  <span className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-40">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>

                <span className="hidden shrink-0 text-ink-30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:block">
                  <ArrowUpRight size={22} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---- How I work ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="03" eyebrow="How I work" title="Three habits I&rsquo;d defend at 3 a.m." />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-ink-40">{`0${i + 1}`}</span>
                <h3 className="font-display text-xl text-ink">{a.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-70">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <ArrowLink href="/about">More about how I got here</ArrowLink>
        </Reveal>
      </section>

      {/* ---- Toolkit / the stack ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead
            index="04"
            eyebrow="Toolkit"
            title="The stack, grouped by where it lives."
          >
            <p>
              Four years of production work, de-duplicated. Depth varies, and I&rsquo;ll tell you honestly
              which parts are deep and which are passing.
            </p>
          </SectionHead>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <Reveal key={group.area} delay={Math.min(i, 6) * 60}>
              <div>
                <h3 className="eyebrow mb-4 border-t border-line pt-3">{group.area}</h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] leading-none text-ink-70"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <ArrowLink href="/about">The full breakdown, with experience</ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
