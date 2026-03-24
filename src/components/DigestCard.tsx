"use client";

import { motion } from "framer-motion";
import type { DigestEdition } from "@/lib/types";
import { StoryItem } from "./StoryItem";

interface DigestCardProps {
  edition: DigestEdition;
}

export function DigestCard({ edition }: DigestCardProps) {
  const dateLabel = new Date(edition.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="space-y-5">
      {/* ── Hero Header ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="emerald-card-elevated overflow-hidden relative"
      >
        {/* Orbit animation container */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30 pointer-events-none hidden sm:block"
          style={{ right: "-4vw" }}
          aria-hidden="true"
        >
          <div className="orbit-ring orbit-ring-1"><div className="orbit-dot orbit-dot-a"></div></div>
          <div className="orbit-ring orbit-ring-2"><div className="orbit-dot orbit-dot-b"></div></div>
          <div className="orbit-ring orbit-ring-3"><div className="orbit-dot orbit-dot-c"></div></div>
          <div className="orbit-ring orbit-ring-4"></div>
          <div className="orbit-core"></div>
        </div>

        {/* Emerald gradient wash at the top */}
        <div
          className="relative px-8 pt-12 pb-10 text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,185,129,0.13) 0%, rgba(16,185,129,0.04) 45%, transparent 80%)",
          }}
        >
          {/* Pulsing glow orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-64 h-32 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(16,185,129,0.22) 0%, transparent 70%)",
              filter: "blur(24px)",
              animation: "blob-pulse 7s ease-in-out infinite",
            }}
          />

          {/* Edition label chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 emerald-chip-accent mb-5"
          >
            <span>📬</span>
            <span>Personal Newsroom</span>
          </motion.div>

          {/* Big serif title — DM Sans 800 */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold text-emerald-text tracking-tight leading-tight mb-4"
            style={{
              fontFamily: "var(--font-sans)",
              letterSpacing: "-0.035em",
              textShadow: "0 4px 60px rgba(5,70,40,0.3)",
            }}
          >
            {edition.title}
          </motion.h1>

          {/* Date chip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="emerald-chip mx-auto text-emerald-muted/90"
          >
            {dateLabel}
          </motion.p>

          {/* Tag chips */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center justify-center gap-2 mt-5 flex-wrap"
          >
            <span className="emerald-chip">Morning Read</span>
            <span className="emerald-chip">High Signal</span>
            <span className="emerald-chip">{edition.item_count} items</span>
          </motion.div>
        </div>

        {/* Gradient divider at bottom of hero */}
        <div className="relative h-px w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.6) 30%, rgba(52,211,153,0.9) 50%, rgba(16,185,129,0.6) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-4 -translate-y-1/2 blur-sm"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(16,185,129,0.2) 40%, rgba(16,185,129,0.3) 50%, rgba(16,185,129,0.2) 60%, transparent 90%)",
            }}
          />
        </div>
      </motion.div>

      {/* ── Story List ─────────────────────────────────────────────── */}
      <div className="space-y-3">
        {edition.items.map((item, i) => (
          <StoryItem key={`${item.url}-${i}`} item={item} rank={i + 1} index={i} />
        ))}
      </div>

      {/* ── Edition End Cap ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center py-4"
      >
        <div className="relative h-px w-full overflow-hidden mb-4">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.4) 30%, rgba(16,185,129,0.4) 70%, transparent 100%)",
            }}
          />
        </div>
        <p className="text-xs text-emerald-muted/60 font-medium tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>
          — {edition.items.length} stories · Personal Newsroom —
        </p>
      </motion.div>
    </section>
  );
}
