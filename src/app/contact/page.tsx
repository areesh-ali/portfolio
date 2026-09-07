import type { Metadata } from "next";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Motif } from "@/components/illustrations/Motif";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { iconFor, ArrowUpRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Areesh Ali — remote engineering roles and select freelance work at the intersection of backend, cloud, and AI.",
};

const talkAbout = [
  "Backend and AI features that both have to hold up under real load.",
  "Standing up an AWS account in Terraform, from an empty region.",
  "Getting an LLM or vision feature to run in production and stay running.",
  "A freelance build where you want one person to own the whole line.",
];

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("A problem worth solving")}`;

export default function ContactPage() {
  return (
    <>
      <section className="u-container pt-10 pb-14 md:pt-16 md:pb-20">
        <Reveal>
          <div className="flex items-center gap-3 border-t border-line pt-4">
            <span className="font-mono text-xs text-accent">04</span>
            <span className="eyebrow">Contact</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <h1 className="max-w-[16ch] font-display text-[length:var(--text-display-l)] leading-[1.02] tracking-[-0.02em] text-ink">
                Tell me what has to stay up.
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-[46ch] text-lg text-ink-70">
                The work I like best sits where a backend, a cloud account, and a model all have to hold
                together. If that&rsquo;s what you&rsquo;re building, a role or a freelance project, send me the
                specifics and I&rsquo;ll say honestly whether I&rsquo;m the right fit.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <p className="eyebrow mb-4">Write to me</p>
              <CopyEmail email={site.email} />
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={mailto}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors duration-200 hover:bg-accent"
                >
                  Start an email
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                {site.socials
                  .filter((s) => s.label !== "Email")
                  .map((s) => {
                    const Icon = iconFor(s.label);
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-ink-50 transition-colors duration-200 hover:text-accent"
                      >
                        <Icon size={18} />
                        <span>{s.label}</span>
                        <span className="font-mono text-xs text-ink-30 group-hover:text-accent">{s.handle}</span>
                      </a>
                    );
                  })}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="mx-auto max-w-[14rem] text-ink-30 md:ml-auto md:mr-0">
                <Motif variant="signal" label="Signal radiating from a single source" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="u-container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHead eyebrow="Good things to talk about" title="Bring a specific problem.">
              <ul className="mt-2 space-y-4">
                {talkAbout.map((t) => (
                  <li key={t} className="flex gap-3 text-ink-70">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </SectionHead>
          </Reveal>

          <Reveal delay={90}>
            <div>
              <div className="flex items-center gap-3 border-t border-line pt-4">
                <span className="eyebrow">Where I am</span>
              </div>
              <div className="mt-6 space-y-5">
                <p className="inline-flex items-center gap-2.5 text-ink">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
                  </span>
                  {site.availability}
                </p>
                <p className="text-ink-70">
                  Based in {site.location} ({site.timezone}). Strong daily overlap with EU teams, and I keep
                  flexible hours for US time zones.
                </p>
                <p className="font-mono text-xs text-ink-40">
                  Reply time is usually a day, often less.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
