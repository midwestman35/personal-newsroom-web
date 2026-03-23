"use client";

import { motion } from "framer-motion";
import type { DigestEdition } from "@/lib/types";
import { StoryItem } from "./StoryItem";
import { GradientDivider } from "./GradientDivider";

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
        className="warm-card-elevated overflow-hidden"
      >
        {/* Amber gradient wash at the top */}
        <div
          className="relative px-8 pt-12 pb-10 text-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(212,168,75,0.13) 0%, rgba(212,168,75,0.04) 45%, transparent 80%)",
          }}
        >
          {/* Floating glow orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-64 h-32 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(212,168,75,0.18) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Edition label chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 warm-chip-accent mb-5"
          >
            <span>📬</span>
            <span>Personal Newsroom</span>
          </motion.div>

          {/* Big serif title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl font-bold text-warm-text tracking-tight leading-tight mb-4"
          >
            {edition.title}
          </motion.h1>

          {/* Date chip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="warm-chip mx-auto text-warm-muted/90"
          >
            {dateLabel}
          </motion.p>

          {/* Tag chips */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center justify-center gap-2 mt-5"
          >
            <span className="warm-chip">Morning Read</span>
            <span className="warm-chip">High Signal</span>
            <span className="warm-chip">{edition.item_count} items</span>
          </motion.div>
        </div>

        {/* Gradient divider at bottom of hero */}
        <GradientDivider />
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
        <GradientDivider className="mb-4" />
        <p className="text-xs text-warm-muted/60 font-medium tracking-wide">
          — {edition.items.length} stories · Personal Newsroom —
        </p>
      </motion.div>
    </section>
  );
}
