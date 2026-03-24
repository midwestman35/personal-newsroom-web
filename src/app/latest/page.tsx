"use client";

import { motion } from "framer-motion";
import { EditionNav } from "@/components/EditionNav";
import { DigestCard } from "@/components/DigestCard";
import { SkeletonCard, SkeletonHero } from "@/components/SkeletonCard";
import { useLatestEdition } from "@/lib/hooks";
import type { DigestEdition } from "@/lib/types";

const EDITION_CHIPS = [
  { label: "Morning Brief", slug: "morning-brief", emoji: "🌅" },
  { label: "Finance", slug: "finance", emoji: "📈" },
  { label: "Weekend", slug: "weekend", emoji: "🏖️" },
];

export default function LatestPage() {
  const { data, error, isLoading } = useLatestEdition("morning-brief");

  return (
    <div className="min-h-screen" style={{ background: "var(--color-emerald-bg)" }}>
      <EditionNav />

      <main className="max-w-2xl mx-auto px-4 pt-3 pb-10 space-y-4">
        {/* ── Loading State ─────────────────────────────────────── */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 pt-2"
          >
            <SkeletonHero />
            {[0, 1, 2].map((i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </motion.div>
        )}

        {/* ── Error State ───────────────────────────────────────── */}
        {error && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="emerald-card-elevated px-8 py-12 text-center space-y-3"
          >
            <p className="text-4xl">😬</p>
            <p className="font-semibold" style={{ color: "var(--color-emerald-text)" }}>
              The internet had a moment
            </p>
            <p className="text-sm" style={{ color: "var(--color-emerald-muted)" }}>
              Could not load the digest. Try again?{" "}
              <a href="/archive" style={{ color: "var(--color-emerald-accent)" }}>
                Browse the archive
              </a>{" "}
              in the meantime.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="emerald-chip-accent cursor-pointer hover:opacity-80 transition-opacity mt-2"
            >
              Retry ↻
            </button>
          </motion.div>
        )}

        {/* ── Digest ────────────────────────────────────────────── */}
        {data && !isLoading && (
          <DigestCard edition={data as DigestEdition} />
        )}

        {/* ── Edition Switcher Chips ────────────────────────────── */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center justify-center gap-2 pt-2 flex-wrap"
          >
            {EDITION_CHIPS.map((chip) => (
              <motion.button
                key={chip.slug}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="emerald-chip cursor-pointer transition-all duration-200"
                style={{
                  borderColor: "var(--color-emerald-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(16,185,129,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--color-emerald-text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-emerald-border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--color-emerald-muted)";
                }}
              >
                <span>{chip.emoji}</span>
                <span>{chip.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </main>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="flex justify-center pb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            border: "1px solid rgba(30,61,46,0.5)",
            background: "rgba(15,34,25,0.7)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="live-dot" />
          <span className="text-xs" style={{ color: "rgba(143,170,158,0.7)", fontFamily: "var(--font-mono)" }}>
            handcrafted with ☕ &amp; rss feeds
          </span>
        </div>
      </footer>
    </div>
  );
}
