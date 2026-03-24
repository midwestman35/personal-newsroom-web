"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DigestItem } from "@/lib/types";

interface StoryItemProps {
  item: DigestItem;
  rank: number;
  index?: number;
}

export function StoryItem({ item, rank, index = 0 }: StoryItemProps) {
  const impactLevel =
    item.scores.importance >= 75
      ? "high"
      : item.scores.importance >= 50
      ? "medium"
      : "low";

  const impactStyles = {
    high: {
      className: "bg-emerald-accent/12 border border-emerald-accent/35 text-emerald-accent",
      label: "High Impact",
      glow: "0 0 12px rgba(16,185,129,0.2)",
    },
    medium: {
      className: "bg-emerald-border/20 border border-emerald-border/40 text-emerald-muted",
      label: "Medium",
      glow: "none",
    },
    low: {
      className: "bg-transparent border border-emerald-border/60 text-emerald-muted/70",
      label: "Low",
      glow: "none",
    },
  };

  const impact = impactStyles[impactLevel];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group"
    >
      <div
        className="emerald-card-elevated p-5 space-y-3.5 transition-all duration-300"
        style={{
          borderColor: "var(--color-emerald-border)",
          transitionProperty: "box-shadow, border-color, transform",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(16,185,129,0.3)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(16,185,129,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--color-emerald-border)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 32px rgba(0,0,0,0.35)";
        }}
      >
        {/* Top row: rank badge + impact pill */}
        <div className="flex items-center justify-between">
          {/* Glowing rank badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-emerald-accent flex-shrink-0"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.06) 100%)",
              border: "1.5px solid rgba(16,185,129,0.4)",
              boxShadow: "0 0 14px rgba(16,185,129,0.2)",
            }}
          >
            {rank}
          </motion.div>

          {/* Impact pill — homepage pill style with lift on hover */}
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${impact.className}`}
            style={{
              boxShadow: impact.glow,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.04em",
              transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.background = "var(--color-emerald-accent)";
              el.style.color = "#fff";
              el.style.borderColor = "var(--color-emerald-accent)";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 6px 20px rgba(16,185,129,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.background = "";
              el.style.color = "";
              el.style.borderColor = "";
              el.style.transform = "";
              el.style.boxShadow = impact.glow;
            }}
          >
            {impact.label}
          </span>
        </div>

        {/* Topic + Title */}
        <div className="space-y-1.5">
          <p
            className="text-xs font-bold uppercase tracking-widest text-emerald-accent/80"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {item.topic}
          </p>
          <h3
            className="leading-snug font-semibold text-[0.975rem]"
            style={{
              color: "var(--color-emerald-text)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
            }}
          >
            {item.title}
          </h3>
          {item.summary && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-emerald-muted)" }}
            >
              {item.summary}
            </p>
          )}
        </div>

        {/* Why it matters */}
        {item.why_it_matters && (
          <div
            className="pl-3.5 py-1 space-y-0.5"
            style={{
              borderLeft: "2.5px solid rgba(16,185,129,0.55)",
            }}
          >
            <p
              className="text-[0.65rem] font-bold uppercase tracking-widest"
              style={{
                color: "rgba(16,185,129,0.7)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Why it matters
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-emerald-muted)" }}
            >
              {item.why_it_matters}
            </p>
          </div>
        )}

        {/* Footer row: source pill + read more */}
        <div className="flex items-center justify-between pt-0.5">
          <span
            className="emerald-chip truncate max-w-[55%]"
            style={{ fontSize: "0.68rem" }}
          >
            {item.source_name}
          </span>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold flex items-center gap-1"
            style={{
              color: "var(--color-emerald-accent)",
              fontFamily: "var(--font-mono)",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-emerald-highlight)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-emerald-accent)";
            }}
          >
            Read more
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
