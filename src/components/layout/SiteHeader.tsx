"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, Close, iconFor } from "@/components/ui/icons";

function Monogram() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" />
      <path d="M12 4c3 5-3 7 0 16" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="1 4" />
      <circle cx="12" cy="4" r="2.2" fill="var(--accent)" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const menuItems = nav.filter((n) => n.href !== "/");

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 bg-paper/95 transition-[border-color,background-color] duration-300"
      style={{
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        backdropFilter: "saturate(1.1)",
      }}
    >
      <div className="u-container flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-ink"
          aria-label={`${site.name} — home`}
        >
          <span className="text-ink-70 transition-transform duration-300 group-hover:rotate-[8deg]">
            <Monogram />
          </span>
          <span className="font-display text-[1.15rem] leading-none tracking-[-0.01em]">
            {site.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative flex items-baseline gap-1.5 px-3 py-2 text-[0.95rem]"
              >
                <span
                  className={`font-mono text-[0.6rem] tracking-[0.1em] transition-colors duration-200 ${
                    active ? "text-accent" : "text-ink-30 group-hover:text-ink-50"
                  }`}
                >
                  {item.short}
                </span>
                <span
                  className={`transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink-70 group-hover:text-ink"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className="absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300"
                  style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
                  aria-hidden
                />
              </Link>
            );
          })}
          <span className="mx-2 h-4 w-px bg-line" aria-hidden />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu — composed for touch, not a shrunken desktop nav */}
      <div
        className="fixed inset-0 z-50 md:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity 320ms var(--motion-ease)",
        }}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-paper" />
        <div className="relative flex h-full flex-col">
          <div className="u-container flex h-[4.5rem] items-center justify-between">
            <span className="inline-flex items-center gap-2.5 text-ink">
              <span className="text-ink-70">
                <Monogram />
              </span>
              <span className="font-display text-[1.15rem]">{site.shortName}</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Close menu"
            >
              <Close size={22} />
            </button>
          </div>

          <nav aria-label="Mobile" className="u-container flex flex-1 flex-col justify-center gap-1">
            {menuItems.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-baseline gap-4 border-b border-line py-5"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(12px)",
                    opacity: open ? 1 : 0,
                    transition: `opacity 400ms var(--motion-ease) ${120 + i * 60}ms, transform 400ms var(--motion-ease) ${120 + i * 60}ms`,
                  }}
                >
                  <span className="font-mono text-xs text-accent">{item.short}</span>
                  <span
                    className={`font-display text-[2.4rem] leading-none ${active ? "text-accent" : "text-ink"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="u-container flex items-center gap-5 pb-10 pt-6">
            {site.socials.map((s) => {
              const Icon = iconFor(s.label);
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm text-ink-50 transition-colors hover:text-accent"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon size={18} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
