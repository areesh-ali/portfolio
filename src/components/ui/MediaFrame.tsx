import { ArrowUpRight } from "./icons";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
  /** aspect ratio, defaults to a wide product-shot ratio */
  ratio?: string;
  priority?: boolean;
};

/* A warm frame for a captured product screenshot. Covers are anchored to the top
   so header/hero content stays in view. If href is given, the frame becomes a
   live-site link with a soft hover affordance. */
export function MediaFrame({ src, alt, caption, href, ratio = "16 / 10", priority }: Props) {
  const media = (
    <span className="group relative block overflow-hidden rounded-lg border border-line bg-paper-raised">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        style={{ aspectRatio: ratio }}
      />
      {href && (
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[0.68rem] text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          View live
          <ArrowUpRight size={13} />
        </span>
      )}
      {/* subtle warm edge so bright product shots sit into the page */}
      <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/5" />
    </span>
  );

  return (
    <figure className="m-0">
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" aria-label={`${alt} — open live site`}>
          {media}
        </a>
      ) : (
        media
      )}
      {caption && <figcaption className="mt-3 font-mono text-xs text-ink-40">{caption}</figcaption>}
    </figure>
  );
}
