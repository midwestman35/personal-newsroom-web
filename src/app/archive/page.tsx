"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EditionNav } from "@/components/EditionNav";
import { useArchiveIndex } from "@/lib/hooks";

export default function ArchivePage() {
  const { data, error, isLoading } = useArchiveIndex();

  const editionEntries: Array<{
    slug: string;
    title: string;
    date: string;
    item_count: number;
    htmlPath: string;
  }> = [];

  if (data?.editions) {
    for (const [slug, edition] of Object.entries(data.editions)) {
      for (const version of edition.versions ?? []) {
        editionEntries.push({
          slug,
          title: edition.title ?? slug,
          date: version.date,
          item_count: version.item_count,
          htmlPath: version.html_path,
        });
      }
    }
    editionEntries.sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--color-emerald-bg)" }}>
      <EditionNav />

      <main className="max-w-2xl mx-auto px-4 pt-3 pb-10 space-y-5">
        {/* ── Archive Hero ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="emerald-card-elevated overflow-hidden relative"
        >
          <div
            className="relative px-8 pt-10 pb-8 text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.03) 50%, transparent 100%)",
            }}
          >
            {/* Glow orb */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-1.5 emerald-chip-accent mb-4"
            >
              <span>🗂️</span>
              <span>Archive</span>
            </motion.div>
            <h1
              className="text-3xl font-bold tracking-tight"
              style={{
                color: "var(--color-emerald-text)",
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
              }}
            >
              Past Editions
            </h1>
            <p className="text-sm mt-2" style={{ color: "var(--color-emerald-muted)" }}>
              The full back-catalog. Every morning brief, right here.
            </p>
          </div>
          {/* Divider */}
          <div className="relative h-px w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.5) 30%, rgba(16,185,129,0.5) 70%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* ── Loading ──────────────────────────────────────────── */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="emerald-card px-5 py-4 flex gap-4 items-center"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.1 }}
                  className="w-14 h-14 rounded-2xl flex-shrink-0"
                  style={{ background: "rgba(30,61,46,0.8)" }}
                />
                <div className="flex-1 space-y-2">
                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.1 + 0.1 }}
                    className="h-3 rounded-full w-1/2"
                    style={{ background: "var(--color-emerald-border)" }}
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.1 + 0.2 }}
                    className="h-2.5 rounded-full w-1/3"
                    style={{ background: "rgba(30,61,46,0.6)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Error ────────────────────────────────────────────── */}
        {error && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="emerald-card-elevated px-8 py-12 text-center space-y-2"
          >
            <p className="text-3xl">😵</p>
            <p className="font-semibold" style={{ color: "var(--color-emerald-text)" }}>
              Archive went poof
            </p>
            <p className="text-sm" style={{ color: "var(--color-emerald-muted)" }}>
              Something went sideways. Not ideal.
            </p>
          </motion.div>
        )}

        {/* ── Timeline List ────────────────────────────────────── */}
        {editionEntries.length > 0 && (
          <div className="space-y-2">
            {editionEntries.map((entry, i) => {
              const d = new Date(entry.date);
              const dayNum = d.toLocaleDateString("en-US", { day: "2-digit" });
              const monthYear = d.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
              const fullDate = d.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              return (
                <motion.div
                  key={`${entry.slug}-${entry.date}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                >
                  <Link href="/latest" className="block">
                    <div
                      className="emerald-card flex items-center gap-4 px-4 py-3.5 group transition-all duration-250"
                      style={{
                        transitionProperty: "border-color, box-shadow",
                        border: "1px solid var(--color-emerald-border)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(16,185,129,0.3)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(16,185,129,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-emerald-border)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      {/* Date badge */}
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.04) 100%)",
                          border: "1px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        <span
                          className="font-bold text-lg leading-none"
                          style={{ color: "var(--color-emerald-accent)" }}
                        >
                          {dayNum}
                        </span>
                        <span
                          className="text-[0.6rem] font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(143,170,158,0.7)" }}
                        >
                          {monthYear.split(" ")[0]}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-bold uppercase tracking-widest mb-0.5"
                          style={{
                            color: "rgba(16,185,129,0.7)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {entry.title}
                        </p>
                        <p
                          className="font-semibold text-sm leading-snug"
                          style={{
                            color: "var(--color-emerald-text)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {fullDate}
                        </p>
                      </div>

                      {/* Right: count + arrow */}
                      <div className="flex-shrink-0 flex flex-col items-end gap-1">
                        <span className="emerald-chip text-[0.65rem]">
                          {entry.item_count} items
                        </span>
                        <motion.span
                          className="text-xs transition-colors duration-200"
                          style={{ color: "rgba(143,170,158,0.5)" }}
                          whileHover={{ x: 2 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ── Empty ────────────────────────────────────────────── */}
        {!isLoading && !error && editionEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="emerald-card-elevated px-8 py-14 text-center space-y-2"
          >
            <p className="text-4xl">🕳️</p>
            <p className="font-semibold" style={{ color: "var(--color-emerald-text)" }}>
              Nothing here yet.
            </p>
            <p className="text-sm" style={{ color: "var(--color-emerald-muted)" }}>
              Be patient, bestie.
            </p>
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
