import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  /** "solid" reads as a primary action; "quiet" is an inline text arrow. */
  variant?: "solid" | "quiet";
};

export function ArrowLink({ href, children, external, className = "", variant = "quiet" }: Props) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      <Icon
        size={variant === "solid" ? 17 : 16}
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      />
    </>
  );

  const base =
    variant === "solid"
      ? "group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors duration-200 hover:bg-accent"
      : "group inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-200 hover:text-accent";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${className}`}>
      {inner}
    </Link>
  );
}
