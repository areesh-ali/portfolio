"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@/components/ui/icons";

type Theme = "light" | "dark";

function systemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* storage may be unavailable */
    }
    setTheme(stored === "light" || stored === "dark" ? stored : systemTheme());
  }, []);

  function toggle() {
    const next: Theme = (theme ?? systemTheme()) === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-70 transition-colors duration-200 hover:text-accent ${className}`}
      aria-label={
        theme === null
          ? "Toggle color theme"
          : `Switch to ${isDark ? "light" : "dark"} theme`
      }
      title="Toggle theme"
    >
      {/* Stable placeholder until mounted, then the correct glyph */}
      <span className="sr-only">Toggle theme</span>
      {theme === null ? (
        <span aria-hidden className="h-[18px] w-[18px] rounded-full border border-line-strong" />
      ) : isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
