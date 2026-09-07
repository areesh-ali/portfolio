import type { Metadata } from "next";
import { site } from "@/content/site";
import { bio, approach, timeline, stack, strengths, credentials, now } from "@/content/about";
import { Motif } from "@/components/illustrations/Motif";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Areesh Ali Abdullah — a software engineer working at the intersection of AI, infrastructure, and cloud. Experience, approach, and the full stack.",
};

export default function AboutPage() {
  return (
    <>
      {/* ---- Intro ---- */}
      <section className="u-container pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="eyebrow eyebrow-accent mb-6">About</p>
            <h1 className="max-w-[15ch] font-display text-[length:var(--text-display-l)] leading-[1.0] tracking-[-0.02em] text-ink">
              I build backends, the cloud they run on, and the AI on top.
            </h1>
            <div className="prose mt-8">
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ArrowLink href="/work" variant="solid">
                See the work
              </ArrowLink>
              <ArrowLink href="/contact">Start a conversation</ArrowLink>
            </div>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="aspect-square w-full max-w-[17rem] text-ink-30">
              <Motif variant="lattice" label="An abstract mark of a networked system" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 font-mono text-xs text-ink-50">
          <span className="text-ink-40">Based</span>
          <span>{site.location}</span>
          <span className="hidden h-3 w-px bg-line sm:inline-block" />
          <span>{site.timezone}</span>
          <span className="hidden h-3 w-px bg-line sm:inline-block" />
          <span>{site.availability}</span>
        </div>
      </section>

      {/* ---- Approach ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="01" eyebrow="How I work" title={<>Three habits I&rsquo;d defend at 3 a.m.</>} />
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
      </section>

      {/* ---- Experience (depth centerpiece) ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="02" eyebrow="Experience" title="Four years, mostly at the intersection." />
        </Reveal>
        <ul className="mt-12">
          {timeline.map((t, i) => (
            <Reveal as="li" key={`${t.role}-${t.period}`} delay={Math.min(i, 4) * 50}>
              <div className="grid grid-cols-1 gap-y-3 border-t border-line py-8 md:grid-cols-[13rem_1fr] md:gap-x-10">
                <p className="font-mono text-xs leading-relaxed text-ink-50">{t.period}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-[length:var(--text-display-s)] text-ink">{t.role}</h3>
                    <span className="text-sm text-ink-50">{t.org}</span>
                  </div>
                  <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-70">{t.note}</p>
                  <div className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] text-ink-40">
                    {t.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <li className="border-t border-line" aria-hidden />
        </ul>
      </section>

      {/* ---- Tech stack (full inventory) ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="03" eyebrow="Tools" title="The whole stack, grouped by where it lives.">
            <p>
              I&rsquo;ve shipped with everything here across four years of client work. Depth varies, and I&rsquo;ll
              tell you honestly which is deep and which is passing.
            </p>
          </SectionHead>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {stack.map((group, i) => (
            <Reveal key={group.area} delay={Math.min(i, 5) * 60}>
              <div className="border-t border-line pt-4">
                <h3 className="eyebrow mb-3.5">{group.area}</h3>
                <p className="font-mono text-[0.78rem] leading-relaxed text-ink-70">
                  {group.items.map((it, idx) => (
                    <span key={it}>
                      {it}
                      {idx < group.items.length - 1 && <span className="text-ink-30"> · </span>}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Strengths ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="04" eyebrow="Strengths" title="What you&rsquo;re actually hiring." />
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="border-t border-line pt-5">
                <h3 className="font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Now + credentials ---- */}
      <section className="u-container py-16 md:py-24">
        <Reveal>
          <SectionHead index="05" eyebrow="Now" title="What I&rsquo;m on right now" />
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="prose">
              {now.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ArrowLink href="/contact" variant="solid">
                Start a conversation
              </ArrowLink>
              <ArrowLink href="/work">See the work</ArrowLink>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={80}>
            <div className="md:border-l md:border-line md:pl-10">
              <span className="eyebrow">Credentials &amp; learning</span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {credentials.map((c) => (
                  <li key={c} className="font-mono text-[0.8rem] leading-relaxed text-ink-70">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
