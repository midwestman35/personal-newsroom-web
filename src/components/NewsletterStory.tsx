"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DigestItem } from "@/lib/types";

interface NewsletterStoryProps {
  item: DigestItem;
  index: number; // for staggered entrance
}

export function NewsletterStory({ item, index }: NewsletterStoryProps) {
  const impactLevel =
    item.scores.importance >= 75
      ? "high"
      : item.scores.importance >= 50
      ? "medium"
      : "low";

  const borderStyles = {
    high: {
      color: "rgba(16,185,129,0.9)",
      glow: "0 0 8px rgba(16,185,129,0.35)",
      hoverGlow: "0 0 16px rgba(16,185,129,0.6)",
    },
    medium: {
      color: "rgba(52,211,153,0.45)",
      glow: "none",
      hoverGlow: "0 0 8px rgba(52,211,153,0.25)",
    },
    low: {
      color: "rgba(30,61,46,0.6)",
      glow: "none",
      hoverGlow: "none",
    },
  };

  const border = borderStyles[impactLevel];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="group relative pl-4 transition-all duration-300"
      style={{
        borderLeft: `3px solid ${border.color}`,
        paddingTop: "4px",
        paddingBottom: "4px",
        animation: impactLevel === "high" ? "border-pulse 3s ease-in-out infinite" : undefined,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderLeftColor =
          impactLevel === "high"
            ? "rgba(16,185,129,1)"
            : impactLevel === "medium"
            ? "rgba(52,211,153,0.7)"
            : "rgba(30,61,46,0.9)";
        el.style.paddingTop = "6px";
        el.style.paddingBottom = "6px";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderLeftColor = border.color;
        el.style.paddingTop = "4px";
        el.style.paddingBottom = "4px";
      }}
    >
      {/* Headline */}
      <h3
        className="font-semibold text-[0.975rem] leading-snug mb-2"
        style={{
          color: "var(--color-emerald-text)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {item.title}
      </h3>

      {/* Summary */}
      {item.summary && (
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "var(--color-emerald-muted)" }}
        >
          {item.summary}
        </p>
      )}

      {/* Why it matters blockquote */}
      {item.why_it_matters && (
        <div
          className="mb-3 pl-3 py-1"
          style={{ borderLeft: "2px solid rgba(16,185,129,0.4)" }}
        >
          <p
            className="text-[0.62rem] font-bold uppercase tracking-widest mb-1"
            style={{
              color: "rgba(16,185,129,0.65)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Why it matters
          </p>
          <p
            className="text-sm leading-relaxed italic"
            style={{ color: "var(--color-emerald-muted)" }}
          >
            {item.why_it_matters}
          </p>
        </div>
      )}

      {/* Read more + source */}
      <div className="flex items-center justify-end">
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold flex items-center gap-1"
          style={{
            color: "var(--color-emerald-accent)",
            fontFamily: "var(--font-mono)",
            opacity: 0.75,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75";
          }}
        >
          Read more
          <span style={{ color: "var(--color-emerald-muted)", marginRight: "2px" }}>
            · {item.source_name}
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
