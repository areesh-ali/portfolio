import { ArrowLink } from "@/components/ui/ArrowLink";
import { Motif } from "@/components/illustrations/Motif";

export default function NotFound() {
  return (
    <section className="u-container flex min-h-[70vh] items-center py-20">
      <div className="grid w-full items-center gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="font-mono text-xs tracking-[0.18em] text-accent">404 · NOT FOUND</p>
          <h1 className="mt-5 max-w-[15ch] font-display text-[length:var(--text-display-xl)] leading-[0.98] tracking-[-0.02em] text-ink">
            This one didn&rsquo;t deploy.
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg text-ink-70">
            The page you asked for isn&rsquo;t here &mdash; wrong path, or something that moved. Nothing broke on
            your end. Here are two routes that definitely resolve.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ArrowLink href="/" variant="solid">
              Back to home
            </ArrowLink>
            <ArrowLink href="/work">See the work</ArrowLink>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="mx-auto max-w-[16rem] text-ink-30 md:ml-auto md:mr-0">
            <Motif variant="scan" label="A scanning field searching an empty frame" />
          </div>
        </div>
      </div>
    </section>
  );
}
