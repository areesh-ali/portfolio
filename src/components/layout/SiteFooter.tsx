import Link from "next/link";
import { nav, site } from "@/content/site";
import { iconFor, ArrowUpRight } from "@/components/ui/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="u-container py-16 md:py-20">
        {/* Contact prompt */}
        <div className="flex flex-col gap-8 border-b border-line pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-accent mb-4">Say hello</p>
            <p className="font-display text-[clamp(1.6rem,1.2rem+2vw,2.6rem)] leading-[1.1] text-ink">
              Building something where the backend and the AI both have to hold up under load?
            </p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-sm text-ink transition-colors hover:text-accent"
          >
            <span className="border-b border-accent pb-1">{site.email}</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Colophon grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-14 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-lg text-ink">{site.name}</p>
            <p className="mt-2 max-w-[24ch] text-sm text-ink-50">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <p className="eyebrow mb-1.5">Index</p>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-ink-70 transition-colors hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="eyebrow mb-1.5">Elsewhere</p>
            {site.socials.map((s) => {
              const Icon = iconFor(s.label);
              const ext = s.href.startsWith("http");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={ext ? "_blank" : undefined}
                  rel={ext ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-ink-70 transition-colors hover:text-accent"
                >
                  <Icon size={16} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="eyebrow mb-1.5">Status</p>
            <p className="inline-flex items-center gap-2 text-sm text-ink-70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              {site.availability}
            </p>
            <p className="text-sm text-ink-50">
              {site.location} · {site.timezone}
            </p>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-40 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {year} {site.name}
          </p>
          <p className="font-mono">Set in Fraunces, Hanken Grotesk &amp; JetBrains Mono · built with Next.js</p>
          <a href="#main" className="font-mono transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
