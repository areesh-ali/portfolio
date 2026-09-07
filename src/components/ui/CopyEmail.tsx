"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "./icons";

/* Prominent email with a copy-to-clipboard affordance. Falls back gracefully
   when the clipboard API is unavailable, and shows a brief confirmed state. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked — the mailto link and visible address still work */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <a
        href={`mailto:${email}`}
        className="group inline-flex items-center gap-3 font-display text-[length:var(--text-display-s)] text-ink transition-colors duration-200 hover:text-accent"
      >
        <Mail size={22} className="text-ink-40 transition-colors group-hover:text-accent" />
        <span className="border-b border-accent pb-1">{email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-50 transition-colors duration-200 hover:border-accent hover:text-accent"
        aria-live="polite"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
